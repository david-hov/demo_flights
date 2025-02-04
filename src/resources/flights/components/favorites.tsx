import { Card, CardContent, Grid, Typography } from '@mui/material';

import { FavoriteItem } from '../../../types';
import Image from '../../../assets/images.jpeg';

const favoritesList: FavoriteItem[] = [
    {
        title: 'Los Angeles - AMD 320,874',
        date: 'Apr 3 — Apr 9',
        duration: '1 stop 20 hr 40 min',
        imageUrl: Image
    },
    {
        title: 'New York - AMD 150,500',
        date: 'May 1 — May 7',
        duration: '2 stops 15 hr 30 min',
        imageUrl: Image
    },
    {
        title: 'Tokyo - AMD 450,200',
        date: 'June 10 — June 17',
        duration: '1 stop 18 hr 10 min',
        imageUrl: Image
    },
    {
        title: 'London - AMD 310,150',
        date: 'July 15 — July 22',
        duration: 'Non-stop 8 hr 30 min',
        imageUrl: Image
    }
];

export const Favorites = () => {
    return (
        <Grid container spacing={3} className='favorites'>
            {favoritesList.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card>
                        <CardContent>
                            <div className='card-item' style={{ backgroundImage: `url(${item.imageUrl})` }} />
                            <Typography padding='16px 0' variant='h6'>{item.title}</Typography>
                            <Typography color='#9aa0a6'>{item.date}</Typography>
                            <Typography color='#9aa0a6'>{item.duration}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
