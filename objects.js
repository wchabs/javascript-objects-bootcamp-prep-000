var playlist = {JohnLegend: "Heart breaker"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFronPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}
