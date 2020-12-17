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

function createData(tipo, name, dir, tel) {
    return { tipo, name, dir, tel };
}

const rows = [
    createData('Frozen yoghurt', 'Eclair','clle 11', '300045445'),
    createData('Ice cream sandwich', 'Cupcake', 'clle 11', '300045445'),
    createData('Eclair', 'Gingerbread', 'clle 11', '300045445'),
];
export default function SimpleTable() {
    const classes = useStyles();
    //style={{ width:'63%'}}
    return (
        <TableContainer component={Paper} style={{ width: '63%' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Item</StyledTableCell>
                        <StyledTableCell>Tipo Proveedor </StyledTableCell>
                        <StyledTableCell align="center">Nombres Proveedor</StyledTableCell>
                        <StyledTableCell align="center">Dirección </StyledTableCell>
                        <StyledTableCell align="center">Telefono</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="left">{index + 1}</StyledTableCell>
                            <StyledTableCell component="th" scope="row"> {row.tipo} </StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center"> {row.dir} </StyledTableCell>
                            <StyledTableCell align="center">{row.tel}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}