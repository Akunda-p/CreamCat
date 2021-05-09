import React, { useState, useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { FaPlay, FaPause, FaStepForward } from "react-icons/fa";
import { AppContext } from "../../AppContextProvider";
import styles from "./SongControls.module.css";
export default function SongControls() {
    const {
        currentRoom,
        playing,
        socket,
        voteSkip,
        setVoteSkip,
        setDisplayNoCurrentSongAlert,
        currentSong
    } = useContext(AppContext);

    const [playButtonText, setPlayButtonText] = useState(<FaPause />);

    function handleVoteSkip() {
        if (currentSong) {
            console.log(`handleVoteSkip voteSkip = ${voteSkip}`);
            const vote = !voteSkip;
            console.log(`voteSkip set to ${vote}`);
            setVoteSkip((v) => !v);
            const payload = {
                roomID: currentRoom._id,
                password: currentRoom.password,
                voteType: "skip",
                vote: vote,
                song: currentSong,
            };
            socket.emit("Vote", payload);
        } else {
            setDisplayNoCurrentSongAlert(true);
            setTimeout(() => setDisplayNoCurrentSongAlert(false), 2000);
        }
    }

    useEffect(() => {
        if (playing) {
            setPlayButtonText(<FaPause />);
        } else {
            setPlayButtonText(<FaPlay />);
        }
    }, [playing]);

    return (
        <>
            <Container className={styles.songControls}>
                <Button variant="outline-light" size="lg" className={styles.playBtn} disabled data-testid='play'>
                    {playButtonText}
                </Button>{" "}
                <Button variant="dark" size="lg" className={styles.voteSkip} onClick={handleVoteSkip} active data-testid='skip'>
                    <FaStepForward />
                </Button>
            </Container>
        </>
    );
}
