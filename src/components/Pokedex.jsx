import useSession from '../context/Session';
import usePokemons from '../context/pokemons';

import { Alert, Box, Container, Grid, Typography } from '@mui/material';
import Pokemon from './Pokemon';

import title from '../assets/title.png';
import { useState } from 'react';
import Form from '../utils/Form';
import Input from '../utils/Form/Input';

export default function Pokedex() {
    const [user] = useSession();

    const list = usePokemons();
    const [pokemons, setPokemons] = useState(list);

    return (
        <Container sx={{ p: 2 }}>
            <Box>
                <img
                    src={title}
                    alt="title"
                    style={{ maxWidth: '300px', width: '100%' }}
                />

                <Typography variant="body1">
                    Welcome {user}, here you can find your favorite pokemon.
                </Typography>
            </Box>

            <Form
                action={async ({ search }) =>
                    setPokemons(
                        list.filter(({ name }) => {
                            console.log(name, ' ', search);

                            return name.indexOf(search) !== -1;
                        })
                    )
                }
                sx={{ mt: 6 }}
            >
                {() => (
                    <Box>
                        <Grid container sx={{ mb: 2 }}>
                            <Grid item xs={12} md={7}>
                                <Input name="search" label="Search by name" />
                            </Grid>
                        </Grid>

                        {!pokemons && (
                            <Alert severity="warning">
                                Does not exist any Pokemon in the list that
                                match the specified search
                            </Alert>
                        )}

                        {pokemons && (
                            <Grid container spacing={2}>
                                {pokemons.map((data, index) => (
                                    <Pokemon key={index} {...data} />
                                ))}
                            </Grid>
                        )}
                    </Box>
                )}
            </Form>
        </Container>
    );
}
