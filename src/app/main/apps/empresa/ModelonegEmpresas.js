import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    paddingtop: {
        padding: '16px 0 7px'
    }
}));

export default function GoesEmpresas() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
           <FormControl fullWidth className={classes.paddingtop}>
                <InputLabel htmlFor="Productos-Servicio"
                > <Icon className="text-30" color="action">sentiment_dissatisfied</Icon>
                Que problema esta solucionando el Productos/Servicios que ofrece tu empresa</InputLabel>
                <Input
                    id="Productos-Servicio"
                    className="mt-8 mb-16"
                    multiline
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help_outline
						</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.paddingtop}>
                <InputLabel htmlFor="segmentos-cliente"
                > <Icon className="text-30" color="action">wc</Icon> Describe los segmentos de clientes que accederan a tus
               Productos/Servicios</InputLabel>
                <Input
                    id="segmentos-cliente"
                    className="mt-8 mb-16"
                    multiline
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help_outline
						</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.paddingtop}>
                <InputLabel htmlFor="propuesta-propuesta"
                > <Icon className="text-30" color="action">favorite</Icon>
                Piensa y describe la propuesta de valor que entrega a tu cliente</InputLabel>
                <Input
                    id="propuesta-propuesta"
                    className="mt-8 mb-16"
                    multiline
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help_outline
						</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.paddingtop}>
                <InputLabel htmlFor="canales-atencion"
                > <Icon className="text-60" color="action">chat</Icon> ¿Cuales son los canales de atencion que la empresa dispone para sus clientes?</InputLabel>
                <Input
                    id="canales-atencion"
                    className="mt-8 mb-16"
                    multiline
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help_outline
						</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.paddingtop}>
                <InputLabel htmlFor="fuentes-ingresos"
                > <Icon className="text-60" color="action">monetization_on</Icon>¿Cuales seran las fuentes de ingresos?</InputLabel>
                <Input
                    id="fuentes-ingresos"
                    className="mt-8 mb-16"
                    multiline
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help_outline
						</Icon></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth className={classes.paddingtop}>
                <InputLabel htmlFor="gastos-fijos"
                > <Icon className="text-60" color="action">local_atm</Icon> ¿Cuales seran los gastos fijos que necesitaras para que la empresa y productos funciones?</InputLabel>
                <Input
                    id="gastos-fijos"
                    className="mt-8 mb-16"
                    multiline
                    rows={3}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                    endAdornment={<InputAdornment position="end">  <Icon className="text-30" color="action">
                        help_outline
						</Icon></InputAdornment>}
                />
            </FormControl> 
        </form>
    );
}