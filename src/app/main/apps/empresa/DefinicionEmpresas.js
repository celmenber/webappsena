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
        minWidth: 250,
        width: '75ch',
    },
}));

export default function TipoEmpresa() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">filter_tilt_shift</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Misión de la empresa</InputLabel>
                            <OutlinedInput
                                id="Misionempresa"
                                label="Misión de la empresa"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                                    help
						</Icon></InputAdornment>}
                            />
                        </FormControl>
                    </div> 
                </Grid>
                <Grid item xs={4}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                        <Icon color="action">remove_red_eye</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Visión de la empresa</InputLabel>
                            <OutlinedInput
                                id="visionempresa"
                                label="Visión de la empresa"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                    </div> 
                </Grid>
                <Grid item xs={4}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                        <Icon color="action">recent_actors</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Valores que conforman la empresa</InputLabel>
                            <OutlinedInput
                                id="Valoresempresa"
                                label="Valores que conforman la empresa"
                                className={classes.paddingtop}
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                    </div> 
                </Grid>
            </Grid>
            <Box component="span" m={1}> </Box>
        </div >
    );
}