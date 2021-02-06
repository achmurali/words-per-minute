import React from 'react';
import Typography from '@material-ui/core/Typography';
import CorrectTextTypography from './correcttexttypography';
import IncorrectTextTypography from './incorrecttexttypography';
import NextCharTypography from './nexttexttypography';

const Character = React.memo(({ chr, id, chrsTyped }) => {
    //const classes = useStyles()
    let CharTypography;

    if (id == chrsTyped.length) {
        CharTypography = NextCharTypography
    }
    else if (id >= chrsTyped.length) {
        CharTypography = Typography
    }
    else if (chrsTyped[id] === chr) {
        CharTypography = CorrectTextTypography
    } else {
        CharTypography = IncorrectTextTypography
    }

    return (<CharTypography color={"textSecondary"} display='inline'>
        {chr}
    </CharTypography>)
}, (props, nextProps) => {
    if (props.id == nextProps.chrsTyped.length - 1 ||
        (props.id == nextProps.chrsTyped.length) ||
        (props.id == nextProps.chrsTyped.length + 1)) {
        return false;
    } else {
        // Return true to avoid re-render
        return true
    }
})

export default Character;