import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
//import Typography from '@material-ui/core/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(true);
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('xs');
    /*  const handleClickOpen = () => {
        setOpen(true);
    };  */

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
               {/*  <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
                <DialogContent>
                    <DialogContentText variant="div" id="alert-dialog-slide-description" className="MuiCardContent-root flex flex-col items-center">
                        <img className="w-256" src="assets/images/profile/alumnos-08.png" alt="logo" />
                        <h1 className="MuiCardContent-root flex flex-col items-center">¡Felicidades!</h1>
                        
                       {/*  <Typography variant="div" display="block" className="MuiCardContent-root flex flex-col items-center">
                            <img className="w-256" src="assets/images/profile/alumnos-08.png" alt="logo" />
                            <div>
                               ¡Felicidades!
                            </div>
                        </Typography> */}
                        <div>
                            Has crado tu empresa  ahora podras realizar operaciones contables y comerciales.
                            </div>
                        
          </DialogContentText>
     </DialogContent>
                <DialogActions className="MuiCardContent-root flex flex-col items-center justify-center text-center">
                    <Button onClick={handleClose} color="primary">
                        Iniciar OPeraciones
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};