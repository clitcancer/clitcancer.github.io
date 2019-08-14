import Grid from '@material-ui/core/Grid'
import React from 'react'

export default (props => (
	<Grid container justify="center">
		<Grid item xs={11} sm={9} md={8} lg={8}>
			{props.children}
		</Grid>
	</Grid>
)) as React.FC
