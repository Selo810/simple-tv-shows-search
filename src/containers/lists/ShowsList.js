import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useAppContext } from "../../lib/contextLib";
import Card from "../../components/Card";

export default function ResponsiveGrid() {
    const [dataList, setDataList] = React.useState([]);
    const {
        actions,
        tvShows
    } = useAppContext();


    React.useEffect(() => {
        async function updateList() {
            setDataList(tvShows);
        }
        updateList();
    }, [tvShows]);


    return (
        <Box sx={{ flexGrow: 1, marginTop: 3, marginLeft: 6, marginBottom: 6 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {dataList.map((show, index) => (
                    <Grid item xs={2} sm={6} md={6} key={index} >
                        <Card data={show}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
