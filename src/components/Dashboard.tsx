import React from 'react'
import {Grid, makeStyles, Theme} from '@material-ui/core'
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

interface StyleProps {
	main: BaseCSSProperties,
	dashboardTitle: BaseCSSProperties,
	myAppsContainer: BaseCSSProperties,
	myAppsTitle: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleProps, string>


const useStyles = makeStyles<Theme, StyleProps>(theme => ({
	main: {
		backgroundColor: '#282c34',
		color: 'white',
		display: 'flex',
		// minHeight: '100vh',
		flexDirection: 'column',
		alignItems: 'start',
		fontSize: 'calc(10px + 2vmin)',
	},
	dashboardTitle: {
		marginTop: '1em',
		marginBottom: '1em',
		marginLeft: '7%',
		fontSize: 'calc(10px + 4vmin)',
		width: '100%'
	},
	myAppsTitle: {
		marginTop: '1em',
		marginLeft: '7%',
		fontSize: 'calc(10px + 2vmin)',
	},
	myAppsContainer: {
		width: '100%'
	}
}))

const Dashboard: React.FC = (): React.ReactElement => {

	const classes: PropsClasses = useStyles({} as StyleProps)

	return (
		<Grid container className={classes.main}>
			<Grid item className={classes.dashboardTitle}>
				Track Apps
			</Grid>
			{/*<Grid item className={classes.dashboardTitle}>*/}
			{/*	Dashboard*/}
			{/*</Grid>*/}
			{/*<Grid item className={classes.myAppsContainer}>*/}
			{/*	<Grid container >*/}
			{/*		<Grid item className={classes.myAppsTitle}>*/}
			{/*			My Applications*/}
			{/*		</Grid>*/}
			{/*	</Grid>*/}
			{/*</Grid>*/}
		</Grid>
	)
}

export default Dashboard
