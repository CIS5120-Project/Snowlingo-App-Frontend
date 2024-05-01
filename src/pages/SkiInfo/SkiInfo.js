import React from "react";
import { useState } from "react";
import "./SkiInfo.css";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography, Fade, useTheme } from '@mui/material';

function SkiInfo () {
  const theme = useTheme();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [level, setLevel] = useState(null);

  return (
    <Box
      sx={{
        margin: "8% 10%",
      }}>
      <img src={logo} alt="logo img" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}/>

      <Box>
        <Box
          sx={{
            width: "60vw",
            height: "1.3vh",
            backgroundColor: "#FE76FF",
            right: 0,
            top: 213,
            opacity: 0.9,
            position: "absolute"
          }}
        />
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
            width: "18vw",
            height: "0.9vh",
            backgroundColor: theme.palette.secondary.main,
            left: 0,
            top: 235,
            opacity: 0.9,
            position: "absolute"
          }}
        />
      </Box>

      <Box
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
        <Typography
          variant="body3"
          gutterBottom
          fontSize={"1.4rem"}
          fontWeight={"bold"}
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
              boxShadow: "1.3px 1.3px #836FFF",
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
              fontSize={"1.1rem"}
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Snowboard 🏂
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
              boxShadow: "1.3px 1.3px #836FFF",
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
              fontSize={"1.1rem"}
              gutterBottom
              sx={{
                color: theme.palette.primary.light
              }}
            >
              Ski ⛷
            </Typography>
          </Button>
        </Stack>
      </Box>

      <Fade in={topic !== null} timeout={1000}>
        <Box
          sx={{
            marginTop: '2rem',
            marginBottom: '2rem'
          }}>
          <Typography
            variant="body3"
            fontSize={"1.4rem"}
            fontWeight={"bold"}
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
                boxShadow: "1.3px 1.3px #836FFF",
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
                fontSize={"1.1rem"}
                gutterBottom
                sx={{
                  color: theme.palette.primary.light
                }}
              >
                Beginner 🥉
              </Typography>
            </Button>
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: (level === 'intermediate' ? theme.palette.secondary.main : theme.palette.primary.dark)
              }}
              sx={{
                boxShadow: "1.3px 1.3px #836FFF",
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
                fontSize={"1.1rem"}
                gutterBottom
                sx={{
                  color: theme.palette.primary.light
                }}
              >
                Intermediate 🥈
              </Typography>
            </Button>
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: (level === 'advanced' ? theme.palette.secondary.main : theme.palette.primary.dark)
              }}
              sx={{
                boxShadow: "1.3px 1.3px #836FFF",
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
                fontSize={"1.1rem"}
                gutterBottom
                sx={{
                  color: theme.palette.primary.light
                }}
              >
                Advanced 🥇
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Fade>

      <Fade in={level !== null} timeout={1000}>
        <Button
          variant="outlined"
          fullWidth
          style={{
            backgroundColor: theme.palette.secondary.main
          }}
          sx={{
            height: '4vh',
            width: '6rem',
            marginTop: '15px',
            borderRadius: '15px',
            float: "right"
          }}
          onClick = {() => navigate("/personinfo")}
        >
          <Typography
            variant="body3"
            fontSize={"1.1rem"}
            gutterBottom
            sx={{
              color: "black"
            }}
          >
            Next
          </Typography>
        </Button>
      </Fade>
    </Box>
  );
};

export default SkiInfo;
