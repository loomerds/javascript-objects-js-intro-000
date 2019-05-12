var playlist = {Slowdive: "My Bloody Valentine"};

function updatePlaylist(list, artist, song) {
  Object.assign({}, list, {[artist]: song});
}
