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
                <InputLabel htmlFor="tp-native-simple">Actividad Economica Relacionada</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tpactivo',
                        id: 'tp-native-simple',
                    }}
                >
                    <option value={0}>Elejir...</option>
                    <option value={1}>Activo 1</option>
                    <option value={2}>Activo 2</option>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="tp-native-simple">Tipo de Producto</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tpactivo',
                        id: 'tp-native-simple',
                    }}
                >
                    <option value={0}>Elejir...</option>
                    <option value={1}>Producto Tangible</option>
                    <option value={2}>Producto intangible</option>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="tp-native-simple">Categotia Producto/Servicio</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tpd',
                        id: 'tp-native-simple',
                    }}
                >
                    <option value={0}>Elejir...</option>
                    <option value={1}>Tengnologia</option>
                    <option value={2}>Educacion</option>
                </Select>
            </FormControl>
        
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Nombre Producto/Servicio*</InputLabel>
                <Input
                    id="Nombre-Empresa"
                    startAdornment={<InputAdornment position="start"> <Icon className="text-30" color="action">
                        local_grocery_store
								</Icon>
                    </InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Costo de Producción*</InputLabel>
                <Input
                    id="numero-NIT"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        local_atm
						</Icon></InputAdornment>}
                />
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Valor Ventas*</InputLabel>
                <Input
                    id="numero-NIT"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        attach_money
						</Icon></InputAdornment>}
                />
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Icon className="text-60">people_outline</Icon>}>
                    Agregar Productos o Servicios
      </Button>
            </FormControl>
        </form>
    );
}