import React from 'react'

const Thumbnail = ({ src, classes }) => {
  return <img className={classes.thumbnail} src={src} alt={'thumbnail'}/>
}

export default Thumbnail
