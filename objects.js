var playlist = {Campbell: "In Your Eyes"};

function updatePlaylist(list, artist, song) {
  Object.assign({}, list, {[artist]: song});
}
