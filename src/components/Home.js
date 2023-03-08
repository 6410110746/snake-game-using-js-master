import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './MainScreen.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2C1E55' }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 600, textAlign: 'center'}}>
            GAME CENTER
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={4}>
        <Card sx={{ maxWidth: 345, margin: 10 }}>
        <CardMedia
        sx={{ height: 140 }}
        image=
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5CK3joGsx_c_QBzTaCBkT7qym2vOgv6ZDA&usqp=CAU"
      />
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
      <CardMedia
        sx={{ height: 140 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/335135457_662918648970944_2878559402937653094_n.png?stp=dst-png_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tRN4EC9_IEMAX9pCeR0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdThLhhKVYvn19ezdA4zo5ZV2PeRKYba1n-jZW1V2er7KA&oe=643035C9"
      />
        <CardActionArea>
          <CardContent>
              <h1>Tenzi Game</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/tenzimain" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/332536521_714562240416396_8490514855916798001_n.png?stp=dst-png_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=bUUfs2OQxnAAX8vfTiu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ6B7ZODWbAAJXlIk-8QHtQ-ZJhvqFH7y3QSmFLH7PJtA&oe=64303C61"
      />
        <CardActionArea>
          <CardContent>
              <h1>2048 Game</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/274183736_348404160525619_5525377645560026897_n.png?stp=dst-png_p228x119&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=nCnDAjzgVqkAX-NfDO9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQYABdUZ04VgZ-wtZiI7uj5_oKRk8IhYeg78zEBXqS1MA&oe=643029E2"
      />
        <CardActionArea>
          <CardContent>
              <h1>Tic tac toe</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        sx={{ height: 140 , width: 200 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/333272226_1716264368775192_8788713086716761110_n.png?stp=dst-png_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=q8ZZZS7w23YAX-87j9r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTCEtC8cTsD7mpbkQ5m6UT5M5GW9cPE4ZUzYpulzbQvhg&oe=64302FA2"
      />
        <CardActionArea>
          <CardContent>
              <h1>15 Puzzel</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        sx={{ height: 120 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/302184235_371051395242051_4862745792283441018_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Jb6KhLzbDv0AX_KwXEr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQkvdEVaFDx8DMCb2Ons7xpg7vvpxzVtDelovMMlcvFOA&oe=643044C0"
      />
        <CardActionArea>
          <CardContent>
              <h1>Hangman game</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/248920554_1221189115033504_4794687608169224845_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ojVqux7do5kAX9xdoc4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSI1rr_N6uPumViybxyjrybwlvi02OTQhBbsCwg7u1R0g&oe=643032C0"
      />
        <CardActionArea>
          <CardContent>
              <h1>Bingo game</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/335182360_6103319823024230_1315244643326137706_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=dRBAOrHpN5MAX_UYk2x&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR1PIQhgZxy5WLLmtItaQXU1BCbw8O5QjZ21H6ec77r9w&oe=64304C18"
      />
        <CardActionArea>
          <CardContent>
              <h1>4 in a line</h1>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Link href="/" style={{ textDecoration: 'none' , color: 'green'}}><p>Play</p></Link>
        </CardActions>
      </Card>
      </Grid>
    </Box>
  );
}
