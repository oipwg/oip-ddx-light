import React, { useRef, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import videojs from 'video.js'
import getIpfsUrl from '../../../helpers/getIpfsUrl'

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

const stripFileExtension = (filename) => {
  let split = filename.split('.')
  return split[split.length - 1]
}

const MAINNET_VIDEO_TEMPLATE = 'tmpl_4769368E'
const TESTNET_VIDEO_TEMPLATE = 'tmpl_5679C4E4'

const VideoViewer = ({
  classes,
  recordPayload
}) => {
  const { record } = recordPayload
  const { details } = record

  let template
  if (details[MAINNET_VIDEO_TEMPLATE]) {
    template = details[MAINNET_VIDEO_TEMPLATE]
  } else {
    template = details[TESTNET_VIDEO_TEMPLATE]
  }
  const { thumbnailFilename, addressDirectory, filename, displayName, publishDate } = template

  let videoExtension = stripFileExtension(filename)

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
    })

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
      }
    }
  }, [])

  return <div className={classes.root}>
    <video ref={videoRef} className={'video-js vjs-oip vjs-big-play-centered'}>
      <source src={getIpfsUrl({ dirName: addressDirectory, filename })} type={`video/${videoExtension}`} />
    </video>

  </div>
}

VideoViewer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoViewer)
