import { useNavigate } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Typography, Stack, Button, useTheme } from '@mui/material';
import logo from "../../snowlingo.svg"

function Resort() {
  const navigate = useNavigate();
  const theme = useTheme();

  // function handleUnitClick(event) {
  //   const buttonId = event.currentTarget.getAttribute('data-id');
  //   navigate(`/unit?id=${buttonId}`);
  // }
  function handleUnitClick02(event) {
    const buttonId = event.currentTarget.getAttribute('data-id');
    // navigate(`/cards02`);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <KeyboardBackspaceIcon
          fontSize='large'
          sx={{
            alignSelf: 'self-start',
            color: theme.palette.primary.light,
            margin: '2rem',
          }}
          onClick={() => navigate("/cards02")}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 2,
            margin: '3rem 1.5rem'
          }}>
          <img src={logo} alt="logo img" />
          <Typography variant="h4" color={theme.palette.primary.main} style={{marginLeft: '0.5rem'}}>
            More Resorts
          </Typography>
          <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 360, mt: 3 }}>
            <Button
              data-id="1"
              variant="outlined"
              fullWidth
              sx={{
                padding: '1rem 1rem',
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: '#15F5BA',
                }
              }}
              onClick = {handleUnitClick02}
            >
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
                <Typography variant="body1" color={theme.palette.primary.dark} >
                  BlueMountain Resort (5.1 mi)
                </Typography>
                <Typography variant="body2" color={theme.palette.primary.dark} >
                  {/* Introduction */}
                </Typography>
              </Box>
            </Button>
            <Button
              data-id="2"
              variant="outlined"
              fullWidth
              sx={{
                padding: '1rem 1rem',
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: '#15F5BA',
                }
              }}
              onClick = {handleUnitClick02}
            >
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
                <Typography variant="body1" color={theme.palette.primary.dark} >
                Aspen Resort (111.1 mi)
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.primary.dark}
                  sx={{
                    maxWidth: '200px', // Sets the maximum width of the text
                  }}
                >
                  {/* Save a beginner snowboarder from quitting */}
                </Typography>
              </Box>
            </Button>
            <Button
              data-id="3"
              variant="outlined"
              fullWidth
              sx={{
                padding: '1rem 1rem',
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: '#15F5BA',
                }
              }}
              onClick = {handleUnitClick02}
            >
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
                <Typography variant="body1" color={theme.palette.primary.dark} >
                 Killintong Resort (555.1 mi)
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.primary.dark}
                  sx={{
                    maxWidth: '200px', // Sets the maximum width of the text
                  }}
                >
                  {/* Improve Beginner Snowboard Turns with One Skill */}
                </Typography>
              </Box>
            </Button>
            <Button
              data-id="3"
              variant="outlined"
              fullWidth
              sx={{
                padding: '1rem 1rem',
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: '#15F5BA',
                }
              }}
              onClick = {handleUnitClick02}
            >
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
                <Typography variant="body1" color={theme.palette.primary.dark} >
                FujiMountain Resort (1095.1 mi)
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.primary.dark}
                  sx={{
                    maxWidth: '200px', // Sets the maximum width of the text
                  }}
                >
                  {/* Improve Beginner Snowboard Turns with One Skill */}
                </Typography>
              </Box>
            </Button>
            <Button
              data-id="3"
              variant="outlined"
              fullWidth
              sx={{
                padding: '1rem 1rem',
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: '#15F5BA',
                }
              }}
              onClick = {handleUnitClick02}
            >
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
                <Typography variant="body1" color={theme.palette.primary.dark} >
                 WanLon Resort (1845.1 mi)
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.primary.dark}
                  sx={{
                    maxWidth: '200px', // Sets the maximum width of the text
                  }}
                >
                  {/* Improve Beginner Snowboard Turns with One Skill */}
                </Typography>
              </Box>
            </Button>
            <Button
              data-id="3"
              variant="outlined"
              fullWidth
              sx={{
                padding: '1rem 1rem',
                backgroundColor: theme.palette.primary.light,
                '&:hover': {
                  backgroundColor: '#15F5BA',
                }
              }}
              onClick = {handleUnitClick02}
            >
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: theme.palette.primary.light, fontSize: '16px' }}>
                <Typography variant="body1" color={theme.palette.primary.dark} >
                 {/* Killintong Resort (555.1 mi) */}
                 ...
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.primary.dark}
                  sx={{
                    maxWidth: '200px', // Sets the maximum width of the text
                  }}
                >
                  {/* Improve Beginner Snowboard Turns with One Skill */}
                </Typography>
              </Box>
            </Button>
          </Stack>
        </Box>
    </Box>
  );
}

export default Resort;
