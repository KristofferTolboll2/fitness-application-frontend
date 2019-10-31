import React from 'react'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done';
import FitnessCenter from '@material-ui/icons/FitnessCenter'
import Tooltip from '@material-ui/core/Tooltip';
import CardActionArea from '@material-ui/core/CardActionArea'
import ExposurePlus1 from '@material-ui/icons/ExposurePlus1'
export const generateCertifications = (certification, cb) =>{
    console.log(certification)
    console.log('in generator')
    switch(true){
        case (certification.score >= 599):
            certification =   
                <div key={certification.name} key={certification.name} onClick={() => cb(certification.id)}>
                    <Tooltip title="Verified And Popular Certification" placement="right">
                    <Chip   
                    icon={<FitnessCenter />}
                    label={certification.name}
                    style={{backgroundColor: '#4BB543', color: 'white'}}
                    onDelete={() =>{}}
                    deleteIcon={<DoneIcon />}
                        />
                    </Tooltip>
                    </div>
                   
                    break;
        case (certification.score >= 499):
            console.log('500!')
                certification = 
                <Tooltip title="Verified Certification" placement="right" onClick={() => cb(certification.id)}>
                <div key={certification.name}>
                    <Chip 
                    label={certification.name}
                    color="primary"
                    style={{color: 'white'}}
                    onDelete={() => {}}
                    deleteIcon={<DoneIcon />}
                        />
                    </div>
                    </Tooltip>
                    break;
            
        case (certification.score >= 299):
                   certification = 
                   <Tooltip title="Accepted" placement="right" onClick={() => cb(certification.id)}>
                    <div key={certification.name}>
                        <Chip 
                        label={certification.name}
                        color="secondary"
                        style={{color: 'white'}}
                        onDelete={() => alert("Verified certification")}
                        deleteIcon={<DoneIcon />}
                            />
                        </div>
                        </Tooltip>
                        break;
                    
                
        default: 
            certification = 
                <div key={certification.name}>
                <Chip 
                color="#ff0000"
                label={certification.name}
                    />
                </div>  
            break;
           
        }
        return certification
    }
