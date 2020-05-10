# LaughingWorld

##### A LightDM Webkit Greeter Theme which the world spins on login screen.

![Screenshot](https://raw.githubusercontent.com/alfanhui/laughingWorld/master/img/screenshot.png)

This greeter theme was built based on the [Antergos Greeter Theme](https://github.com/Antergos/lightdm-webkit-theme-antergos)

## Setup
1. Find a suitable background video, convert it to .webm, and place the video here: `./vid/earth.webm`

## Installation

1. Download the theme
2. Unzip the contents on the folder /usr/share/lightdm-webkit/themes/laughingWorld
3. Edit the file /etc/lightdm/lightdm-webkit-greeter.conf and set the
"webkit-theme" property to "laughingWorld".
4. Make sure the property "greeter-session" in
/etc/lightdm/lightdm.conf is set to "lightdm-webkit-greeter" (or
"lightdm-webkit2-greeter").

And that should be it!

## Keyboard Shortcuts

- Alt + R: Restart
- Alt + D: Shutdown
- Alt + H: Hibernate
- Alt + P: Suspend
- Alt + S or Alt + C: Cycle through the session options
- Tab: Move focus between username and password fields
- Enter: Log In

Thanks to [Youtube video of the world](https://www.youtube.com/watch?v=qzxYumjbOMY). I have edited the video so it spins the right way and slowed it down a bit.
