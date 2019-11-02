var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = 'songTitle'
}

updatePlaylist(playlist, 'Alison', 'Slowdive')
updatePlaylist(playlist, 'Sometimes', 'My Bloody Valentine')
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}

removeFromPlaylist(playlist, artistName)

