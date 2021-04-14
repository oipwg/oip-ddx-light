import React from 'react';
import withStyles from 'react-jss';
import getIpfsUrl from '../../../../helpers/getIpfsUrl';


const styles = (theme) => ({
    root: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  


const AudioPlayer = ({recordPayload, classes, src })  => {
    let audioLocation = ''

    if(src) {
      audioLocation = src;
    } else {
      audioLocation = recordPayload.record.details.tmpl_D8D0F22C.location;
    }


    const audioSrc = getIpfsUrl({ dirName: audioLocation });

    return (
        <div className={classes.root}>
            <audio
                style={{outline: 'none', width: '80%'}}
                controls
                src={audioSrc}>          
            </audio>
        </div>
      );
}

export default withStyles(styles)(AudioPlayer);
