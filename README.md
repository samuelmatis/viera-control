# Viera control #
> Control your Panasonic Viera TV with simple REST API and mobile optimized UI

### Start application ###

1. You must have installed node.js on your computer.
2. Install dependencies - `(sudo) npm install`
3. Compile coffescript to javascript - `coffee -cb app/scripts/app.coffee`
4. Start the application - `node server/server.js`
5. Set IP of your television (you can see it in TV settings) - `localhost:3000/tv/setip/<your-ip>`
6. The application is now running on url [localhost:3000](http://localhost:3000)

_ _ _ 
### UI : ###

Simple mobile optimized UI

![ui](http://app_screens.matiss.sk/viera.png)

_ _ _ 
### API: ####

All API calls except `/tv/action` are GET

#### Using: ####

* via cURL - *`curl <url>`*

    example: `curl localhost:3000/tv/volume/mute`


* via web browser - enter url `localhost:3000/<url>`

#### Send codes (from [codes.txt](/codes.txt)) directly to the TV ####

| URL          |METHOD |BODY DATA         |
|--------------|-------|------------------|
| `/tv/action` |POST   |**action** - code |

#### Basic commands: ####

| URL             |                  |
|-----------------|------------------|
| `/tv/power`     | Turn off tv      |
| `/tv/menu`      | Show menu        |
| `/tv/3d`        | Show 3D settings |
| `/tv/ok`        | OK button        |
| `/tv/back`      | Go back          |
| `/tv/option`    | Option button    |
| `/tv/cancel`    | Cancel button    |
| `/tv/apps`      | Show apps        |
| `/tv/home`      | Show homepage    |
| `/tv/guide`     | Show guide       |


#### Input: ####

| URL            |                 |
|----------------|-----------------|
| `/tv/input/tv` | Change TV input |
| `/tv/input/av` | Change AV input |


#### Controls: ####

| URL         |          |
|-------------|----------|
| `/tv/up`    | Go up    |
| `/tv/down`  | Go down  |
| `/tv/left`  | Go left  |
| `/tv/right` | Go right |


#### Volume: ####

| URL                         |            |
|-----------------------------|------------|
| `/tv/volume`                | Get volume |
| `/tv/volume/<volume>`       | Set volume |
| `/tv/volume/plus`           | Volume +1  |
| `/tv/volume/minus`          | Volume -1  |
| `/tv/volume/mute`           | Mute       |


#### Channels: ####

| URL                |              |
|--------------------|--------------|
| `/tv/channel/up`   | Channel up   |
| `/tv/channel/down` | Channel down |


#### Player ####

| URL                |               |
|--------------------|---------------|
| `/tv/player/rew`   | Rewind        |
| `/tv/player/play`  | Play          |
| `/tv/player/ff`    | Fast forward  |
| `/tv/player/prev`  | Skip previous |
| `/tv/player/pause` | Pause         |
| `/tv/player/next`  | Next          |
| `/tv/player/stop`  | Stop          |
| `/tv/player/rec`   | Record        |


#### Numbers ####

| URL             |                    |
|-----------------|--------------------|
| `/tv/vol/<num>` | Number from 1 to 9 |


#### Color buttons ####

| URL          |               |
|--------------|---------------|
| `/tv/red`    | Red button    |
| `/tv/green`  | Green button  |
| `/tv/yellow` | Yellow button |
| `/tv/blue`   | Blue button   |
