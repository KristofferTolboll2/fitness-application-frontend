import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Trainer(props) {
    const {row} = props;
    console.log(props.row.image)
    return (
            <TableRow key={row.id} style={{border: '1px solid black'}}>
              <TableCell><img style={{width: '80%', height: 'auto', maxWidth: '100px'}} src={row.image}></img></TableCell>  
              <TableCell><p>{row.date}</p></TableCell>
              <TableCell><p>{row.name}</p></TableCell>
              <TableCell><p>{row.shipTo}</p></TableCell>
              <TableCell><p>{row.paymentMethod}</p></TableCell>
              <TableCell align="right"><p>{row.amount}</p></TableCell>
            </TableRow>
    )
}
