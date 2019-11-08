import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating'
import './Trainer.css'
import { makeRedirect } from '../../../helpers/routerHelpers'

const tags = ['fitness', 'zumba', 'yoga', 'crossfit', 'injury', 'boxing']
export default function Trainer(props) {
    const {trainer, cb} = props
    const name = `${trainer.first_name} ${trainer.last_name}`
    const certificationAmount = trainer.certifications.length
    let fitnessTags = tags.slice(0,4).map(tag =>{
      return <span> {tag} </span>
    })

  
    
    return (
            <TableRow key={trainer.id} style={{border: '1px solid black'}} className="trainer-container" onClick={() => makeRedirect(props.history, '/profile', trainer.id)}>
              <TableCell><img style={{width: '100%', height: 'auto', maxWidth: '60px', minWidth: '30px'}} src={""}></img></TableCell>  
              <TableCell><p>{name}</p></TableCell>
              <TableCell><p>{certificationAmount}</p></TableCell>
              <TableCell><Rating value={trainer.rating} readOnly={true}/></TableCell>
              <TableCell><p>{fitnessTags}</p></TableCell>
              <TableCell><p>TEST</p></TableCell>
              <TableCell align="right"><p>TEST</p></TableCell>
            </TableRow>
    )
}
