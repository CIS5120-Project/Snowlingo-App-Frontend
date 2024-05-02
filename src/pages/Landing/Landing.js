import "./Landing.css"
import React from "react";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import snow from './snowlingo.svg';
import PhoneIcon from '@mui/icons-material/Phone';

function Landing (){
  let navigate = useNavigate();
  const goToLogin =() => {
    navigate('/Login');
  }
  const goToSkiinfo =() => {
    navigate('/skiinfo2');
  }

  return (
    <div className="background-mountain landing">
      <main>Landing</main>
      <div className="logo">
        <img height={100} width={400} src={snow} alt="logo"/>
      </div>
      <p className="advanture">Great Advanture!</p>

      <div>
        <IconButton className='login' onClick={goToLogin}>Login {'>>>'}</IconButton>
        <div className='account-sign'>
            <p style={{marginTop:'0px'}}>Don't have account?  </p>
            <p className='signup' onClick={goToSkiinfo}> SignUp here</p>
        </div>
      </div>

      <div style={{ "margin": "100px 1rem", "display": 'flex'}}>
        <PhoneIcon style={{color: 'white'}}></PhoneIcon>
        <p className='contact'>Contact us!</p>
      </div>
    </div>
  );
};

export default Landing;
