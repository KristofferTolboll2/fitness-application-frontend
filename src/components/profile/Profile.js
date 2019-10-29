import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dashboard from '../../dashboard/Dashboard';
import Title from '../ui/Title';
import Button from '@material-ui/core/Button';
import ImageCarousel from './ImageCarousel';
import {generateCertifications} from '../../helpers/generateUI'
import Message from '@material-ui/icons/Message';
import Event from '@material-ui/icons/Event';
import Certification from '../ui/certifications/Certification';

const useStyles = makeStyles(theme =>({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      certifications: {
        display: 'inline-block',
        zoom: '1',
      }
}))


const certifications = [{name: 'best one', score: 1000}, {name: 'fitness-certification', score: 200}, {name: 'DAIA fitness 2012', score: 300}, {name:'Yoga Trainer certification', score: 500}, {name:'MSBA Personal Trainer Certificaton', score: 150}]

export default function Profile(props) {
    const classes = useStyles();
    useEffect(() =>{

    })


    const [isImageModalOpen, setImageOpenModal] = React.useState(false);
    const [isCertificationModalOpen, setCertificationOpenModal] = React.useState(false);

    const setCloseImageModalHandler = () =>{
      setImageOpenModal(false);
    }

    const setOpenImageModalHandler = () =>{
      setImageOpenModal(true);
    }

    const setCloseCertificationModalHandler = () =>{
      setCertificationOpenModal(false);
    }

    const setOpenCertificationModalHandler = () =>{
      console.log('in handler')
      setCertificationOpenModal(true);
    }

    const certificationComponents = certifications.map((certification,i) =>{
      return(
        generateCertifications(certification, setOpenCertificationModalHandler)
      )
    })
  
    return (
        <Dashboard {...props}>
        <div>
             <Container maxWidth="lg" className={classes.container}>
             <Paper className={classes.paper}>
             <Grid container spacing={4}>
                <Grid item xs={12} lg={6} style={{padding: '10px'}}>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          <Title size={'28px'}>Name </Title>
                        </Typography>
                        <Button endIcon={<Message></Message>}> Send Message</Button>
                        <span style={{padding: '5px'}}/>
                        <Button endIcon={<Event></Event>}>Book Appointment</Button>
                        <br/>
                        <Typography variant="subtitle1" color="grey">
                          <Title size={'20px'} color="secondary"> Occupation </Title>
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Mauris eu porttitor dolor. Nulla pellentesque imperdiet sodales. Morbi tincidunt mattis ex eu molestie. Suspendisse scelerisque est vel mi volutpat tincidunt. Nulla felis odio, suscipit accumsan mollis vel, semper eget dui. Etiam eget hendrerit neque, vitae ornare nisi. Duis tincidunt erat vel nulla iaculis, vel viverra orci varius. Duis risus velit, tempus bibendum justo eu, blandit pulvinar libero. Aliquam ornare dui ut risus finibus, sit amet laoreet purus ultricies.
                        </Typography>
                        <CardActionArea onClick={setOpenImageModalHandler}>
                        <CardMedia 
                        className={classes.media}
                        title="image picture"
                        image="https://www.ucd.ie/sportandfitness/t4media/Banner---PT-Course.jpg" /> 
                            </CardActionArea>
                      </CardContent>
                    </div>
                      <p>Hello</p>
                  </Card>
                {/* Modal components */}
                <Certification open={isCertificationModalOpen} setClose={setCloseCertificationModalHandler} />  
               <ImageCarousel open={isImageModalOpen} setClose={setCloseImageModalHandler} />
              {/* */}
              </Grid>
              <Grid item xs={12} lg={6} style={{padding: '10px'}}>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <div className={classes.certifications}>
                     {certificationComponents}
                     </div>
                      </CardContent>
                    </div>
                  </Card>
              </Grid>
             </Grid>
             </Paper>
             </Container>
        </div>
        </Dashboard>
    )
}
