import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
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
    formControl: {
        minWidth: 335,
        width: '100ch',
    },
}));

export default function TipoEmpresa() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">check</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Tipo Empresa</InputLabel>
                            <Select
                                className="mt-8 mb-24"
                                native
                                label="Tipo de Empresa*"
                                inputProps={{
                                    name: 'tipoempresa',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>PERSONA NATURAL</option>
                                <option value={2}>SOCIEDADES POR ACCIONES</option>
                            </Select>
                        </FormControl>
                    </div>
                    </Grid>
                  </Grid>
      <Typography color="textSecondary" variant="body2">
      </Typography>
      <Divider variant="middle" />
    </div >
    );
}