import { useListContext, SimpleForm, DateInput, SelectInput, required, ReferenceInput, AutocompleteInput, SaveButton } from 'react-admin';
import { Box, Toolbar, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';

import BackImage from '../../../assets/flights_nc_dark.png';
import { Choice, CustomReferenceInputProps, FilterFormValues } from '../../../types';

const PostSaveButton = () => {
    return (
        <Toolbar>
            <SaveButton icon={<SearchIcon />} alwaysEnable className='search-button' type='submit' label='Explore' />
        </Toolbar>
    );
};

const adultsChoices: Choice[] = [
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' },
    { id: '4', name: '4' },
    { id: '5', name: '5' },
];

const cabinClassChoices: Choice[] = [
    { id: 'economy', name: 'Economy' },
    { id: 'business', name: 'Business' },
];

const CustomReferenceInput = ({ source }: CustomReferenceInputProps) => {
    const { setValue } = useFormContext();

    const handleChange = (_: any, selectedChoice: any) => {
        if (selectedChoice) {
            setValue(source === 'originEntityId' ? 'originSkyId' : 'destinationSkyId', selectedChoice.skyId)
        }
    };

    const optionRenderer = (choice: any) => `${choice.presentation.title} - ${choice.skyId}`;

    return (
        <ReferenceInput source={source} reference='airports'>
            <AutocompleteInput
                validate={required()}
                label={source === 'originEntityId' ? 'Where from?' : 'Where to?'}
                fullWidth
                optionText={optionRenderer}
                optionValue='entityId'
                onChange={handleChange}
            />
        </ReferenceInput>
    );
};

export const TopToolbar = () => {
    return (
        <div style={{ backgroundImage: `url(${BackImage})`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '100%', height: '300px' }}>
            <Typography variant='h2' fontWeight='400'>Flights</Typography>
        </div>
    );
};

export const Filterbar = () => {
    const { setFilters } = useListContext();

    const handleSubmit = (e: FilterFormValues) => {
        setFilters(e);
    };

    return (
        <SimpleForm onSubmit={(e: any) => handleSubmit(e)} toolbar={<PostSaveButton />}>
            <Box display='flex'
                width='100%'
                flexDirection='row'
                gap={2}>
                <SelectInput
                    validate={required()}
                    className='option-box'
                    source='cabinClass'
                    choices={cabinClassChoices}
                    defaultValue='economy'
                    label={false}
                    variant='filled'
                />
                <SelectInput
                    validate={required()}
                    className='option-box'
                    source='adults'
                    choices={adultsChoices}
                    defaultValue='1'
                    label={false}
                    variant='filled'
                />
            </Box>
            <Box width='100%' display='flex' gap='10px'>
                <Box display='flex'
                    width='100%'
                    flexDirection='row'
                    gap={2}>
                    <CustomReferenceInput source='originEntityId' />
                    <CustomReferenceInput source='destinationEntityId' />
                </Box>
                <Box display='flex'
                    width='100%'
                    flexDirection='row'
                    gap={2}>
                    <DateInput
                        validate={required()}
                        fullWidth
                        source='date'
                        label='Date'
                        placeholder='Date'
                        variant='outlined'
                    />
                </Box>
            </Box>
        </SimpleForm>
    );
};
