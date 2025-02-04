import { Box, Typography } from '@mui/material';

import { PopularDestination } from '../../../types';
import Image from '../../../assets/images.jpeg';

const popularDestinations: PopularDestination[] = [
    {
        name: 'Paris',
        imageUrl: Image
    },
    {
        name: 'London',
        imageUrl: Image
    },
    {
        name: 'New York',
        imageUrl: Image
    },
    {
        name: 'Tokyo',
        imageUrl: Image
    },
    {
        name: 'Rome',
        imageUrl: Image
    },
    {
        name: 'Berlin',
        imageUrl: Image
    }
];

export const Popular = () => {
    return (
        <Box paddingBottom='25px'>
            <Typography padding='16px 0' variant='h5'>
                Popular destinations from Yerevan
            </Typography>
            <Box flexDirection='row' display='flex' gap='15px'>
                {popularDestinations.map((destination, index) => (
                    <div className='popular-item' key={index}>
                        <div style={{ background: `url(${destination.imageUrl})` }} />
                        <p>{destination.name}</p>
                    </div>
                ))}
            </Box>
        </Box>
    );
};
