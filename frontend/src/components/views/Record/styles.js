import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => ({
	root: {
		height: '100%',
		width: '100%'
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
		overflowX: 'hidden',
		flex: 1
	},
	recordViewer: {
		display: 'flex',
		flex: '1 0 700px',
		flexDirection: 'column',
		maxHeight: 850
		// height: 1000
	},
	recordsByPublisher: {
		display: 'flex',
		flex: 1,
		minHeight: '50%',
		flexDirection: 'column',
		'& h3': {
			paddingLeft: 30,
			color: theme.palette.greyscale(0.8)
		}
	}
}))
