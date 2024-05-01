import React from 'react';
import HandymanIcon from '@mui/icons-material/Handyman';

// Basic inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#211951',
    color: "#15F5BA",
  },
  header: {
    fontSize: '2rem',
    margin: '0.5rem 0',
  },
  paragraph: {
    fontSize: '1rem',
    margin: '0.5em 0',
    width: '80%',
    maxWidth: '600px',
  },
};

function Maintenance () {
  return (
    <div style={styles.container}>
      <HandymanIcon style={{ color: "#15F5BA"} }/>
      <h1 style={styles.header}>We'll Be Back Soon!</h1>
      <p style={styles.paragraph}>
        We're currently performing scheduled maintenance. We should be back online shortly.
      </p>
      <p style={styles.paragraph}>
        Thank you for your patience.
      </p>
    </div>
  );
};

export default Maintenance;
