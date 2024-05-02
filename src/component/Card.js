import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function MediaCard(props) {
  var day;
  const dayFind = (val) => {
    let arr = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(val);
    let d2 = d.getDay();
    day = arr[d2];
  }
  return (
    <Card sx={{ maxWidth: 345 }} style={{ height: '120px', minWidth: '128px', border: '1px solid black' }}>
      {props.q && <div>{dayFind(props.q.date)}
        <Box>
          <Stack spacing={1} justifyContent="center" alignItems="center" direction="column" useFlexGap flexWrap="wrap">
            <Typography variant="body2" color="text.primary" style={{fontWeight:'bold', marginTop:'4px'}}>{day}</Typography>
            <div style={{ backgroundImage: `url(${props.q.day.condition.icon})`, height: '40px', width: '40px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
            </div>
          </Stack>
        </Box>

        <CardContent>
          <Box>
            <Stack spacing={1} justifyContent="center" direction="row" useFlexGap flexWrap="wrap">
              <Typography variant="body2" color="text.primary">{props.q.day.maxtemp_c}°</Typography>
              <Typography variant="body2" color="text.secondary">{props.q.day.mintemp_c}°</Typography>
            </Stack>
          </Box>
        </CardContent>
      </div>}
    </Card>
  );
}