import { Alert, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useState } from 'react';
import TableToolbar from '../../components/wishlistTools/TableToolbar';
import WishlistTableHead from '../../components/wishlistTools/WishlistTableHead';
import img from '../../public/static/headphone.png';

function createData(name, price, stockStatus) {
  return {
    name,
    price,
    stockStatus,
  };
}

const rowsData = [
  createData('Cupcake', 305, 'stock'),
  createData('Donut', 452, 'stock'),
  createData('Eclair', 262, 'out of stock'),
  createData('Frozen yoghurt', 159, 'stock'),
  createData('Gingerbread', 356, 'stock'),
  createData('Honeycomb', 408, 'out of stock'),
  createData('Ice cream sandwich', 237, 'stock'),
  createData('Jelly Bean', 375, 'stock'),
  createData('KitKat', 518, 'out of stock'),
  createData('Lollipop', 392, 'stock'),
  createData('Marshmallow', 31, 'stock'),
  createData('Nougat', 360, 'out of stock'),
  createData('Oreo', 437, 'stock'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const Wishlist = () => {
  const [rows, setRows] = useState(rowsData);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('price');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n, i) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleDelete = (products) => {
    const rowsInfo = [...rows];

    const rowIndex = products.map((items, i) => {
      return rows.findIndex((ele) => ele.name == items);
    });

    rowIndex.map((item) => rowsInfo.splice(item, selected.length));

    setRows(rowsInfo);
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '90%', m: 'auto', my: '50px' }}>
      {rows.length > 0 ? (
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableToolbar
            handleDeleted={() => handleDelete(selected)}
            numSelected={selected.length}
          />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <WishlistTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                            onClick={(event) =>
                              handleClick(event, row.name, index)
                            }
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image width="30" height="30" src={img} alt="" />
                            <span style={{ marginLeft: '20px' }}>
                              {row.name}
                            </span>
                          </Box>
                        </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.stockStatus}</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined">Add to cart</Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Alert severity="warning">Your Wishlist in Empty</Alert>
      )}
    </Box>
  );
};

export default Wishlist;
