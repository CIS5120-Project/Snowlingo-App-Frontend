import React, { useState, useEffect } from "react";
import "./PersonInfo.css";
import logo from "../../snowlingo.svg"

import { useNavigate } from 'react-router-dom';
import { Box, Stack, Button, TextField, Typography, Grid, MenuItem, Select, FormControl, InputLabel, useTheme, Hidden } from '@mui/material';

function PersonInfo () {
  const theme = useTheme();
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [keyDownCount, setKeyDownCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [totalDistance, setTotalDistance] = useState(0);
  const [ageNum, setAgeNum] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('ft');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const API_Key = "uK5KQiG3kRSRj6CGY8wr1MLniUGG4IuL";

  const handleUnitChange = (event) => {
      const newUnit = event.target.value;
      setHeightUnit(newUnit);
      // Reset height when unit changes
      setHeight('');

      // Optionally set default values for each unit
      if (newUnit === 'ft') {
          setHeight("5'8''"); // Set a default example value for feet and inches
      }
  };

  const handleAgeChange = (event) => {
    let age = parseInt(event.target.value, 10);
    if (!isNaN(age)) {
      if (age > 120) {
        age = 120;
      }
      if (age < 0) {
        age = 0;
      }
      setAgeNum(age);
    } else {
      setAgeNum('');
    }
  }

  const handleHeightChange = (event) => {
    let newHeight = event.target.value;
    // Add validation or formatting logic here if necessary
    if (heightUnit === 'cm') {
      if (!isNaN(newHeight)) {
        if (newHeight > 210) {
          newHeight = 210;
        }
        if (newHeight < 0) {
          newHeight = 0;
        }
        setHeight(newHeight);
      } else {
        setHeight('');
      }
    } else {
      setHeight(newHeight);
    }
  };

  const handleWeightChange = (event) => {
    let newWeight = event.target.value;
    // Add validation or formatting logic here if necessary
    let maxWeight = 0;
    if (weightUnit === 'lbs') {
      maxWeight = 330;
    } else {
      maxWeight = 150;
    }

    if (!isNaN(newWeight)) {
      if (newWeight > maxWeight) {
        newWeight = maxWeight;
      }
      if (newWeight < 0) {
        newWeight = 0;
      }
      setWeight(newWeight);
    } else {
      setWeight('');
    }
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const stateAbbreviations = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  // Function to handle location access success
  const handleSuccess = async (position) => {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
      fetch(`https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_Key}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then((res) => res.json())
        .then((data) => {
          const addressObj = data.results[0].address;
          const stateCode = addressObj.countrySubdivisionCode;
          const cityName = addressObj.municipality
          setState(stateCode);
          setCity(cityName);
        });

  };

  // Function to handle location access error
  const handleError = (error) => {
      console.error('Error accessing location:', error.message);
  };

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

  useEffect(() => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
            // maximumAge: 60000, // Acceptable cache age of a position
            // timeout: 5000,    // Timeout for the request
            enableHighAccuracy: true // Request high accuracy position
        });
    } else {
        console.error('Geolocation is not supported by your browser');
    }

    setStartTime(Date.now());
    setHeight("5'8''"); // Set a default example value for feet and inches
  }, []);

  useEffect(() => {
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
      sx={{
        margin: '10% 10%'
      }}
      onClick={handleInteraction}
    >
      <img src={logo} alt="logo" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}/>
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.light }}>
        About you
      </Typography>
      <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item sx={{ color: "#F0F3FF" }}>{">"}</Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Age:"
              value={ageNum}
              inputProps={{
                max: 120, min: 0
              }}
              InputLabelProps={{ style: { color: "#F0F3FF" }, shrink: false }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                width: "100%",
                input: { color: theme.palette.secondary.main, textAlign: "right" }
              }}
              onChange={handleAgeChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
            <Grid item sx={{ color: "#F0F3FF" }}>{">"}</Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    variant="standard"
                    type={heightUnit === 'cm' ? 'number' : 'text'} // Dynamic type based on unit
                    label="Height:"
                    value={height}
                    onChange={handleHeightChange}
                    InputLabelProps={{ style: { color: "#F0F3FF" }, shrink: false }}
                    sx={{
                        backgroundColor: theme.palette.primary.dark,
                        borderBottom: '1px solid #F0F3FF',
                        width: "100%",
                        input: { color: theme.palette.secondary.main, textAlign: "right" }
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth variant="standard">
                    <InputLabel id="height-unit-label" sx={{ color: '#F0F3FF' }}>Unit</InputLabel>
                    <Select
                        labelId="height-unit-label"
                        id="height-unit"
                        value={heightUnit}
                        onChange={handleUnitChange}
                        label="Unit"
                        sx={{ borderBottom: '1px solid #F0F3FF', color: "#F0F3FF" }}
                    >
                        <MenuItem value="cm">cm</MenuItem>
                        <MenuItem value="ft">ft</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item sx={{ color: "#F0F3FF" }}>{">"}</Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="standard"
              type="number"
              label="Weight:"
              value={weight}
              onChange={handleWeightChange}
              InputLabelProps={{ style: { color: "#F0F3FF" }, shrink: false }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                width: "100%",
                input: { color: theme.palette.secondary.main, textAlign: "right" }
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="weight-unit-label" sx={{ color: '#F0F3FF' }}>Unit</InputLabel>
              <Select
                labelId="weight-unit-label"
                id="weight-unit"
                value={weightUnit}
                onChange={e => setWeightUnit(e.target.value)}
                label="Unit"
                sx={{ borderBottom: '1px solid #F0F3FF', color: "#F0F3FF" }}
              >
                <MenuItem value="kg">kg</MenuItem>
                <MenuItem value="lbs">lbs</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item sx={{ color: "#F0F3FF" }}>{">"}</Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="state-label" sx={{ color: '#F0F3FF' }}>State</InputLabel>
              <Select
                labelId="state-label"
                id="state-select"
                value={state}
                onChange={e => {
                  setState(e.target.value)
                }}
                label="State"
                sx={{
                  borderBottom: '1px solid #F0F3FF',
                  color: '#F0F3FF',
                  '.MuiSelect-select': {
                    maxHeight: "100px", // Set the minimum height for the select field
                    overflow: "hidden"
                  },
                }}
              >
                {/* Q0oyVYvqRdfn0o6Ch_0NllSFqKKXUCYMgbI_Xby6E_cPItQL--qQ2eKExthAtFk8ILU */}
                {/* List states or use data from a source */}
                {stateAbbreviations.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="standard"
              label="City"
              InputLabelProps={{ style: { color: "#F0F3FF" } }}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                borderBottom: '1px solid #F0F3FF',
                input: { color: theme.palette.secondary.main }
              }}
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </Grid>
        </Grid>
      </Stack>
      <Box
        sx={{
          marginTop: "10%",
          display: 'flex',
          justifyContent: "center"
        }}
      >
        <Button
          variant="outlined"
          style={{
            backgroundColor: theme.palette.secondary.main
          }}
          sx={{
            height: '5vh',
            width: '40vw',
            marginTop: '25%',
            borderRadius: '15px',
          }}
          onClick = {() => navigate("/home")}
        >
          <Typography
            variant="body3"
            fontSize={"1rem"}
            gutterBottom
            sx={{
              color: "black"
            }}
          >
            Submit
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default PersonInfo;
