/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../ui/Title';
import Trainer from './Trainer'
import { useFetch } from '../../../hooks/useFetch';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, image) {
  return { id, date, name, shipTo, paymentMethod, amount, image };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Trainers(props) {
  
  const classes = useStyles();
  console.log(props)
  const [data, loading] = useFetch('http://localhost:5000/api/trainer/all')
  if(loading){
    return <p>Loading...</p>
  }
  const {trainers} = data.message



  return (
    <React.Fragment>
      <Title>Suggested Trainers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Certifications</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Fitness Tags</TableCell>
            <TableCell>TEST</TableCell>
            <TableCell align="right">TEST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainers.map((trainer, i) => (
            <Trainer 
            trainer={trainer} 
            key={`item number ${i+1}`}
            history={props.history}
            />
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}