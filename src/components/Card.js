import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ data }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.show.image && data.show.image.medium != undefined ? data.show.image.medium : ''}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.show.name || ''}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        Network: {data.show.network != null && data.show.network.name ? data.show.network.name : ' NA'}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Average Rating: {data.show.rating != null && data.show.rating.average ? data.show.rating.average : ' NA'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={data.show.url || ''} target='new'>
                    <Button size="small" color="primary" >
                        More Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
