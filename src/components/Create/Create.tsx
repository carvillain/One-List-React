import React, { useState } from "react";
import {
    searchGenre, searchTrack, searchAlbum, getGenres, recommendations, user, createPlaylist,
    GetPlaylists, addToPlaylist, getAlbumTracks
} from "../../api";
import { Header } from "..";
import { SongTable } from "..";


export class Create extends React.Component<{}, {recommendedTracks: any[]}> {
    constructor(props: any) {
        super(props);
        this.state = {recommendedTracks: []};
      }

    public searchInput = '';
    public genreInput = '';
    public selectCriteria = '';

    genreChange = (event: any) => {
        this.genreInput = event.target.value;
    }

    searchChange = (event: any) => {
        this.searchInput = event.target.value;
    }

    criteriaChange = (event: any) => {
        this.selectCriteria = event.target.value;
    }

    public playlistId = ''
    createPlaylistHandler = async () => {
        this.playlistId = await createPlaylist();
    }

    public trackId: string = '';
    searchTrackHandler = async () => {
        this.trackId = await searchTrack(this.searchInput);
    }

    searchAlbumHandler = async () => {
        let albumId = await searchAlbum(this.searchInput);

        this.trackId = await getAlbumTracks(albumId)


    }

    searchGenreHandler = async () => {
        this.trackId = await searchGenre(this.searchInput);

    }

    getRecommendations = async () => {

        let recommendedTracks = await recommendations(this.trackId);

        this.setState({recommendedTracks: recommendedTracks});

        let recommendedTrackIds = this.state.recommendedTracks.map((track) => track.uri)

        addToPlaylist(this.playlistId, recommendedTrackIds);
        
    }

    render() {
        return (
            <div>
                <div><Header></Header></div>
                <div id="create_playlist">
                    <div id="create_title">Create and Save Custom Playlists to Spotify</div>
                    <select onClick={this.criteriaChange} id="myList">
                        <option> ---Choose Creation Critera--- </option>
                        <option>Song</option>
                        <option>Album</option>
                        <option>Genre</option>
                    </select>
                    <div>
                        <input onChange={this.searchChange} type="text" />
                    </div>
                    <div>
                        <button onClick={this.searchTrackHandler}>searchTrack</button>
                        <button onClick={this.searchAlbumHandler}>searchAlbum</button>
                        <button onClick={this.searchGenreHandler}>searchGenre</button>
                        <button onClick={this.createPlaylistHandler}>createPlaylist</button>
                        <button onClick={this.getRecommendations}>getRecommendations</button>
                    </div>
                    <div>
                        <SongTable songs={this.state.recommendedTracks}></ SongTable>
                    </div>
                </div>
            </div>
        )
    }
}