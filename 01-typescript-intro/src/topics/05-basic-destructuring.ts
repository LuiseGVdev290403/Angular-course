

interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { song, songDuration:duration } = audioPlayer;

const { author:author } = audioPlayer.details;
console.log('Song: ' + song);
console.log('Duration : ' + duration);
console.log('Author is: ' + author)

export{};