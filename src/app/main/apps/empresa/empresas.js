import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
//import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import GoesEmpresa from './GoesEmpresas';
import TipoEmpresa from './TipoEmpresas';
import NombreEmpresa from './NombreEmpresas';
import DatosEmpresa from './DatosEmpresas';
import DefinicionEmpresa from './DefinicionEmpresas';
import ModelonegEmpresa from './ModelonegEmpresas';
import LogoEmpresa from './LogoEmpresas';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginRight: '25%',
        marginLeft: '25%',
    },
    instructionsform: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginRight: '5%',
        marginLeft: '5%',
    },
    floatright: {
        float: 'right'
    },
    floatleft: {
        float: 'left'
    },
    imgencentrar: {
        justifycontent: 'center'
    }
}));

function getSteps() {
    return [
        'Crear GAES',
        '¿ Que Tipo de Empesa quieres ?',
        '¿ Como se llamará la Empresa ?',
        '¿ Cuales son los dato de contacto de la Empresa ?',
        '¿ Es necesario definir quien es la Empresa y hacia donde va ?',
        '¿ Ahora vamos a crear el modelo de negocio de la Empresa ?',
        '¿ solo falta el logotipo de la Empresa ?',
    ];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <GoesEmpresa />
        case 1:
            return <TipoEmpresa />
        case 2:
            return <NombreEmpresa />
        case 3:
            return <DatosEmpresa />
        case 4:
            return <DefinicionEmpresa />
        case 5:
            return <ModelonegEmpresa />
        case 6:
            return <LogoEmpresa />
        default:
            return 'Unknown stepIndex';
    }
}

function getStepTexto(stepIndex) {
    switch (stepIndex) {
        case 0:
            return '¿ Ingresa los datos de cada Estudiante ?';
        case 1:
            return '¿ Que Tipo de Empesa quieres ?';
        case 2:
            return '¿ Como se llamará la Empresa ?';
        case 3:
            return '¿ Cuales son los dato de contacto de la Tonly S.A.S ?';
        case 4:
            return '¿ Es necesario definir quien es Tonly S.A.S y hacia donde va ?';
        case 5:
            return '¿ Ahora vamos a crear el modelo de negocio de Tonly S.A.S ?';
        case 6:
            return '¿ solo falta el logotipo de Tonly S.A.S ?';
        default:
            return 'Unknown stepIndex';
    }
}


function getStepTitulo(stepIndex) {
    switch (stepIndex) {
        case 0:
            return '¡Vamos a Crear Grupos de aprendizaje de  Estudiantes GAES!';
        case 1:
            return '¡Vamos a Crear tu Empresa!';
        case 2:
            return '¡Estamos creando tu Empresa!';
        case 3:
            return '¡Estamos creando tu Empresa!';
        case 4:
            return '¡Estamos creando tu Empresa!';
        case 5:
            return 'estas apunto de terminar de crear la Empresa!';
        case 6:
            return 'ya casi terminas de crear tu Empresa!';
        default:
            return 'Unknown stepIndex';
    }
}

function getStepImg(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'alumnos-01';
        case 1:
            return 'alumnos-02';
        case 2:
            return 'alumnos-03';
        case 3:
            return 'alumnos-04';
        case 4:
            return 'alumnos-05';
        case 5:
            return 'alumnos-06';
        case 6:
            return 'alumnos-07';
        default:
            return 'alumnos-08';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

   /*   const handleReset = () => {
        setActiveStep(0);
    }; 
 */
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="font-light items-center justify-center text-center">
                <Typography color="inherit" className="text-24 sm:text-40 font-light" style={{ paddingBottom: '0' }}>
                    !BIENVENIDO¡
				</Typography>
            </div>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            <Typography variant="overline" display="block" className="MuiCardContent-root flex flex-col items-center justify-center p-32 text-center">
                                Felicidades tu empresa ya esta creada
                         </Typography>
                         <Typography variant="overline" display="block" className="MuiCardContent-root flex flex-col items-center justify-center p-32 text-center">
                                    <img className="w-256" src="assets/images/profile/alumnos-08.png" alt="logo" />
                                    </Typography>
                        </Typography>
                        <Typography variant="overline" display="block" className="items-center justify-center p-32 text-center">
                        <Fab
                            onClick={handleBack}
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            className={classes.margin}
                        > <Icon>arrow_left</Icon> Regresar
                     </Fab> </Typography>
                    </div>
                ) : (
                        <div>
                            <span className="opacity-75 items-center justify-center p-32 text-center">
                                <Typography className="text-18 sm:text-30 font-light">
                                    {getStepTitulo(activeStep)}
                                </Typography>
                            </span>
                            <div className={classes.instructions}>
                                <Fab
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    size="small"
                                    color="primary"
                                    aria-label="add"
                                    className={classes.floatleft}>
                                    <Icon>arrow_left</Icon>
                                </Fab>
                                <Fab
                                    onClick={handleNext}
                                    size="small"
                                    color="primary"
                                    aria-label="add"
                                    className={classes.floatright}
                                >
                                    {activeStep === steps.length - 1 ? <Icon>arrow_right</Icon> : <Icon>arrow_right</Icon>}
                                </Fab>
                            </div>
                            <Typography  className="flex flex-col items-center justify-center text-center">
                                <img className="w-224" src={`assets/images/profile/${getStepImg(activeStep)}.png`} alt="logo" />
                            </Typography>
                            
                            <span className="opacity-75">
                                <Typography className="items-center justify-center p-32 text-center">
                                    {getStepTexto(activeStep)}
                                </Typography>
                            </span>
                            <Typography className={classes.instructionsform}>
                                {getStepContent(activeStep)}
                            </Typography>

                          {/*   <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                > Back
                               </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div> */}
                        </div>
                    )}
            </div>
        </div>
    );
}
