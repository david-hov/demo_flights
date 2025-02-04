import { Box, Typography } from '@mui/material';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl = import.meta.env.VITE_MAP_JSON;

export const SampleMap = () => {
    return (
        <Box marginTop='35px'>
            <Typography variant='h5'>Find cheap flights from Yerevan to anywhere
            </Typography>
            <ComposableMap
                projection='geoAzimuthalEqualArea'
                projectionConfig={{
                    rotate: [-10.0, -52.0, 0],
                    center: [-5, -3],
                    scale: 1100
                }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: { fill: '#D6D6DA', stroke: '#000', strokeWidth: 0.5 },
                                    hover: { fill: '#F53', stroke: '#000', strokeWidth: 1 },
                                    pressed: { fill: '#E42', stroke: '#000', strokeWidth: 1.5 },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </Box>
    )
};
