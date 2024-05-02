import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import BigCard from './BigCard';
import SunCard from './SunCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function MediaCard(props) {
  return (
    <Box>
      <Typography variant='h6' style={{fontWeight:'bold'}}>Today</Typography>
      {props.q && <div>
          <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap" style={{margin:'5px', marginBottom:'10px'}}>
            <BigCard q ={props.q.current.uv} t ={"UV index"} u = {""}/>
            <BigCard q ={props.q.current.wind_kph} t={"Wind Status"} u = {"km/h"}/>
            
            </Stack>
            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap" style={{margin:'5px'}}>
            <BigCard q ={props.q.current.humidity} t={"Humidity"} u = {"%"}/>
            <SunCard q ={props.q.forecast.forecastday[0].astro}/>
            </Stack>
      </div>}
    </Box> 

  );
}