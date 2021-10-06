import React from 'react';

export const SongTable = (props: any) =>{


    return (
        props.songs.map(
            (song:any) => <div>{song.name}</div>
        )
        
    )
}