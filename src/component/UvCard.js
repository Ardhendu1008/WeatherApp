import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Progressbar from './Progressbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));


export default function UvCard(props) {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }} style={{ height: '120px', minWidth: '200px', border: '1px solid black', borderRadius: '10px' }}>
        {props.q && <div><CardContent>
          <Stack spacing={1} direction="column" useFlexGap flexWrap="wrap">
            <Typography variant="body2" color="text.secondary">
              {props.t}
            </Typography>
            <Stack direction="column" useFlexGap flexWrap="wrap" style={{ alignItems: 'center'}}>
              <Progressbar q={props.q} />
              <Typography variant="h6" color="text.primary">
                {props.q}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        </div>}
      </Card>
    </Box>
  );
}