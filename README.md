# Viral Destruction
This game is inspired by the classic game Asteroids.

[live link][live]

[live]: http://lilianchen1.github.io/aA_jsGame_Viral_Destruction/index.html


### To Play

Press arrow keys to move "ship" and space bar to fire "bullets."

Key event listeners are implemented with the [keymaster][km] library.
[km]: https://github.com/madrobby/keymaster

### Starting Screen

![alt text][start]
[start]: ./screenshots/starting.png

jQuery is used to listen to click event on the button.


### Game

![alt text][canvas]

[canvas]: ./screenshots/gamescreen.png

Moving objects are:

* white blood cell (ship)
* blue flu viruses (asteroids)
* yellow antibodies (bullets) - see Winning Screen below
* floating red blood cells (for aesthetic purposes)

Panel on the right side keeps tracks of how many white blood cells (ships)
are left (out of 10) and how many virus (asteroids) have been hit by
antibodies (bullets).

### Ending Screen

#### Losing Screen

![alt text][end]

[end]: ./screenshots/overscreen.png

#### Winning Screen

![alt text][win]

[win]: ./screenshots/win.png

Game is over when either all viruses have been destroyed or 10 B cells have collided
with viruses.

jQuery is used to listen to click event on the button. Clicking on the button
will refresh the page and display the Starting Screen
