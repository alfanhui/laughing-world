var selectedSession = lightdm.sessions[0];
var selectedSessionIndex = 0;

/* Listeners required by Lightdm */
function authentication_complete() {
    if (lightdm.is_authenticated) {
        lightdm.login(lightdm.authentication_user, selectedSession.key);
    }
}

function show_prompt(message) {
    lightdm.provide_secret(jQuery("#password").val());
}

/* Starts the sign in process */
function submitPassword() {
    lightdm.cancel_timed_login();
    lightdm.start_authentication(jQuery("#username").val());
}

/* Cycle among different sessions */
function cycleSessions() {
    selectedSession = lightdm.sessions[++selectedSessionIndex % lightdm.sessions.length];
    updateSessionNameContainer();
    jQuery("#sessionDisplay").show();
}

var userIndex = 0;
function cycleUsers() {
    jQuery("#username").val(lightdm.users[++userIndex % lightdm.users.length].name);
}

function updateSessionNameContainer() {
    jQuery("#sessionNameContainer").html(selectedSession.name);
}

jQuery(document).ready(function() {
    /* Creates the keypress listener to submit when the user
       presses ENTER or SHIFT+ENTER */
    jQuery("input").keypress(function() {
        if (event.which == 13 || event.which == 10) {
            event.preventDefault();
            submitPassword();
        }
    });

    jQuery(document).keydown(function() {
        if (!event.shiftKey && !event.ctrlKey && event.altKey && !event.metaKey) {
            switch (event.which) {
                case 83: /* Alt + S */
                case 67: /* Alt + C */
                    cycleSessions();
                    break;
                case 72: /* Alt + H */
                    lightdm.hibernate();
                    break;
                case 80: /* Alt + P */
                    lightdm.suspend();
                    break;
                case 82: /* Alt + R */
                    lightdm.restart();
                    break;
                case 76: /* Alt + L */
                    cycleUsers();
                    break;
            case 68: /* Alt + D */
                lightdm.shutdown();
                break;
            }
        }
    });

    /* Initiates the username field with the first username of the users' list */
    jQuery("#username").val("noodles"); //lightdm.users[0].name

    updateSessionNameContainer();


    $('#motherOfAllContainers').fadeTo('slow', 0.2, function() {
        $("#inputBoxesContainer").show();
        $("#backgroundVideo").show();
        $("#image").show();

        /* Moves the focus to the password field so in the best case scenario
           all the user has to do is type in the password and press ENTER */
        jQuery("#password").focus();
    }).fadeTo(3500, 1);

});
