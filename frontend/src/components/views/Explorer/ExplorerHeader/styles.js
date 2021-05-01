export default theme => ({
	root: {
		display: 'flex',
		flex: '0 0 70px',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	searchContainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: '9',
		justifyContent: 'flex-start',
		height: 30,
		alignItems: 'flex-end',
		marginLeft: 30
	},
	inputContainer: {
		display: 'flex',
		flex: 1,
		border: `1px solid ${theme.palette.primary.main}`,
		borderTopLeftRadius: 2,
		borderBottomLeftRadius: 2
	},
	textInput: {
		marginRight: 15,
		border: '0',
		height: 32,
		flex: 1,
		padding: [0, 20],
		boxSizing: 'border-box',
		outline: 'none'
	},
	submitInput: {
		backgroundColor: 'transparent',
		cursor: 'pointer',
		outline: 'none',
		height: 34,
		boxSizing: 'border-box',
		borderTop: `1px solid ${theme.palette.primary.main}`,
		borderRight: `1px solid ${theme.palette.primary.main}`,
		borderBottom: `1px solid ${theme.palette.primary.main}`,
		borderTopRightRadius: 2,
		borderBottomRightRadius: 2,
		borderLeft: 0,
		fontSize: 19,
		padding: [0, 23],
		'& > svg': {
			color: theme.palette.primary.main
		},
		display: 'flex',
		'&:hover': {
			color: theme.palette.secondary.main
		},
		'&:active': {
			color: theme.palette.primary.main
		}
	},
	selectOptionContainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: '3',
		marginBottom: 9,
		height: 30,
		justifyContent: 'center'
	},
	selectOption: {
		height: 34,
		marginLeft: 20,
		backgroundColor: 'transparent',
		borderColor: theme.palette.primary.main,
		borderRadius: 2
	}
})
