import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
//import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="tp-native-simple">Tipo de Activo</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tpactivo',
                        id: 'tp-native-simple',
                    }}
                >
                    <option value={0}>Elejir...</option>
                    <option value={1}>Activo Fijo</option>
                    <option value={2}>Activo Circulante</option>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="tp-native-simple">Activos</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tpd',
                        id: 'tp-native-simple',
                    }}
                >
                    <option value={0}>Elejir...</option>
                    <option value={1}>Activos1</option>
                    <option value={2}>Activos2</option>
                    <option value={3}>Activos3</option>
                </Select>
            </FormControl>


            <FormControl fullWidth className={classes.margin}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Icon className="text-60">people_outline</Icon>}>
                    Agregar Activo
      </Button>
            </FormControl>
        </form>
    );
}