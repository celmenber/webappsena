import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
//import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    paddingtop: {
        padding: '16px 0 14px'
    }
}));

export default function GoesEmpresas() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount" 
                > <Icon className="text-60" color="action">filter_tilt_shift</Icon> Misión de la empresa</InputLabel>
                <Input
                    id="standard-adornment-Misión"
                    className={classes.paddingtop}
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help
						</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount"
                > <Icon className="text-60" color="action"> remove_red_eye</Icon>Visión de la empresa</InputLabel>
                <Input
                    id="standard-adornment-Visión"
                    className={classes.paddingtop}
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount"
                > <Icon className="text-60" color="action"> recent_actors</Icon> Valores que conforman la empresa</InputLabel>
                <Input
                    id="standard-adornment-valores"
                    className={classes.paddingtop}
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                />
            </FormControl>
        </form>
    );
}