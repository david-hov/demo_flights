import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/NotificationAdd';
import ChartIcon from '@mui/icons-material/Timeline';

import { useState } from 'react';

export const ToolsList = () => {
    const [currentSection, setCurrentSection] = useState('cheapest')
    return (
        <div>
            <Typography padding='16px 0' variant='h5'>Useful tools to help you find the best deals
            </Typography>
            <Grid container spacing={3} className='tools-section'>
                <Grid item xs={12} sm={4}>
                    <Box display='flex' flexDirection='column' gap={2}>
                        <Box>
                            <Card onClick={() => setCurrentSection('cheapest')} className='tools-item'>
                                <CardContent>
                                    <Box display='flex' gap='12px'>
                                        <CalendarMonthIcon htmlColor='rgb(26, 115, 232)' fontSize='large' />
                                        <Box>
                                            <Typography variant='h6'>Find the cheapest days to fly</Typography>
                                            <Typography color='#e8eaed'>The Date grid and Price graph make it easy to see the best flight deals</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box>
                            <Card onClick={() => setCurrentSection('price')} className='tools-item'>
                                <CardContent>
                                    <Box display='flex' gap='12px'>
                                        <ChartIcon htmlColor='rgb(26, 115, 232)' fontSize='large' />
                                        <Box>
                                            <Typography variant='h6'>See the whole picture with price insights</Typography>
                                            <Typography color='#e8eaed'>Price history and trend data show you when to book to get the best price on your flight</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box>
                            <Card onClick={() => setCurrentSection('track')} className='tools-item'>
                                <CardContent>
                                    <Box display='flex' gap='12px'>
                                        <NotificationsIcon htmlColor='rgb(26, 115, 232)' fontSize='large' />
                                        <Box>
                                            <Typography variant='h6'>Track prices for a trip</Typography>
                                            <Typography color='#e8eaed'>Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box display={currentSection === 'cheapest' ? 'block' : 'none'}>
                        <Card className='content-item'>
                            <CardContent>
                                <Typography marginBottom='15px' variant='h5'>Insightful tools help you choose your trip dates</Typography>
                                <Typography marginBottom='24px'>If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your destination – and back again for round trips.</Typography>
                                <img src='https://www.gstatic.com/flights/app/lp/dates_benefits_dark.svg' height='300px' width='460px' />
                            </CardContent>
                        </Card>
                    </Box>
                    <Box display={currentSection === 'price' ? 'block' : 'none'}>
                        <Card className='content-item'>
                            <CardContent>
                                <Typography marginBottom='15px' variant='h5'>Get smart insights about flight prices</Typography>
                                <Typography marginBottom='24px'>Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.</Typography>
                                <img src='https://www.gstatic.com/flights/app/lp/price_insights_benefits_dark.svg' height='300px' width='460px' />
                            </CardContent>
                        </Card>
                    </Box>
                    <Box display={currentSection === 'track' ? 'block' : 'none'}>
                        <Card className='content-item'>
                            <CardContent>
                                <Typography marginBottom='15px' variant='h5'>Monitor flight prices and make sure you never miss a price change</Typography>
                                <Typography marginBottom='24px'>Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.</Typography>
                                <img src='https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_light.svg' height='300px' width='460px' />
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
};
