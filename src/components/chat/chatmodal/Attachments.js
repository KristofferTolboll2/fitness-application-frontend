import React from 'react';
import {generateAttachmentComponents} from '../../../helpers/generateUI'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    container: {
        display: 'flex', 
        flexDirection: 'row',
        overflowX: 'scroll',
    },
    

}))

export default function Attachments(props) {
    const classes = useStyles()
    const {attachments, deleteAttachment} = props

    const attachmentComponents = attachments.map(attachment =>{
        return generateAttachmentComponents(attachment, deleteAttachment);
    })
    return (
        <div className={classes.container}>
        {attachmentComponents}
        </div>
    )
}
