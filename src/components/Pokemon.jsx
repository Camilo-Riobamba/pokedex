import { Divider, Grid, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Pokemon({ id, name, sprites, stats, types }) {
    return (
        <Grid item xs={12} md={4} lg={3}>
            <Paper elevation={8} sx={{ p: 2 }}>
                <Paper component={NavLink} to={`/pokemon/${id}`}>
                    <img src={sprites.front_default} alt={name} width="100%" />
                </Paper>

                <Typography variant="subtitle1">
                    <strong>{name}</strong>
                </Typography>
                <Typography variant="body1">
                    {types.map(({ type }) => type.name).join(' / ')}
                </Typography>
                <Divider sx={{ mt: 1, mb: 2 }} />

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            HP
                        </Typography>
                        <Typography variant="body1">
                            {
                                stats.find(({ stat }) => stat.name === 'hp')
                                    .base_stat
                            }
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            Attack
                        </Typography>
                        <Typography variant="body1">
                            {
                                stats.find(({ stat }) => stat.name === 'attack')
                                    .base_stat
                            }
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="body1" color="GrayText">
                            Defense
                        </Typography>
                        <Typography variant="body1">
                            {
                                stats.find(
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
                                stats.find(({ stat }) => stat.name === 'speed')
                                    .base_stat
                            }
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
