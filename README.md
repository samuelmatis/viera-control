# Viera control #
> Control your Panasonic Viera TV with simple REST API and mobile optimized UI

### [Newer faster and lighter version - Viera Control v2](https://github.com/samuelmatis/viera-control-v2) ###

### Start application ###

1. You must have installed node.js on your computer.
2. Install dependencies - `(sudo) npm install`
3. Start the application - `node server/server.js`
4. The application is now running on url [localhost:3000](http://localhost:3000)

_ _ _ 
### UI : ###

Simple mobile optimized UI

![ui](http://app_screens.matiss.sk/viera.png)

_ _ _ 
### API: ####

All API calls except `/tv/<ip_address>/action` are GET

#### Using: ####

* via cURL - *`curl <url>`*

    example: `curl localhost:3000/tv/<ip_address>/volume/mute`


* via web browser - enter url `localhost:3000/<url>`

#### Send codes (from [codes.txt](/codes.txt)) directly to the TV ####

| URL          |METHOD |BODY DATA         |
|--------------|-------|------------------|
| `/tv/<ip_address>/action` |POST   |**action** - code |

#### Basic commands: ####

| URL             |                  |
|-----------------|------------------|
| `/tv/<ip_address>/power`     | Turn off tv      |
| `/tv/<ip_address>/menu`      | Show menu        |
| `/tv/<ip_address>/3d`        | Show 3D settings |
| `/tv/<ip_address>/ok`        | OK button        |
| `/tv/<ip_address>/back`      | Go back          |
| `/tv/<ip_address>/option`    | Option button    |
| `/tv/<ip_address>/cancel`    | Cancel button    |
| `/tv/<ip_address>/apps`      | Show apps        |
| `/tv/<ip_address>/home`      | Show homepage    |
| `/tv/<ip_address>/guide`     | Show guide       |


#### Input: ####

| URL            |                 |
|----------------|-----------------|
| `/tv/<ip_address>/input/tv` | Change TV input |
| `/tv/<ip_address>/input/av` | Change AV input |


#### Controls: ####

| URL         |          |
|-------------|----------|
| `/tv/<ip_address>/up`    | Go up    |
| `/tv/<ip_address>/down`  | Go down  |
| `/tv/<ip_address>/left`  | Go left  |
| `/tv/<ip_address>/right` | Go right |


#### Volume: ####

| URL                         |            |
|-----------------------------|------------|
| `/tv/<ip_address>/volume`                | Get volume |
| `/tv/<ip_address>/volume/<volume>`       | Set volume |
| `/tv/<ip_address>/volume/plus`           | Volume +1  |
| `/tv/<ip_address>/volume/minus`          | Volume -1  |
| `/tv/<ip_address>/volume/mute`           | Mute       |


#### Channels: ####

| URL                |              |
|--------------------|--------------|
| `/tv/<ip_address>/channel/up`   | Channel up   |
| `/tv/<ip_address>/channel/down` | Channel down |


#### Player ####

| URL                |               |
|--------------------|---------------|
| `/tv/<ip_address>/player/rew`   | Rewind        |
| `/tv/<ip_address>/player/play`  | Play          |
| `/tv/<ip_address>/player/ff`    | Fast forward  |
| `/tv/<ip_address>/player/prev`  | Skip previous |
| `/tv/<ip_address>/player/pause` | Pause         |
| `/tv/<ip_address>/player/next`  | Next          |
| `/tv/<ip_address>/player/stop`  | Stop          |
| `/tv/<ip_address>/player/rec`   | Record        |


#### Numbers ####

| URL             |                    |
|-----------------|--------------------|
| `/tv/<ip_address>/vol/<num>` | Number from 1 to 9 |


#### Color buttons ####

| URL          |               |
|--------------|---------------|
| `/tv/<ip_address>/red`    | Red button    |
| `/tv/<ip_address>/green`  | Green button  |
| `/tv/<ip_address>/yellow` | Yellow button |
| `/tv/<ip_address>/blue`   | Blue button   |
