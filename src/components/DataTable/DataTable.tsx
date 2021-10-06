import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { GetPlaylists } from '../../api';
import { useState, useEffect } from 'react';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'playlistName', headerName: 'Playlist', width: 200 },
    {
        field: 'description',
        headerName: 'Description',
        width: 400,
    },
  ];


export async function createRows(){
    let playlistInfo = await GetPlaylists();

    let rows = []

    for (let i = 0; i < playlistInfo.items.length; i++){
      rows.push({"id": i+1, "playlistName": playlistInfo.items[i].name, "description":playlistInfo.items[i].description})
    }

    console.log(playlistInfo.items[0].name)
    console.log(rows)
    
    return rows
}

export const useGetData = () => {
  const [rows, setData] = useState<any>([]);

  async function handleDataFetch(){
      const result = await createRows()
      setData(result)
  }

  useEffect( () => {
      handleDataFetch();
  }, [])

  return {rows, getData:handleDataFetch}
}





  
export const DataTable = () => {
  let { rows, getData } =useGetData();
  return (
      <div style={{ height: 650, width: '100%' }}>
        <h2>Playlists</h2>
        <DataGrid rows = {rows} columns={columns} pageSize={10} checkboxSelection />
      </div>
    );
}