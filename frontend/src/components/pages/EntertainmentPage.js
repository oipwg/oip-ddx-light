import React from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 40px',
    overflowX: 'auto'
  },
  BusinessPageWrapper: {
    borderRadius: '20px',
    boxShadow: '1px 1px 3px',
    marginBottom: '108px',
    padding: '2rem',
    textTransform: 'capitalize',
    '& label': {
      display: 'inline-block',
      width: '140px',
      textAlign: 'right',
      marginLeft: '10px'
    }
  }
})

const EntertainmentPage = ({ classes }) => {
 

  return <div className={classes.root}>
    <div className={classes.EntertainmentPageWrapper}>
      
    </div>
  </div>
}

function mapStateToProps (state) {
  return {
    
  }
}
const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EntertainmentPage))