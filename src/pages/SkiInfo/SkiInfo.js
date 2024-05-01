import React, { useState, useEffect, useDebugValue } from "react";
import "./SkiInfo.css";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Typography, Grid, useTheme } from '@mui/material';

function SkiInfo () {
  const theme = useTheme();
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [keyDownCount, setKeyDownCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [totalDistance, setTotalDistance] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyDownCount(prevCount => prevCount + 1);
      if (event.key === "Backspace") {
        setDeleteCount(prevCount => prevCount + 1);
      }
    };

    const handleMouseMove = (event) => {
      const newMousePosition = { x: event.clientX, y: event.clientY };
      if (lastMousePosition.x && lastMousePosition.y) {
        const deltaX = newMousePosition.x - lastMousePosition.x;
        const deltaY = newMousePosition.y - lastMousePosition.y;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        setTotalDistance(prevDistance => prevDistance + distance);
      }
      setLastMousePosition(newMousePosition);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastMousePosition]);


  // Function to handle submit and show alert
  const handleSubmit = () => {
    const endTime = Date.now();
    const timeUsed = (endTime - startTime) / 1000; // Time in seconds
    setElapsedTime(timeUsed);
    alert(
      `Total Clicks: ${clickCount}\n` +
      `Total Keydowns: ${keyDownCount}\n` +
      `Delete Key Presses: ${deleteCount}\n` +
      `Total Mouse Distance: ${totalDistance.toFixed(2)} pixels\n` +
      `Total Time Used on this page: ${timeUsed.toFixed(2)} seconds`
    );
    // navigate("/home");
  };

  // Function to increment click count
  const handleInteraction = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <Box
      onClick={handleInteraction}
      sx={{
        margin: '10% 10%'
      }}
    >
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
      <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Age:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Height:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Weight:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item sx={{ color: "#F0F3FF" }}>
            {">"}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              label="Living Area:"
              inputProps={{
                style: {textAlign: "right"}
              }}
              InputLabelProps={{
                style: { color: "#F0F3FF" },
                shrink: false
              }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                textAlign: "right",
                width: "60vw",
                input: {
                  color: theme.palette.secondary.main,
                  "&::placeholder": {
                    opacity: 1
                  }
                }
              }}
            />
          </Grid>
        </Grid>
      </Stack>
      <Box
        sx={{
          marginTop: "10%",
          display: 'flex',
          justifyContent: "space-between"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FE76FF",
            fontSize: "4rem",
            marginTop: "20%",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline"
            }
          }}
          onClick = {handleSubmit}
        >
          Submit {'>>>'}
        </Typography>
        <Box
          sx={{
            width: "20vw",
            height: "30vh",
            backgroundColor: theme.palette.primary.main,
            right: 0,
            position: "absolute"
          }}
        />
      </Box>
    </Box>
  );
};

export default SkiInfo;
