import React from 'react';
import { makeStyles } from '@material-ui/styles';
import{ Typography} from '@mui/material';
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://wallpapercave.com/dwp1x/wp2481186.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: '3rem',
    marginBottom: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  description: {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    marginBottom: '4rem',
    maxWidth: '600px',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.heading}>
        Welcome to Dream Travel
      </Typography>
      <Typography variant="h4" className={classes.description}>
        Embark on a journey of a lifetime and explore the wonders of the world with us.
      </Typography>
    </div>
  );
};

export default Content;
