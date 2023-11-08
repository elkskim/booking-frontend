import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import APIService from '../services/api-service'
import TestService from '../services/test-service';

/*
const rows = [
  createData( 1,'Frozen yoghurt', 23),
  createData(2, 'Ice cream sandwich',  90),
  createData(3, 'Eclair',  12),
  createData(4,'Cupcake', 3),
  createData(5, 'Gingerbread', 2),
];
*/

var rows = await fill_rows()


//TODO: Make fill_rows adhere to createData. alternatively,
// make sure API data adheres to same structure
async function fill_rows() {
  await TestService.createResources();
  var data = await APIService.getResources()
  data = data.sort()
  console.log("ooo check out data")
  console.log(data[0])
  console.log(data[1])
  console.log(data)

  return data
  
}

export default async function ResourceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id no.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}