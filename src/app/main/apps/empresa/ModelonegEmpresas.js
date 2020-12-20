import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
//import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
//import Typography from '@material-ui/core/Typography';
//import Input from '@material-ui/core/Input';
//import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
        minWidth: 315,
        width: '100ch',
    },
}));

export default function TipoEmpresa() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">sentiment_dissatisfied</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Que problema esta solucionando el Productos o Servicio que ofrece tu empresa</InputLabel>
                            <OutlinedInput
                                id="Productos-Servicio"
                                label="Que problema esta solucionando el Productos/Servicios que ofrece tu empresa"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end"><Icon className="text-30" color="action">
                                    help_outline
						           </Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">wc</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Segmentos de clientes que accederan a tus Productos y Servicios</InputLabel>
                            <OutlinedInput
                                id="segmentos-cliente"
                                label="Describe los segmentos de clientes que accederan a tus Productos"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                                    help_outline
						</Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">favorite</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Describe la propuesta de valor que entrega a tu cliente</InputLabel>
                            <OutlinedInput
                                id="propuesta-propuesta"
                                label="Que problema esta solucionando el Productos/Servicios que ofrece tu empresa"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end"><Icon className="text-30" color="action">
                                    help_outline
						           </Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">chat</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Canales de atencion que la empresa dispone para sus clientes</InputLabel>
                            <OutlinedInput
                                id="canales-atencion"
                                label="Canales de atencion que la empresa dispone para sus clientes"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                                    help_outline
						</Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">monetization_on</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">¿Cuales son las fuentes de ingresos?</InputLabel>
                            <OutlinedInput
                                id="monetization_fuentes"
                                label="¿Cuales seran las fuentes de ingresos?"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end"><Icon className="text-30" color="action">
                                    help_outline
						           </Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Grid>


                <Grid item xs={6}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">local_atm</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Gastos fijos que necesitaras para que la empresa y productos funcionen
                            </InputLabel>
                            <OutlinedInput
                                id="gastos-fijos"
                                label="gastos fijos que necesitaras para que la empresa y productos funciones"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                                    help_outline
						</Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                </Grid>


            </Grid>
            <Box component="span" m={1}> </Box>
        </div>
    );
}

