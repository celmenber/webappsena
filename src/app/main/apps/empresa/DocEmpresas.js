import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(24)
    },
    formControlFile: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(-3),
    },
    File: {
        marginBottom: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
  /*   const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    }); */

   /*  const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }; */

   // const { gilad, jason, antoine } = state;
   // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              {/*   <FormLabel component="legend">Assign responsibility</FormLabel> */}
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox id="HCC" name="HCC" />}
                        label="Homonimia Camara de Comercio"
                    />
                    <FormControlLabel
                        control={<Checkbox id="AECIIU" name="aeCIIU" />}
                        label="Actividad Economica CIIU"
                    />
                    <FormControlLabel
                        control={<Checkbox id="AMC" name="AMC" />}
                        label="Acta o Minuta de Costitución"
                    />
                    <FormControlLabel
                        control={<Checkbox id="CDC" name="CDC" />}
                        label="Camara de Comercio"
                    />
                    <FormControlLabel
                        control={<Checkbox id="RUE" name="RUE"/>}
                        label="Registro Mercantil Matricula RUE"
                    />
                    <FormControlLabel
                        control={<Checkbox id="SDR" name="SDR" />}
                        label="Solicitud de Resolución"
                    />
                </FormGroup>
            </FormControl>

            <FormControl component="fieldset" className={classes.formControlFile}>
                <FormGroup className={classes.File}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}>
                            Cargar Archivo
                    </Button>
                    </label>
                </FormGroup>
                <FormGroup className={classes.File}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}>
                            Cargar Archivo
                    </Button>
                    </label>
                </FormGroup>
                <FormGroup className={classes.File}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}>
                            Cargar Archivo
                    </Button>
                    </label>
                </FormGroup>
                <FormGroup className={classes.File}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}>
                            Cargar Archivo
                    </Button>
                    </label>
                </FormGroup>
                <FormGroup className={classes.File}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}>
                            Cargar Archivo
                    </Button>
                    </label>
                </FormGroup>
                <FormGroup className={classes.File}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}>
                            Cargar Archivo
                    </Button>
                    </label>
                </FormGroup>
            </FormControl>
        </div>
    );
}

/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
/* import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'; *
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
                  {/*   <div className="flex">
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
                    </div> *}
                    </Grid>
                  </Grid>
      <Typography color="textSecondary" variant="body2">
      </Typography>
      <Divider variant="middle" />
    </div >
    );
}*/