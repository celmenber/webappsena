import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
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
    width: '75ch',
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
        <Grid item xs={5}>
          <div className="flex">
            <div className="min-w-44 pt-20">
              <Icon color="action">assignment_turned_in</Icon>
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Tipo Documento</InputLabel>
              <Select
                className="mt-8 mb-24"
                native
                label="Tipo Documento*"
                inputProps={{
                  name: 'tipodoc',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={'C.C'}>C.C</option>
                <option value={'T.I'}>T.I</option>
                <option value={'R.C'}>R.C</option>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="flex">
            <div className="min-w-44 pt-20">
              <Icon color="action">blur_circular</Icon>
            </div>
            <TextField
              className="mb-24"
              label="Numero Documento*"
              id="nickname"
              name="nickname"
              variant="outlined"
              fullWidth
            />
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="flex">
            <div className="min-w-44 pt-20">
              <Icon color="action">person</Icon>
            </div>
            <TextField
              className="mb-24"
              label="Nombres*"
              autoFocus
              id="Nombres"
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
              <Icon color="action">person_add</Icon>
            </div>
            <TextField
              className="mb-24"
              label="Apellidos*"
              id="Apellidos"
              name="lastName"
              variant="outlined"
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
        <Grid item xs={10}>
            <FormControl fullWidth className={classes.margin}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Icon className="text-60">people_outline</Icon>}>
                Agregar Integrantes GAES
           </Button>
            </FormControl>
        </Grid>
      </Grid>
      <Typography color="textSecondary" variant="body2">
        <Box component="span" m={5}> </Box>
      </Typography>
    </div>
  );
}