# Viera control #

Control your Panasonic Viera TV with simple REST API and mobile optimized UI

### UI : ###

Simple mobile optimized UI

![ui](http://app_screens.matiss.sk/viera.png)

_ _ _ 
### API: ####

All API calls expect `/tv/action` are GET

#### Using: ####

* via cURL - *`curl <url>`*

    example: `curl localhost:3000/tv/home`


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
