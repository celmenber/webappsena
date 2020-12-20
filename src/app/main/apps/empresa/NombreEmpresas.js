import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
/* import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel'; */
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
   /*  formControl: {
        minWidth: 335,
        width: '75ch',
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    }, */
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
            
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">business</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Nombre Empresa*"
                            id="Nombre-Empresa"
                            name="Nombre-Empresa"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="flex">
                        <div className="min-w-44 pt-20">
                            <Icon color="action">blur_circular</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Número NIT*"
                            autoFocus
                            id="numero-NIT"
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>
                </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2">
            </Typography>
            <Divider variant="middle" />
        </div>
    );
}