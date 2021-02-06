import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

const Incorrecttexttypography = (props) => {
    return (
        <Typography color='error' display='inline'>
            {props.children}
        </Typography>
    )
}

export default Incorrecttexttypography;