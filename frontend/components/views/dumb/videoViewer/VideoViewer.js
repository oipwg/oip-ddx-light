import React, { useRef, useEffect } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import getIpfsUrl from '../../../../helpers/getIpfsUrl';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    '& > .video-js': {
      height: '100%',
      width: '100%'
    }
  }
});

const RenderPlayer = ({classes, videoSrc, videoExtension}) => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);


  useEffect(() => {
    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto'
    });
    const player = playerRef.current;

    player.on('ready', () => {
      console.log('player is ready');
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);
  

  return (
  <div className={classes.root}>
    <video
      ref={videoRef}
      className={'video-js vjs-oip vjs-big-play-centered'}
    >
      <source src={videoSrc} type={`video/${videoExtension}`} />
    </video>
  </div>
);
}

const stripFileExtension = (filename) => {
  let split = filename.split('.');
  return split[split.length - 1];
};

const MAINNET_VIDEO_TEMPLATE = 'tmpl_4769368E';
const TESTNET_VIDEO_TEMPLATE = 'tmpl_5679C4E4';

const VideoViewer = ({ classes, recordPayload, src }) => {
  const { record } = recordPayload;
  const { details } = record;



  let template;
  let addressDirectory, filename, thumbnail  = '';
  let videoExtension, thumbnailSrc, videoSrc


  if (details[MAINNET_VIDEO_TEMPLATE]) {
    template = details[MAINNET_VIDEO_TEMPLATE];
  } else {
    template = details[TESTNET_VIDEO_TEMPLATE];
  }



  if(template){
    addressDirectory = template.addressDirectory
    filename = template.filename
    thumbnail = template.thumbnailFilename;

  } else {
    for (const obj in details){
      Object.keys(details[obj]).map(key => {


        if(key === 'addressDirectory'){
          addressDirectory = details[obj][key]
        }
        if(key === 'filename'){
          filename = details[obj][key]
        }
        if(key === 'thumbnailFilename'){
          thumbnail = details[obj][key]
        }
      })
    }
  }
  
  if(thumbnail) {
    thumbnailSrc = getIpfsUrl({dirName: addressDirectory, filename: thumbnail})
  }



  if(filename){
    videoExtension = stripFileExtension(filename);
  } else videoExtension = stripFileExtension(src);


  // init video js
  // const videoRef = useRef(null);
  // const playerRef = useRef(null);
  
  if(src){
    videoSrc = getIpfsUrl({ dirName: src })
  } else {
    videoSrc = getIpfsUrl({ dirName: addressDirectory, filename });
  }


  if(src && videoSrc){
    return <RenderPlayer classes={classes} videoSrc={videoSrc} videoExtension={videoExtension} />
  } else return (
    <div className={classes.root}>
      <img src={thumbnailSrc} style={{width: "100%", height: '100%'}}/>
    </div>
  )

};

VideoViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoViewer);

