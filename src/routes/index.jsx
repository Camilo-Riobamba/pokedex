import useSession from '../context/Session';

import {
    NavLink,
    Navigate,
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';

import Home from '../components/Home';
import Pokedex from '../components/Pokedex';
import PokemonCard from '../components/PokemonCard';

export default function Routes() {
    const [user] = useSession();

    const router = createBrowserRouter([
        {
            path: '/',
            element: !user ? <Home /> : <Navigate to="/pokedex" />
        },

        {
            path: '/pokedex',
            element: user ? <Pokedex /> : <Navigate to="/unauthorized" />
        },

        {
            path: '/pokemon/:id',
            element: user ? <PokemonCard /> : <Navigate to="/unauthorized" />
        },

        {
            path: '/unauthorized',
            element: (
                <Box
                    sx={{
                        minHeight: '100vh',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            p: 3,

                            color: 'white',
                            backgroundColor: 'primary.main'
                        }}
                    >
                        <Typography>
                            You must log in to access.{' '}
                            <NavLink to="/" style={{ color: '#fff' }}>
                                Click here to log in
                            </NavLink>
                        </Typography>
                    </Paper>
                </Box>
            )
        }
    ]);

    return <RouterProvider router={router} />;
}
