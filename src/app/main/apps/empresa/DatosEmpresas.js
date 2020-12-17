import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                <InputLabel htmlFor="rpl-native-simple">Representante Legal</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'rpl',
                        id: 'rpl-native-simple',
                    }}
                >
                    <option value={0} selected>Elejir...</option>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="pais-native-simple">Pais</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'pais',
                        id: 'pais-native-simple',
                    }}
                >
                    <option value={0} selected>Elejir...</option>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="ciudad-native-simple">Ciudad</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'ciudad',
                        id: 'ciudad-native-simple',
                    }}
                >
                    <option value={0} selected>Elejir...</option>
                </Select>
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Direccion de la Empresa*</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        location_on
								</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Telefono*</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        phone
								</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Correo Electronico*</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
                        email
								</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Sitio Web</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start"> <Icon className="text-30" color="action">
                        language
								</Icon>
                    </InputAdornment>}
                />
            </FormControl>
        </form>
    );
}