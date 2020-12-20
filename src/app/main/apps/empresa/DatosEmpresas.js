
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        minWidth: 335,
        width: '100ch',
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">group</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Representante Legal</InputLabel>
                            <Select
                                className="mt-8 mb-24"
                                native
                                label="Representante Legal*"
                                inputProps={{
                                    name: 'tipodoc',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'representante1'}>representante1</option>
                                <option value={'T.I'}>representante2</option>
                                <option value={'R.C'}>representante3</option>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">location_searching</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Pais</InputLabel>
                            <Select
                                className="mt-8 mb-24"
                                native
                                label="Pais*"
                                inputProps={{
                                    name: 'tipodoc',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'C.C'}>pais uno</option>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">location_city</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Ciudad</InputLabel>
                            <Select
                                className="mt-8 mb-24"
                                native
                                label="Ciudad*"
                                inputProps={{
                                    name: 'tipodoc',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'C.C'}>Ciudad uno</option>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>

               <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">location_on</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Direccion de la Empresa*"
                            autoFocus
                            id="DireccionEmpresa"
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">phone</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Telefono*"
                            id="phone"
                            name="phone"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">email</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Correo Electronico*"
                            id="email"
                            name="email"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">language</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Sitio Web*"
                            id="SitioWeb"
                            name="lastName"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </Grid>
            </Grid> 

            {/* <Typography color="textSecondary" variant="body2">

            </Typography>
            <Divider variant="middle" /> */}
        </div>
    );
}