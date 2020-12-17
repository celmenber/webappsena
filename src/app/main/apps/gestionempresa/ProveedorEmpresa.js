import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '38ch',
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
                <InputLabel htmlFor="tp-native-simple">Tipo de Proveedor</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tpactivo',
                        id: 'tp-native-simple',
                    }}
                >
                    <option value={0}>Elejir...</option>
                    <option value={1}>Proveedor de Recursos</option>
                    <option value={2}>Proveedor de Bienes</option>
                </Select>
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Nombre Proveedor*</InputLabel>
                <Input
                    id="Nombre-Empresa"
                    startAdornment={<InputAdornment position="start"> <Icon className="text-30" color="action">
                        recent_actors
								</Icon>
                    </InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Dirección*</InputLabel>
                <Input
                    id="numero-NIT"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        person_pin_circle
						</Icon></InputAdornment>}
                />
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Telefono*</InputLabel>
                <Input
                    id="numero-NIT"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        phone_callback
						</Icon></InputAdornment>}
                />
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Icon className="text-60">people_outline</Icon>}>
                    Agregar Proveedores
      </Button>
            </FormControl>
        </form>
    );
}


