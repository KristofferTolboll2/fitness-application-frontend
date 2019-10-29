import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  const size  = props.size ? props.size : null
  const color = props.color ? props.color : 'primary'
  return (
    <Typography component="h2" style={{fontSize: size}} variant="h6" color={color} gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};