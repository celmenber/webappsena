import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        width: '100%'
    },
});

function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('Frozen yoghurt', 'Eclair'),
    createData('Ice cream sandwich','Cupcake'),
    createData('Eclair', 'Gingerbread'),
    /* createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9), */
];
export default function SimpleTable() {
    const classes = useStyles();
//style={{ width:'63%'}}
    return (
        <TableContainer component={Paper} style={{ width: '100%' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Item</StyledTableCell>
                        <StyledTableCell>Actividad Economica</StyledTableCell>
                        <StyledTableCell align="center">Tipo de Producto</StyledTableCell>
                        <StyledTableCell align="center">Categotia Producto/Servicio </StyledTableCell>
                        <StyledTableCell align="center">Producto/Servicio</StyledTableCell>
                        <StyledTableCell align="right">Costo de Producción </StyledTableCell>
                        <StyledTableCell align="right">Valor Ventas</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                                
                                <StyledTableCell align="left">{index + 1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                
                            </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
    );
}