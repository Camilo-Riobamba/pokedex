import useSession from '../context/Session';

import { Box, Typography } from '@mui/material';

import title from '../assets/title.png';
import Form from '../utils/Form';
import Input from '../utils/Form/Input';

export default function Home() {
    const [user, setUser] = useSession();

    return (
        <Box
            sx={{
                p: 2,
                minHeight: '100vh',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img
                src={title}
                alt="title"
                style={{ maxWidth: '300px', width: '100%' }}
            />

            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">¡Hello trainer!</Typography>
                <Typography variant="subtitle1">
                    To get started, write your name.
                </Typography>

                <Form
                    action={async ({ name }) => setUser(name)}
                    sx={{ mt: 2, minWidth: { md: '400px' } }}
                >
                    {() => <Input name="name" label="Name" />}
                </Form>
            </Box>
        </Box>
    );
}
