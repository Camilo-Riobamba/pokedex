import { useParams } from 'react-router-dom';
import usePokemons from '../context/pokemons';

import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Typography
} from '@mui/material';

import title from '../assets/title.png';

export default function PokemonCard() {
    const { id } = useParams();

    const pokemon = usePokemons().find(
        (pokemon) => pokemon.id === parseInt(id)
    );

    if (!pokemon) return 'The Pokemon does not exist';

    return (
        <Box sx={{ p: 2 }}>
            <Box>
                <img
                    src={title}
                    alt="title"
                    style={{ maxWidth: '300px', width: '100%' }}
                />
            </Box>

            <Container sx={{ mt: 2, maxWidth: '800px' }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: 2,

                        display: 'flex',
                        justifyContent: 'center',

                        backgroundColor: 'secondary.main',
                        border: '5px solid #fff'
                    }}
                >
                    <img src={pokemon.sprites.front_default} alt="title" />
                </Paper>
                <Box
                    sx={{
                        mt: 2
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: 'center' }}
                    >
                        <strong>#{pokemon.id}</strong>
                    </Typography>
                    <Divider sx={{ mt: 1 }}>
                        <Typography variant="h2">{pokemon.name}</Typography>
                    </Divider>
                    <Box
                        sx={{
                            mt: 1,

                            display: 'flex',
                            justifyContent: 'center',
                            gap: 5,
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="body1">
                            <strong>Weight</strong> <br />
                            {pokemon.weight}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Height</strong> <br />
                            {pokemon.height}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body1" sx={{ my: 2 }}>
                    <strong>Type: </strong>
                    {pokemon.types.map(({ type }) => type.name).join(' / ')}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            HP
                        </Typography>
                        <Typography variant="body1">
                            {
                                pokemon.stats.find(
                                    ({ stat }) => stat.name === 'hp'
                                ).base_stat
                            }
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            Attack
                        </Typography>
                        <Typography variant="body1">
                            {
                                pokemon.stats.find(
                                    ({ stat }) => stat.name === 'attack'
                                ).base_stat
                            }
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            Defense
                        </Typography>
                        <Typography variant="body1">
                            {
                                pokemon.stats.find(
                                    ({ stat }) => stat.name === 'defense'
                                ).base_stat
                            }
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            Speed
                        </Typography>
                        <Typography variant="body1">
                            {
                                pokemon.stats.find(
                                    ({ stat }) => stat.name === 'speed'
                                ).base_stat
                            }
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
