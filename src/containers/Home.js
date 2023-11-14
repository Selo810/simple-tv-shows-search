import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { useAppContext } from "../lib/contextLib";
import Filter from "../components/Filter";
import TvShowsList from "./lists/ShowsList";

export default function Home() {
    const {
        actions,
    } = useAppContext();

    function renderDashboard() {

        return (
            <div className="home">
                <div>
                    <h1 style={{ marginTop: 10 }}>Search for your favorite TV Shows.</h1>
                </div>

                <Filter
                    onChange={(data) => {
                        actions.onUpdateTvShows(data);
                    }}
                />
                <TvShowsList />
            </div>
        );
    }
    return (
        <React.Fragment>
            
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: 'auto' }} >
                    {renderDashboard()}
                </Box>
            </Container>
        </React.Fragment>
    );
}