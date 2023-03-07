import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, Grid } from '@mui/material';
import './MainScreen.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2C1E55' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center'}}>
            GAME CENTER
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Card sx={{ maxWidth: 345, margin: 10 }}>
        <CardActionArea>
          <CardContent>
              <h1>Snake Game</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/snakemain" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
        <CardActionArea>
          <CardContent>
              <h1>Tenzi Game</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/tenzimain" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>
      </Grid>
    </Box>
  );
}
