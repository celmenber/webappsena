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
        <InputLabel htmlFor="tp-native-simple">Tipo de Documento</InputLabel>
        <Select
          native
          inputProps={{
            name: 'tpd',
            id: 'tp-native-simple',
          }}
        >
          <option value={0}>Elejir...</option>
          <option value={1}>C.C</option>
          <option value={2}>T.I</option>
          <option value={3}>R.C</option>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Número de Documento*</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start"> <Icon className="text-30" color="action">
              blur_circular
								</Icon>
          </InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Nombres*</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
            person
								</Icon></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Apellidos*</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
            person_add
								</Icon></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Telefono</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
            phone
								</Icon></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Correo Electronico</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">  <Icon className="text-30" color="action">
            email
								</Icon></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Icon className="text-60">people_outline</Icon>}>
          Agregar Integrantes GAES
      </Button>
      </FormControl>
    </form>
  );
}