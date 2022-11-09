import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dateTime } from '../../utils/helper';



const OrderDataTable = ({ data }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, width: "100%" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                #{row.id}
                            </TableCell>
                            <TableCell>{dateTime(row.attributes.createdAt, 2)}</TableCell>
                            <TableCell>{row.attributes.status}</TableCell>
                            <TableCell>{row.attributes.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default OrderDataTable;