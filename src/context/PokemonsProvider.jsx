import { useEffect, useState } from 'react';
import axios from 'axios';

import { pokemons } from './pokemons';

import { Alert, Box, CircularProgress, Container } from '@mui/material';

export default function PokemonsProvider({ children }) {
    const [list, setList] = useState('loading');

    useEffect(() => {
        axios('https://pokeapi.co/api/v2/pokemon')
            .then((result) => {
                Promise.all(
                    result.data.results.map(({ url }) =>
                        axios(url).then((result) => result.data)
                    )
                ).then((pokemons) => setTimeout(() => setList(pokemons), 1000));
            })

            .catch((e) => {
                console.log(e);
                setList(null);
            });
    }, []);

    if (list === 'loading')
        return (
            <Box
                sx={{
                    height: '100vh',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CircularProgress />
            </Box>
        );

    return (
        <pokemons.Provider value={list}>
            {pokemons === null && (
                <Container>
                    <Alert severity="error">¡Something was wrong!</Alert>
                </Container>
            )}

            {children}
        </pokemons.Provider>
    );
}
