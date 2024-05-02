import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import snow from '../../snowlingo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Button, Box, useTheme, Typography, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Unit() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Use URLSearchParams to parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); // "123"

  return (
    <Container maxWidth="md">
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem'}}>
        <KeyboardBackspaceIcon
          fontSize='large'
          sx={{
            alignSelf: 'self-start',
            color: theme.palette.primary.light,
          }}
          onClick={() => navigate("/cards02")}
        />
        <img src={snow} alt="logo" style={{ margin: '0', width: '120px'}}></img>
      </Box>
      {/* <Grid container spacing={2} style={{ marginTop: '1.5rem'}}>
        <Grid
          item
          xs={4}
          md={3}
          style={{
            display: 'flex',
            justifyContent:"center",
            alignItems:"center"
          }}>
          <Button variant="contained" style={{ minWidth: "80px", backgroundColor: "#15F5BA", color: "#211951" }}> unit {id} </Button>
        </Grid>
        {
          Array.from(Array(4)).map((_, index) => (
            <Grid
              item
              key={index}
              xs={4}
              md={3}
              style={{
                display: 'flex',
                justifyContent:"center",
                alignItems:"center"
              }}>
              <Button variant="contained" style={{ minWidth: "80px", backgroundColor: "#999999", color: "#211951" }}> unit {index + 2} </Button>
            </Grid>
          ))
        }
        <Grid
          item
          xs={4}
          md={3}
          style={{
            display: 'flex',
            justifyContent:"center",
            alignItems:"center"
          }}>
          <Button variant="contained" style={{ minWidth: "80px", backgroundColor: "#999999", color: "#211951" }}>  ... </Button>
        </Grid>
      </Grid> */}
      <Grid container style={{marginTop: '30px', padding: '10px'}}>
        <Typography variant="h6" style={{ color: 'white' }}>
          Start Learning by video!
        </Typography>
      </Grid>
      <YoutubeEmbed embedId="q9asUAV9MWg" style={{ marginTop: '2rem'}}/>
      <Box
        style={{
          width: '100%',
          marginTop: '1rem'
        }}
      >
        <Typography variant="h6" color="#F0F3FF" gutterBottom>
          Evaluation
        </Typography>
        {
          Array.from(Array(4)).map((_, index) => (
            <Box
              style={{
                display: "flex",
                flexDirection: 'row',
                alignItems: "center",
                width: '100%',
                minHeight: '70px',
                padding: '0.5rem 0.5rem'
              }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Box
                style={{
                  marginLeft: '1rem'
                }}
              >
                <Typography sx={{ fontSize: 12 }} color="#999999" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="body2" color="#F0F3FF" component="div">
                  This is good!
                </Typography>
              </Box>
            </Box>
          ))
        }
      </Box>
    </Container>
  );
}

export default Unit;
