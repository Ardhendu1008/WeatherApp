import './App.css';
import {useState,useEffect} from 'react';
import Left from './component/Left';
import RightTop from './component/RightTop';
import RightBelow from './component/RightBelow';
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

function App() {

  const [state,setState] = useState('Kolkata');
  const [data,setData] = useState();
  const [load,setLoad] = useState();
    

  const handleOnClick = async()=>{
    var txt = document.querySelector('#standard-basic').value;
    if(txt!="" && txt!=state)
    {
      setState(txt);
      console.log(txt);
    }
  }

  useEffect(()=>{

    const fetchData =async()=>{
          setLoad(true);
          const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d949a3919f3747ee9e845526240704&q=${state}&days=6&aqi=yes&alerts=no`);
          const fmt_data = await data.json();
          console.log (fmt_data);
          setData(fmt_data);
          // var {location} = fmt_data;
          // console.log(location.lat);
          setLoad(false);
    }

    fetchData();
  },[state])
  {
    if(load){
    return(
      <div style={{display:'flex', justifyContent:'center'}}>
        <h1>Loading.....</h1>
      </div>
    );
  }
  else
  {
    return (
      <>
      <div style={{width:'auto', height:'auto', display:'flex', justifyContent:'center', backgroundColor:'#ededed'}}>
        <Box style={{display:'flex', justifyContent:'center'}}>
              <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
              <Left func = {handleOnClick} data ={data}/>
              <Stack spacing={10} direction="column" useFlexGap flexWrap="wrap" style={{marginTop:'30px'}}>
              <RightTop data = {data}/>
              <RightBelow q ={data}/>
              </Stack>
              </Stack>
        </Box> 
      </div>  
      </>
    );
  }
}
}

export default App;
