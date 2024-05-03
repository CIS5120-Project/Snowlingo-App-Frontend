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
  const [ageNum, setAgeNum] = useState();
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState('ft');
  const [weight, setWeight] = useState();
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
      // if (newUnit === 'ft') {
      //     setHeight("5'8''"); // Set a default example value for feet and inches
      // }
  };

  const handleAgeChange = (event) => {
    setAgeNum(event.target.value);
    console.log(ageNum);
  };

  const handleHeightChange = (event) => {
    console.log(event.target)
    console.log("1992182903")
    console.log("val: " + event.target.value);
    setHeight(event.target.value);
    console.log(height);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    console.log(weight);
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
    // setHeight("5'8''"); // Set a default example value for feet and inches
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
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#F0F3FF' }}>Age</InputLabel>
              <Select
                value={(ageNum === undefined || ageNum === null || ageNum.length === 0) ? '' : ageNum}
                label="Age"
                onChange={handleAgeChange}
                sx={{ borderBottom: '1px solid #F0F3FF', color: "#F0F3FF" }}
              >
                <MenuItem value={10}>10-20</MenuItem>
                <MenuItem value={20}>20-30</MenuItem>
                <MenuItem value={30}>30-40</MenuItem>
                <MenuItem value={40}>40-50</MenuItem>
                <MenuItem value={50}>50-60</MenuItem>
                <MenuItem value={60}>60-70</MenuItem>
                <MenuItem value={70}>70-80</MenuItem>
                <MenuItem value={80}>80-90</MenuItem>
                <MenuItem value={90}>90-100</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
            <Grid item sx={{ color: "#F0F3FF" }}>{">"}</Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#F0F3FF' }}>Height</InputLabel>
                {heightUnit === 'ft' ?
                <Select
                  value={height}
                  label="Height"
                  onChange={handleHeightChange}
                  sx={{ borderBottom: '1px solid #F0F3FF', color: "#F0F3FF" }}
                >
                  <MenuItem value={50}>Less than 5'0''</MenuItem>
                  <MenuItem value={52}>5'0''-5'2''</MenuItem>
                  <MenuItem value={54}>5'2''-5'4''</MenuItem>
                  <MenuItem value={56}>5'4''-5'6''</MenuItem>
                  <MenuItem value={58}>5'6''-5'8''</MenuItem>
                  <MenuItem value={510}>5'8''-5'10''</MenuItem>
                  <MenuItem value={60}>5'10''-6'0''</MenuItem>
                  <MenuItem value={62}>6'0''-6'2''</MenuItem>
                  <MenuItem value={64}>6'2''-6'4''</MenuItem>
                  <MenuItem value={66}>6'4''-6'6''</MenuItem>
                  <MenuItem value={68}>6'6''-6'8''</MenuItem>
                  <MenuItem value={610}>6'8''-6'11''</MenuItem>
                </Select> :
                <Select
                  value={height}
                  label="Height"
                  onChange={handleHeightChange}
                  sx={{ borderBottom: '1px solid #F0F3FF', color: "#F0F3FF" }}
                >
                  <MenuItem value={152}>Less than 152cm</MenuItem>
                  <MenuItem value={157}>152-157cm</MenuItem>
                  <MenuItem value={162}>157-162cm</MenuItem>
                  <MenuItem value={167}>162-167cm</MenuItem>
                  <MenuItem value={172}>167-172cm</MenuItem>
                  <MenuItem value={177}>172-177cm</MenuItem>
                  <MenuItem value={182}>177-182cm</MenuItem>
                  <MenuItem value={187}>182-187cm</MenuItem>
                  <MenuItem value={192}>187-192cm</MenuItem>
                  <MenuItem value={197}>192-197cm</MenuItem>
                  <MenuItem value={202}>197-202cm</MenuItem>
                  <MenuItem value={207}>202-207cm</MenuItem>
                  <MenuItem value={211}>207-211cm</MenuItem>
                  </Select>
                }
              </FormControl>
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
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#F0F3FF' }}>Weight</InputLabel>
                <Select
                  value={(weight === undefined || weight === null || weight.length === 0) ? '' : weight}
                  label="Weight"
                  onChange={handleWeightChange}
                  sx={{ borderBottom: '1px solid #F0F3FF', color: "#F0F3FF" }}
                >
                  {weightUnit === 'kg' ?
                  <Box>
                    <MenuItem value={40}>Less than 45kg</MenuItem>
                    <MenuItem value={45}>45-50kg</MenuItem>
                    <MenuItem value={50}>50-55kg</MenuItem>
                    <MenuItem value={55}>55-60kg</MenuItem>
                    <MenuItem value={60}>60-65kg</MenuItem>
                    <MenuItem value={65}>65-70kg</MenuItem>
                    <MenuItem value={70}>70-75kg</MenuItem>
                    <MenuItem value={75}>75-80kg</MenuItem>
                    <MenuItem value={80}>80-85kg</MenuItem>
                    <MenuItem value={85}>85-90kg</MenuItem>
                    <MenuItem value={90}>90-95kg</MenuItem>
                    <MenuItem value={95}>95-100kg</MenuItem>
                    <MenuItem value={100}>100-105kg</MenuItem>
                    <MenuItem value={105}>105-110kg</MenuItem>
                    <MenuItem value={110}>110-115kg</MenuItem>
                  </Box> :
                  <Box>
                    <MenuItem value={100}>Less than 100lb</MenuItem>
                    <MenuItem value={100}>100-110lb</MenuItem>
                    <MenuItem value={110}>110-120lb</MenuItem>
                    <MenuItem value={120}>120-130lb</MenuItem>
                    <MenuItem value={130}>130-140lb</MenuItem>
                    <MenuItem value={140}>140-150lb</MenuItem>
                    <MenuItem value={150}>150-160lb</MenuItem>
                    <MenuItem value={160}>160-170lb</MenuItem>
                    <MenuItem value={170}>170-180lb</MenuItem>
                    <MenuItem value={180}>180-190lb</MenuItem>
                    <MenuItem value={190}>190-200lb</MenuItem>
                    <MenuItem value={200}>200-210lb</MenuItem>
                    <MenuItem value={210}>210-220lb</MenuItem>
                    <MenuItem value={220}>220-230lb</MenuItem>
                    <MenuItem value={230}>230-240lb</MenuItem>
                    <MenuItem value={240}>240-250lb</MenuItem>
                  </Box>}
                </Select>
              </FormControl>
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
