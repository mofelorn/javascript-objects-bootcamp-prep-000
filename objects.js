var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = 'songTitle'
}

updatePlaylist(playlist, 'Alison', 'Slowdive')
updatePlaylist(playlist, 'Sometimes', 'My Bloody Valentine')
updatePlaylist(playlist, )

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}

removeFromPlaylist(playlist, artistName)

