import React, { useState, useContext, useEffect } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { FaStepBackward, FaPlay, FaPause, FaStepForward } from "react-icons/fa";
import { AppContext } from "../../AppContextProvider";
import styles from "./SongControls.module.css";
export default function SongControls() {
    // need context
    const { playing, setPlaying, currentSong } = useContext(AppContext);
    const [playButtonText, setPlayButtonText] = useState(<FaPause />);

    const nextSong = () => { };

    const prevSong = () => { };

    function handlePlayPause() {
        setPlaying(!playing);
    }


    useEffect(() => {
        if (playing && currentSong) {
            setPlayButtonText(<FaPause />);
        }
        else {
            setPlayButtonText(<FaPlay />);
        }
    }, [playing]);

    return (
        <>

            <Container className={styles.songControls}>
                <Button className={styles.prevSong} onClick={prevSong}>
                    <FaStepBackward />
                </Button>{' '}
                <Button
                    className={styles.playBtn}
                    onClick={handlePlayPause}
                >
                    {playButtonText}
                </Button>{' '}
                <Button className={styles.nextSong} onClick={nextSong}>
                    <FaStepForward />
                </Button>
            </Container>
        </>
    );
}
