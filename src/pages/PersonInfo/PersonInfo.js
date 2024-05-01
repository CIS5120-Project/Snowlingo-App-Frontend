import React from "react";
import { useState, useEffect } from "react";
import "./PersonInfo.css";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

function PersonInfo () {
  const theme = useTheme();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    if (topic && level) {
      navigate("/skiinfo")
    }
  });

  return (
    <Box
      sx={{
        margin: "10% 10%",
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // gap: 2,
        // margin: '3rem 1.5rem'
      }}>
      <img src={logo} alt="logo img" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}/>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.primary.light
        }}
      >
        About you
      </Typography>
      <Box
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
        <Typography
          variant="body3"
          gutterBottom
          sx={{
            color: theme.palette.primary.light
          }}
        >
          You want to learn ...
        </Typography>
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: (topic === 'snowboard' ? theme.palette.secondary.main : theme.palette.primary.dark)
            }}
            sx={{
              height: '7vh',
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => setTopic('snowboard')}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Snowboard
            </Typography>
          </Button>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: (topic === 'ski' ? theme.palette.secondary.main : theme.palette.primary.dark)
            }}
            sx={{
              height: '7vh',
              '&:hover': { backgroundColor: theme.palette.secondary.main },
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              justifyContent: 'center'
            }}
            onClick = {() => setTopic('ski')}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Ski
            </Typography>
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
        <Typography
          variant="body3"
          gutterBottom
          sx={{
            color: theme.palette.primary.light
          }}
        >
          I am ...
        </Typography>
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: (level === 'beginner' ? theme.palette.secondary.main : theme.palette.primary.dark)
            }}
            sx={{
              height: '7vh',
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => setLevel('beginner')}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Beginner
            </Typography>
          </Button>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: (level === 'intermediate' ? theme.palette.secondary.main : theme.palette.primary.dark)
            }}
            sx={{
              height: '7vh',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => setLevel('intermediate')}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Intermediate
            </Typography>
          </Button>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: (level === 'advanced' ? theme.palette.secondary.main : theme.palette.primary.dark)
            }}
            sx={{
              height: '7vh',
              '&:hover': { backgroundColor: theme.palette.secondary.main},
              borderColor: theme.palette.secondary.main,
              padding: '8px 30px',
              paddingRight: '16px',
              borderRadius: '15px',
              color: theme.palette.primary.main,
              justifyContent: 'center'
            }}
            onClick = {() => setLevel('advanced')}
          >
            <Typography
              variant="body3"
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Advanced
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PersonInfo;
