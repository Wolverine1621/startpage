var username = getCookie("username")
var apiKey = getCookie("apiKey")

console.log("username: " + username)

var apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + username + '&api_key=' + apiKey + '&format=json&limit=1'

$.getJSON(apiUrl, function(data) {
    var musicString = data.recenttracks.track[0].artist['#text'] + " - " + data.recenttracks.track[0].name
    document.getElementById('lastfm').innerHTML = musicString
    document.getElementById('albumArt').src = data.recenttracks.track[0].image[3]['#text']
});