# CreamCat

SOFTENG750 project team CreamCat

Required technology stack installation:

-VSCode
-NodeJS
-ReactJS
-ExpressJS
-MongoDB

Deployment from command line:

1. Open cmd
2. cd to the project directory
3. Open the project in VSCode with the command "code ."

   Frontend deployment

   1. Open a new terminal window
   2. type "cd frontend"
   3. Run npm install in the terminal (type: "npm install")
   4. Run "npm start" or click on the start - frontend under NPM SCRIPTS, frontend\package.json

   Backend deployment

   5. Open a new terminal window
   6. type "cd backend"
   7. Run npm install in the terminal
   8. Run npm start or click on the start - backend under NPM SCRIPTS, backend\package.json

(NOTE: if the NPM SRIPTS don't show in the bottom lefthand corner, click package.json once)
(NOTE: if running in development mode, run nodemon - backend instead)

NOTES:
Youtube search requires a key to search which is limited to 100 searches a day. The current key is located in the youtubeSearch.js and if more searches are required, a google dvelop account should be made.

FEATURES:
- Ability to create and join rooms for listening
- Private rooms with the application of a password
- Persist rooms for an hour if inactive
- Songs and rooms deleted when inactive for storage
- Users can join rooms and syncs the player
- Player syncs dynamically to where the song is at 
- Volume changed locally
- Vote skip song
- Add song through search bar
- Song info shown on bottom left
- Dynamic duration bar
- Ability to rejoin room through the navigation bar
- Ease of use
   - Join room by clicking the room name
   - Leave room button next to the room name
   - Copies room ID upon clicking the room ID
   - Hover tooltips for copying room ID and vote skip
   - Confirmation message for when a song is added
   - Vote message popup which dynamically shows how many votes
   - Duration bar and duration times displayed
   - Change volume dynamically per client (defaults at 30% for softer listeners)
   - Current song playing is highlighted
   - Messages displayed when queue empty

TESTING:

WARNINGS:
Known errors: 

Project Overview:
CreamCat focuses on the ability to provide a collaborative music sharing experience which emulates a small listening group for study groups, hangouts or parties. Allowing users to listen synchronously across devices and locations. Users can decide to create a room or join a pre-existing room. For creating a room, users can specify the name of the room, optional description and optional password for private rooms. Once inside the room users can then share the Room ID to other users who they wish to join their room. Once the other users have the room ID copied, they can then access the join room page and enter in the room ID and password if required. Once inside they will automatically sync up with the current room, synching all data such as current queue, current playing song and current duration of the song. Once inside, users can search songs in the search bar and add songs to the queue. Songs can also be skipped if users desire through a vote functionality where all users vote whether or not they would like the song to be skipped or not. Users can then also leave the room manually through the leave room functionality or close the browser. Rooms will automatically close after an hour of inactivity and all users will be redirected to the room page.
