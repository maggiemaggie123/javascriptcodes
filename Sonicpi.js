let mySong = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 }
];
let counter=0;
let songTime=0;
while(counter <mySong.length){
  if(my_song[counter].starts_at==0){
    console.log('Play ' + mySong[counter].note)
  }
}
play_piano(my_song);

Outputs:
//Play A

Play B;
Wait 1.5 Seconds;
Play C;
Wait 1.5 Seconds;
Release A;
Release B;
Release C;

