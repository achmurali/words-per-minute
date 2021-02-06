import React from 'react'
import { Typography } from '@material-ui/core';

const Nexttexttypography = (props) => {
    return (
        <Typography display='inline'>
            {props.children}
        </Typography>
    )
}

export default Nexttexttypography;