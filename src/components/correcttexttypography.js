import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    body1: {
        color: 'green'
    }
});

const CorrectTextTypography = (props) => {
    const classes = useStyles();
    return (
        <Typography className={classes.body1} display='inline'>
            {props.children}
        </Typography>
    )
}

export default CorrectTextTypography;
