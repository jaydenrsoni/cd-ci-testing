import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function SimpleButton(props) {
  const { classes } = props;

  return (
    <div>
      <Button component={Link} to="/timer" variant="contained" color="primary" 
      className={classes.button}>
        Start Workout!
      </Button>
    </div>
  );
}

SimpleButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleButton);
