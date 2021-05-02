import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    wordBreak: 'break-word',
    borderTop: `1px solid ${theme.palette.greyscale(0.3)}`,
    padding: 10,
    fontSize: 12,
    boxSizing: 'border-box'
  },
  tableData: {
    width: '100%'
  },
  thumbnail: {
    width: 300,
    float: 'right',
    paddingRight: 16,
    paddingBottom: 10,
    marginTop: 10
  },
  templateData: {},
  templateDataRow: {
    // width: 30
    margin: [7, 0]
  },
  templateName: {
    backgroundColor: theme.palette.primary.main,
    fontWeight: '600',
    color: 'white',
    padding: [3, 4]
  },
  recordField: {
    fontWeight: '600',
    color: theme.palette.greyscale(0.9),
    padding: [2, 4]
  },
  recordFieldRow: {
    margin: [7, 16]
  },
  actionBarRoot: {
    display: 'flex',
    flex: '0 0 30px',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  actionIcon: {
    cursor: 'pointer'
  },
  txidHeader: {
    fontSize: 12,
    color: theme.palette.primary.main,
    outline: 'none',
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.tertiary.main
    },
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  linkRowRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionIconButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: [3, 7],
    border: '1px solid',
    borderRadius: 3,
    marginLeft: 7,
    '&:hover': {
      cursor: 'pointer'
      // backgroundColor: 'black',
      // color: 'white'
    }
  },
  searchLink: {
    display: 'inherit',
    '& > img': {
      height: 13
    }
  },
  twitterButton: {
    extend: 'actionIconButton',
    borderColor: '#1DA1F2',
    '&:hover': {
      backgroundColor: '#1DA1F2',
      '& > $twitterLink': {
        color: 'white'
      }
    }
  },
  twitterLink: {
    display: 'flex',
    color: '#1DA1F2',
    borderColor: '#1DA1F2',
    backgroundColor: 'transparent'
  },
  gabButton: {
    extend: 'actionIconButton',
    borderColor: '#00D384',
    '&:hover': {
      // backgroundColor: '#1DA1F2',
      '& > $twitterLink': {
        // color: 'white'
      }
    }
  },
  gabLink: {
    display: 'flex',
    // color: '#1DA1F2',
    // borderColor: '#1DA1F2',
    backgroundColor: 'transparent',
    '& > img': {
      height: 14
    }
  },
  validButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    border: '.5em solid black',
    borderRadius: '10%',
    height: '2rem',
    width: '2rem',
    padding: '2px',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  triangleUp: {
    width: '0',
    height: '0',
    borderLeft: '1rem solid transparent',
    borderRight: '1rem solid transparent',
    borderBottom: '2rem solid rgb(13,112,16)'
  },
  triangleDown: {
    width: '0',
    height: '0',
    borderLeft: '1rem solid transparent',
    borderRight: '1rem solid transparent',
    borderTop: '2rem solid rgb(179,27,17)'
  },
  confirmsUp: {
    color: '#fff',
    fontSize: '1.25rem',
    position: 'relative',
    right: '72%',
    top: '25%'
  },
  confirmsDown: {
    color: '#fff',
    fontSize: '1.25rem',
    position: 'relative',
    right: '72%',
    top: '0%'
  },
  dialogBox: {
    position: 'relative',
    background: '#fff',
    border: '4px solid #000',
    height: '6rem',
    width: '8rem',
    padding: '2rem',
    borderRadius: '5%',
    '&:after,&:before': {
      left: '100%',
      top: '35%',
      border: 'solid transparent',
      content: '" "',
      height: '0',
      width: '0',
      position: 'absolute',
      pointerEvents: 'none'
    },
    '&:after': {
      borderColor: 'rgba(213,213,213,0)',
      borderLeftColor: '#fff',
      borderWidth: '25px',
      marginTop: '-25px'
    },
    '&:before': {
      borderColor: 'rgba(0,0,0,0)',
      borderLeftColor: '#000',
      borderWidth: '31px',
      marginTop: '-31px'
    }
  }
}))
