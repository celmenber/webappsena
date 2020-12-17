import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function GoesEmpresas() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Nombre  Empresa*</InputLabel>
                <Input
                    id="Nombre-Empresa"
                    startAdornment={<InputAdornment position="start"> <Icon className="text-30" color="action">
                        business
								</Icon>
                    </InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Número NIT*</InputLabel>
                <Input
                    id="numero-NIT"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        sticky_note
						</Icon></InputAdornment>}
                />
            </FormControl>
        </form>
    );
}