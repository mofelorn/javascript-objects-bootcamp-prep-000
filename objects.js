var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = 'songTitle'
}

updatePlaylist(playlist, 'Alison')
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}

removeFromPlaylist(playlist, artistName)

