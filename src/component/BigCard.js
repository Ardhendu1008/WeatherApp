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


export default function BigCard(props) {
  return (
    <Box>
        <Card sx={{ maxWidth: 345 }} style={{height:'120px', minWidth:'200px', border:'1px solid black', borderRadius:'10px'}}>
          {props.q && <div><CardContent>
            <Stack spacing={2} direction="column" useFlexGap flexWrap="wrap" style={{margin:'5px', marginBottom:'10px'}}>
              <Typography variant="body2" color="text.secondary">
                {props.t}
              </Typography>
              <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap" style={{margin:'5px'}}>
                <Typography variant="h4" color="text.primary">
                  {props.q}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {props.u}
                </Typography>
              </Stack>  
            </Stack>
          </CardContent>
          </div>}
        </Card>
    </Box>
  );
}