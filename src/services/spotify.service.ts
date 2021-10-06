const CLIENT_ID = 'ac59367a537f4b5390274fa35a5280eb';
const SPOTIFY_AUTHORIZE_ENDPOINT = 'http://accounts.spotify.com/authorize'
const REDIRECT_URI_AFTER_LOGIN = "http://localhost:3000/"
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-modify-private", "playlist-read-private", "playlist-modify-public", "playlist-read-collaborative"]
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);


function authenticate() {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
}

export const SpotifyService = {
    authenticate: authenticate
}
