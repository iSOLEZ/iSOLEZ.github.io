function Song(title, artist) {
  this.title = title;
  this.artist = artist;
}

Song.prototype.play = function () {
  console.log("Playing: " + this.title + " by " + this.artist);
};

let song1 = new Song("Limbo", "Keshi");
let  song2 = new Song("Talk", "Keshi");
song1.play();
song2.play();
