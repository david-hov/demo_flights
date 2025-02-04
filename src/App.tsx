import {
    Admin,
    Resource,
} from 'react-admin';
import { createTheme } from '@mui/material';
import { QueryClient } from '@tanstack/react-query';

import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import { FlightsList } from './resources/flights/flights';
import { CustomProvider } from './utils/reducerContext';
import './index.scss';

const customDarkBackgroundTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#201f24',
        },
    },
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000,
        },
    },
});

export const App = () => {
    return (
        <CustomProvider>
            {/* @ts-ignore */}
            <Admin queryClient={queryClient} theme={customDarkBackgroundTheme} layout={Layout} dataProvider={dataProvider}>
                <Resource
                    name='flights'
                    list={FlightsList}
                />
            </Admin>
        </CustomProvider>
    )
};
