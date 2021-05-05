import { Song } from "./songs-schema";



export async function addSong(song) {
    const dbSong = new Song(song);
    await dbSong.save();
    return dbSong;
}

export async function retrieveAllSongs(roomID) {
    return await Song.find({ roomID: `${roomID}`});
}

export async function retrieveSong(songid) {
    return await Song.findById(songid);
}

export async function updateSong(song) {
    const dbSong = await Song.findById(song._id);
    if(dbSong) {
        if(song.roomID){
            dbSong.roomID = song.roomID;
        }
        if(song.title){
            dbSong.title = song.title;
        }
        if(song.content){
            dbSong.content = song.content;
        }
        
        dbSong.image = song.image;
        dbSong.description = song.description;
        dbSong.publishTime = song.publishTime;
        dbSong.channelTitle = song.channelTitle;
        dbSong.source = song.source;

        await dbSong.save();
        return true;
    }
    return false;
}

export async function deleteSong(songid) {
    await Song.deleteOne({_id:songid});
}