import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart'
import Deposits from './Deposits'
import Trainers from './trainers/Trainers'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx';
import Dashboard from '../../dashboard/Dashboard';
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
}))

export default function DashbaordContent() {
    const classes = useStyles()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <Dashboard>
        <div>
            <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper} >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Trainers />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        </div>
        </Dashboard>
    )
}
