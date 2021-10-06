import React, { useState, useEffect } from "react";


//Spotify Client Credentials


var current_token = localStorage.getItem('spotifyToken');

let headers = new Headers([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json'],
    ['Authorization', `Bearer ${current_token}`]
]);

let query = ''



export async function searchAlbum(query: any): Promise<string> {
    let request = new Request(`https://api.spotify.com/v1/search?q=${query}&type=album`, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);
    let response = await result.json();

    return response.albums.items[0].id;
}

export async function getAlbumTracks(albumId: string): Promise<string> {
    let request = new Request(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);
    let response = await result.json();

    return response.items[0].id;
}

export async function searchGenre(query: any): Promise<any> {
    let request = new Request(`https://api.spotify.com/v1/recommendations?market=US&seed_genres=${query}`, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);
    let response = await result.json();

    return response.tracks[0].id;
}

export async function searchTrack(query: any): Promise<string> {
    let request = new Request(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);
    let response = await result.json();

    return response.tracks.items[0].id;
}

export async function getGenres(): Promise<string[]> {

    let request = new Request(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);
    let response = await result.json();
    return response;
}


const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

export async function GetPlaylists() {

    let request = new Request(PLAYLISTS_ENDPOINT, {
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request);
    let response = await result.json();

    // console.log(response)
    // console.log(response.items[0].name)

    return response

}


export async function recommendations(search_info: any): Promise<any[]> {

    let request = new Request(`https://api.spotify.com/v1/recommendations?market=US&seed_tracks=${search_info}`, {
        method: 'GET',
        headers: headers,
    })

    let result = await fetch(request);
    let response = await result.json();

    return response.tracks;
}

export async function user(): Promise<string> {

    let request = new Request(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: headers,
    })

    let result = await fetch(request);
    let response = await result.json();
    console.log(response.id)
    return response.id;
}

export async function createPlaylist(): Promise<string> {

    let user_id = await user();
    let jsonData = {
        "name": "test",
        "public": true
    };

    let request = new Request(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ name: "name" })
    })

    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    return response.id;
}

export async function addToPlaylist( id: any, stuff: string[]) {

    let request = new Request(`https://api.spotify.com/v1/playlists/${id}/tracks?uris=${stuff}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ name: "name" })
    })
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)

}
