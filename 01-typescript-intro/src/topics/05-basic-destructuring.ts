//Desestructuracion de objetos

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const song = 'New Song';

const { song: anotherShong, songDuration: duration, details//: { author }
} = audioPlayer;

const { author } = details;

console.log('Song: ', anotherShong);
console.log('Duration: ', duration);
console.log('Author: ', author);

//Desestructuracion de arreglos

//Forma vieja
/*
const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
const trunks = dbz[3] || 'No hay personaje';
console.error('Personaje 3:', trunks);
*/

const [ , , trunks = 'Not found'] : string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3:', trunks);

export {};