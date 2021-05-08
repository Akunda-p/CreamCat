import React, { useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

function AppContextProvider({ children }) {
    const [currentRoom, setCurrentRoom] = useState(
        JSON.parse(localStorage.getItem("currentRoom"))
    );

    const [playlist, setPlaylist] = useState([]);
    const [playing, setPlaying] = useState(true);
    const [currentSong, setCurrentSong] = useState();

    const [version, setVersion] = useState(false);
    const [socket, setSocket] = useState();
    const [key, setKey] = useState(0);

    const [userCount, setUserCount] = useState(0);
    const [voteSkip, setVoteSkip] = useState(false);
    const [votingFor, setVotingFor] = useState({});
    const [displayNoCurrentSongAlert, setDisplayNoCurrentSongAlert] = useState(false);

    const [elapsedTime, setElapsedTime] = useState(0);
    const [latency, setLatency] = useState(0);

    async function createRoom(room) {
        const response = await axios.post(
            "http://localhost:3000/api/room/create/",
            room
        );

        console.log(`Creating room...`);
        localStorage.setItem("currentRoom", JSON.stringify(response.data));
        setCurrentRoom(JSON.parse(localStorage.getItem("currentRoom")));
    }

    async function joinRoom(room) {
        const response = await axios.post(
            "http://localhost:3000/api/room/join/",
            room
        );
        console.log(`Joining room...`);
        if (response.data.name) {
            localStorage.setItem("currentRoom", JSON.stringify(response.data));
            setCurrentRoom(JSON.parse(localStorage.getItem("currentRoom")));

            return "forward";
        } else {
            return response.data;
        }
    }

    function resetVoteState(voteType) {
        // voteType: skip, play, pause
        switch (voteType) {
            case "skip":
                setVoteSkip(false);
                break;
            case "play":
                //setVotePlay(false);
                break;
            case "pause":
                //setVotePause(false);
                break;
            default:
                console.log(`Unhandled voteType`);
        }
    }

    function getVoteState(voteType) {
        // voteType: skip, play, pause
        switch (voteType) {
            case "skip":
                return voteSkip;
            case "play":
                //return votePlay;
                break;
            case "pause":
                //return votePause;
                break;
            default:
                console.log(`Unhandled voteType`);
        }
    }

    // The context value that will be supplied to any descendants of this component.
    const context = {
        currentRoom,
        setCurrentRoom,
        playlist,
        setPlaylist,
        playing,
        setPlaying,
        currentSong,
        setCurrentSong,

        version,
        setVersion,
        socket,
        setSocket,
        key,
        setKey,

        userCount,
        setUserCount,
        voteSkip,
        setVoteSkip,
        votingFor,
        setVotingFor,
        displayNoCurrentSongAlert,
        setDisplayNoCurrentSongAlert, 

        elapsedTime,
        setElapsedTime,
        latency,
        setLatency,

        createRoom,
        joinRoom,
        resetVoteState,
        getVoteState,
        
    };

    // Wraps the given child components in a Provider for the above context.
    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
