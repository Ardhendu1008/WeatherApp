import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from './Card';


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
    <Box style={{marginLeft:'30px'}}>
      <Typography variant='h6' style={{marginTop:'10px', fontWeight:'bold'}}>3-Day</Typography>
          {props.data && <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
            <Card q ={props.data.forecast.forecastday[0]}/>
            <Card q ={props.data.forecast.forecastday[1]}/>
            <Card q ={props.data.forecast.forecastday[2]}/>
            {/* <Card q ={props.data.forecast.forecastday[3]}/>
            <Card q ={props.data.forecast.forecastday[4]}/>
            <Card q ={props.data.forecast.forecastday[5]}/> */}
          </Stack>}
    </Box> 
  );
}