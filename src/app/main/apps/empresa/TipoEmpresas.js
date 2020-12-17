import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function TipoEmpresa() {
    const classes = useStyles();
    return (

        <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="tp-native-simple">Tipo de Empresa</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'tp-native-simple',
                        id: 'tp-native-simple',
                       }}
                     >
                    <option value={0} selected>SELECT...</option>
                    <option value={1}>PERSONA NATURAL</option>
                    <option value={2}>SOCIEDADES POR ACCIONES</option>
                </Select>
            </FormControl>
        </form>
    );
}