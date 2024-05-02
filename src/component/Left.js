import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));


export default function RecipeReviewCard(props) {

  var day; var time;var now;

  const dayFind = (val) => {
    let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday'];
    const d = new Date(val);
    let d2 = d.getDay();
    day = arr[d2];
  }

  useEffect(()=>{
    if(props.data)
    {
      dayFind(props.data.forecast.forecastday[0].date);
      // findTime(props.data.location.localtime_epoch);
    }
  },[props.data]);

  return (
    <Card sx={{ maxWidth: 500 }} style={{ margin: '40px', width: '300px', borderRadius: '10px' }}>
      {props.data && <div>{dayFind(props.data.forecast.forecastday[0].date)}
        <CardContent>
          <Stack spacing={15} direction="row">
            <TextField id="standard-basic" label="Search" variant="standard" style={{ marginBottom: '4px' }} />
            <Button variant="contained" onClick={props.func} style={{ width: '100px', height: '40px', alignSelf: 'center' }}>Click</Button>
          </Stack>
        </CardContent>
        <div style={{ backgroundImage: `url(${props.data.forecast.forecastday[0].day.condition.icon})`, height: '160px', width: '200px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', marginLeft: '30px' }}>
        </div>

        <CardContent>
          <Typography variant="h2">{props.data.current.temp_c}°C</Typography>
        </CardContent>


        <CardContent>
          <Typography variant="h5" color="text.primary">{props.data.location.name}</Typography>
          <Typography variant="h5" color="text.primary">{day},{props.data.location.localtime.slice(11)}</Typography>
          {/* <div style={{ height: '100px' }}></div> */}
          <Typography paragraph>Forcast: {props.data.forecast.forecastday[0].day.condition.text}</Typography>
          <Typography paragraph>Rain: {props.data.forecast.forecastday[0].day.daily_chance_of_rain}%</Typography>
        </CardContent>

        {/* <div style={{ backgroundImage: `url(${props.data.forecast.forecastday[0].day.condition.icon})`, height: '80px', width: '200px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', border: '1px solid black', borderRadius: '10px', margin: '10px 50px' }}>
        </div> */}
      </div>}
    </Card>
  );
}