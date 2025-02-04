import { useListContext, Loading, List } from 'react-admin';
import { Box, Typography } from '@mui/material';

import { TopToolbar, Filterbar } from './components/toolbar';
import { ToolsList } from './tools';
import { SampleMap } from '../../utils/sampleMap';
import { Favorites } from './components/favorites';
import { Questions } from './components/questions';
import { Popular } from './components/popular';
import { useEffect } from 'react';

const ResultDataList = () => {
    const { data, isLoading, isFetching } = useListContext();
    const result = data && data[0] && data[0].filterStats.airports.length !== 0 ? data[0].filterStats.airports : null;
    const duration = data && data[0] ? data[0].filterStats.duration : null;
    const filterStats = data && data[0] ? data[0].filterStats : null;

    if (isLoading || isFetching) {
        return <Box marginTop='40px'>
            <Loading />
        </Box>
    }

    return (
        <Box marginTop='40px'>
            {result && duration ?
                <>
                    {result.map((el: any, index: number) => {
                        return (
                            <Typography key={index} variant='h5'>{el.city}</Typography>
                        )
                    })}
                    <p>{JSON.stringify(filterStats)}</p>
                </>
                : <Typography variant='h5'>Data Not Found</Typography>}
        </Box>
    )
}

export const FlightsList = () => {
    useEffect(() => {
        localStorage.removeItem('RaStore.flights.listParams')
        return () => {
            localStorage.removeItem('RaStore.flights.listParams')
        }
    }, [])
    return (
        <List disableSyncWithLocation empty={false} pagination={false} exporter={false} actions={false}>
            <TopToolbar />
            <Filterbar />
            <ResultDataList />
            <SampleMap />
            <Favorites />
            <ToolsList />
            <Popular />
            <Questions />
        </List>
    )
};
