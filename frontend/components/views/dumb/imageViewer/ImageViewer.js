
import React, { useRef, useEffect }from 'react';
import withStyles from 'react-jss';
import getIpfsUrl from '../../../../helpers/getIpfsUrl';


const styles = (theme) => ({
    root: {
        width: '500px',

        '& .image': {
            maxWidth: '100%',
            maxHeight: '100%'
      }
    }
  });
  


const ImageViewer = ({recordPayload, classes })  => {
    const imageLocation = recordPayload.record.details.tmpl_1AC73C98.imageAddress;
    const imageSrc = getIpfsUrl({ dirName: imageLocation });
    const imageAlt = recordPayload.record.details.tmpl_20AD45E7.name;
    return (
        <div className={classes.root}>
            <img 
                className="image"
                src={imageSrc}
                alt={imageAlt} />
        </div>
      );
}

export default withStyles(styles)(ImageViewer);