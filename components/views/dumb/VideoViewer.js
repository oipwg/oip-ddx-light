import React, { useRef, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import videojs from 'video.js'



const styles = theme => ({
  root: {
    display: 'flex',
    flex: 1,
    '& > .video-js': {
      height: '100%',
      width: '100%'
    }
  }
})

const getIpfsUrl = ({ dir, file }) => {

}

const VideoViewer = ({
  classes,
  recordPayload
}) => {
  let videoExtension = 'mp4'

  // init video js
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto'
    })
    const player = playerRef.current

    player.on('ready', () => {
      console.log('player is ready')
      player.addClass(classes.videojss);
    })

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
      }
    }
  }, [])

  return <div className={classes.root}>
    <video ref={videoRef} className={'video-js vjs-oip vjs-big-play-centered'}>
      <source src={'#'} type={`video/${videoExtension}`} />
    </video>

  </div>
}

VideoViewer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoViewer)
