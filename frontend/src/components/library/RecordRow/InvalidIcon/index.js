import React from 'react'

const InValidIcon = ({ classes, confirms, onClick }) => {
  return (
    <div className={classes.validButton}>

      <div className={classes.triangleDown}/>
      <div className={classes.confirmsDown}>{confirms}</div>
    </div>
  )
}

export default InValidIcon
