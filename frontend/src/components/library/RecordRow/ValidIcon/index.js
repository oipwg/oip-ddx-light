import React from 'react'

const ValidIcon = ({ classes, confirms, onClick }) => {
  return (
    <div className={classes.validButton}>

      <div className={classes.triangleUp}></div>
      <div className={classes.confirmsUp}>{confirms}</div>
    </div>
  )
}

export default ValidIcon
