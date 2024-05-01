import React from "react";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

function Home (){
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        margin: '3rem 1.5rem'
      }}>
      <img src={logo} alt="logo img" style={{ marginTop: "4rem" }}/>
      <Typography
        variant="body3"
        gutterBottom
        sx={{
          color: theme.palette.primary.light
        }}
      >
        Welcome to Learn Ski
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: '18rem',
          height: '18rem',
          marginTop: '1rem',
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
          },
          padding: '10px 30px',
          borderRadius: '50%',
          fontSize: '1.25rem',
          color: theme.palette.primary.main
        }}
        onClick = {() => navigate("/cards02")}
      >
          Start Learning
        <CreateIcon />
      </Button>
      <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary.dark,
            '&:hover': { backgroundColor: theme.palette.secondary.main},
            border: 'none',
            padding: '8px 30px',
            paddingRight: '16px',
            borderLeft: '1rem solid #15F5BA',
            borderRadius: '0',
            color: theme.palette.primary.main
          }}
          onClick = {() => navigate("/maintenance")}
        >
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
            Shopping
          </Box>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
            {'>>>'}
          </Box>
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary.dark,
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
            },
            border: 'none',
            padding: '8px 30px',
            paddingRight: '16px',
            borderLeft: '1rem solid #15F5BA',
            borderRadius: '0',
            color: theme.palette.primary.main
          }}
          onClick = {() => navigate("/maintenance")}
        >
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
            Find Resort
          </Box>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
            {'>>>'}
          </Box>
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary.dark,
            '&:hover': { backgroundColor: theme.palette.secondary.main},
            border: 'none',
            padding: '8px 30px',
            paddingRight: '16px',
            borderLeft: '1rem solid #15F5BA',
            borderRadius: '0',
            color: theme.palette.primary.main
          }}
          onClick = {() => navigate("/maintenance")}
        >
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
            Check your level
          </Box>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
            {'>>>'}
          </Box>
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
