import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import config from '../../../config.js';
import knownTemplates from '../../../templates/knownTemplates';
import getIpfsUrl from '../../../helpers/getIpfsUrl';

const styles = theme => ({
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
    float: 'left',
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
    transition:  'all .2s ease-in-out',
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
        content: `" "`,
        height: '0',
        width: '0',
        position: 'absolute',
        pointerEvents: 'none',
      },
      '&:after': {
        borderColor: 'rgba(213,213,213,0)',
        borderLeftColor: '#fff',
        borderWidth: '25px',
        marginTop: '-25px',
      },
      '&:before': {
        borderColor: 'rgba(0,0,0,0)',
        borderLeftColor: '#000',
        borderWidth: '31px',
        marginTop: '-31px',
      },
  }
})



// dialogBox: {
  //   width: '150px',
  //   height: '75px',
  //   backgroundColor: '#fff',
  //   color: '#000',
  //   padding: '20px',
  //   position: 'relative',
  //   margin: '40px',
  //   float: 'left',
  //   border: '2px solid black',
  //   borderRadius: '10%',
  //    '&:after': {
  //       content: `" "`,
  //       position: 'absolute',
  //       right: '-15px',
  //       top: '15px',
  //       borderTop: '15px solid transparent',
  //       borderRight: 'none',
  //       borderLeft: '15px solid black',
  //       borderBottom: '15px solid transparent',
  //    },


// .arrow_box {
// 	position: relative;
// 	background: #d5d5d5;
// 	border: 5px solid #000000;
// }
// .arrow_box:after, .arrow_box:before {
// 	left: 100%;
// 	top: 50%;
// 	border: solid transparent;
// 	content: " ";
// 	height: 0;
// 	width: 0;
// 	position: absolute;
// 	pointer-events: none;
// }

// .arrow_box:after {
// 	border-color: rgba(213, 213, 213, 0);
// 	border-left-color: #d5d5d5;
// 	border-width: 25px;
// 	margin-top: -25px;
// }
// .arrow_box:before {
// 	border-color: rgba(0, 0, 0, 0);
// 	border-left-color: #000000;
// 	border-width: 32px;
// 	margin-top: -32px;
// }

const ActionBar = ({ classes, verified, txid }) => {
  let explorerLink;
  if (config.network === 'testnet') {
    explorerLink = `https://testnet.flocha.in/tx/${txid}`;
  } else explorerLink = `https://livenet.flocha.in/tx/${txid}`;

  return (
    <div className={classes.actionBarRoot}>
      <a className={classes.txidHeader} href={explorerLink} target='_blank'>
        <img
          src='https://testnet.flocha.in/img/icons/favicon.ico'
          alt={`transaction: #${txid}`}
        />
      </a>

      <LinkRow classes={classes} verified={verified} txid={txid} />
    </div>
  );
};



const ValidIcon = ({classes, confirms, onClick}) => {
  return ( 
    <div className={classes.validButton}>

        <div className={classes.triangleUp}></div>
        <div className={classes.confirmsUp}>{confirms}</div>
    </div>
  );
}
const InValidIcon = ({classes, confirms, onClick}) => {
  return ( 
    <div className={classes.validButton}>

        <div className={classes.triangleDown}></div>
        <div className={classes.confirmsDown}>{confirms}</div>
    </div>
  );
}

const DialogBox = ({ classes }) => {
  return (
    <div className={classes.dialogBox}>
      Coolbeans
    </div>
  )
}


const LinkRow = ({ classes, verified, txid }) => {
  const { twitter, gab } = verified;

  return (
    <div className={classes.linkRowRoot}>
      {gab && (
        <button className={classes.gabButton}>
          <a
            className={classes.gabLink}
            href={`https://gab.com/OpenIndexProtocol/posts/${verified.gabId}`}
            target='_blank'>
            <img src={'/static/assets/icons/gabSvg.svg'} alt={'gab'} />
          </a>
        </button>
      )}
      {twitter && (
        <button className={classes.twitterButton}>
          <a
            className={classes.twitterLink}
            href={`https://twitter.com/oip/status/${verified.twitterId}`}
            target='_blank'>
            <FaTwitter />
          </a>
        </button>
      )}
      <Link passHref href={`/record?txid=${txid}`}>
        <button className={classes.actionIconButton}>
          <a className={classes.searchLink}>
            <img src={'/static/assets/icons/expand.png'} alt={'expand'} />
          </a>
        </button>
      </Link>
    </div>
  );
};
const BASIC = 'tmpl_66089C48';
const VIDEO = 'tmpl_4769368E';
const PAYMENT = 'tmpl_3084380E';

const RecordRow = ({
  classes,
  record,
  meta,
  isVerified,
  showOnlyVerifiedPublishers = false
}) => {
  const { details } = record; // tags, payment, permissions
  // eslint-disable-next-line camelcase
  const { signed_by } = meta;

  const [verified, setVerified] = useState({ twitter: false, gab: false });

  useEffect(() => {
    let current = true;
    async function verify(pubAddr) {
      let tmplName;
      let localhost = false;
      if (config.network === 'testnet') {
        tmplName = 'tmpl_2A46C905'; // verified pub testnet template
        localhost = true;
      }
      const { success, payload } = await isVerified({
        pubAddr,
        templateName: tmplName,
        localhost
      });
      if (success && current) {
        setVerified(payload);
      }
    }

    verify(signed_by);
    return () => {
      current = false;
    };
  }, []);

  // order template data to start with basic and end with payments
  let tmpDetails = [BASIC, VIDEO, ...Object.keys(details), PAYMENT];
  let orderedDetails = [];
  for (let tmpl of tmpDetails) {
    if (!orderedDetails.includes(tmpl)) {
      orderedDetails.push(tmpl);
    }
  }

  // get VIDEO and thumbnail
  let thumbnail;
  let ipfsUrl;
  if (Object.keys(details).includes(VIDEO)) {
    if (details[VIDEO].thumbnailFilename && details[VIDEO].addressDirectory) {
      ipfsUrl = getIpfsUrl({
        dirName: details[VIDEO].addressDirectory,
        filename: details[VIDEO].thumbnailFilename
      });
      thumbnail = true;
    }
  }

  if (showOnlyVerifiedPublishers) {
    if (verified.gab || verified.twitter) {
      return (
        <RecordRowData
          classes={classes}
          meta={meta}
          thumbnail={thumbnail}
          ipfsUrl={ipfsUrl}
          orderedDetails={orderedDetails}
          details={details}
          // eslint-disable-next-line camelcase
          signed_by={signed_by}
          verified={verified}
        />
      );
    } else return null;
  }
  return (
    <RecordRowData
      classes={classes}
      meta={meta}
      thumbnail={thumbnail}
      ipfsUrl={ipfsUrl}
      orderedDetails={orderedDetails}
      details={details}
      // eslint-disable-next-line camelcase
      signed_by={signed_by}
      verified={verified}
    />
  );
};

const RecordRowData = ({
  classes,
  verified,
  details,
  meta,
  thumbnail,
  ipfsUrl,
  orderedDetails,
  // eslint-disable-next-line camelcase
  signed_by
}) => {
  return (
    <div className={classes.root}>
      <ActionBar
        classes={classes}
        verified={verified}
        recordDetails={details}
        txid={meta.txid}
      />
      <TableData
        classes={classes}
        thumbnail={thumbnail}
        ipfsUrl={ipfsUrl}
        orderedDetails={orderedDetails}
        details={details}
        // eslint-disable-next-line camelcase
        signed_by={signed_by}
        verified={verified}
      />
      {/* TODO  - EDDIE */}
       {/* <ValidIcon 
          classes={classes}
          confirms={4}
       />
       <InValidIcon 
          classes={classes}
          confirms={4}
       /> */}


       

    </div>
  );
};

const TableData = ({
  classes,
  thumbnail,
  ipfsUrl,
  orderedDetails,
  details,
  // eslint-disable-next-line camelcase
  signed_by,
  verified
}) => {
      console.log({classes, thumbnail,orderedDetails,details})

  return (
    <div className={classes.tableData}>
      {/* thumbnail here */}
      {thumbnail && <Thumbnail src={ipfsUrl} classes={classes} />}
      <div className={classes.templateData}>
        {orderedDetails.map(tmpl => {
          if (!details[tmpl]) return null;
          return (
            <TemplateData
              classes={classes}
              tmpl={tmpl}
              details={details[tmpl]}
              key={tmpl}
            />
          );
        })}
        {/* eslint-disable-next-line camelcase */}
        {signed_by && (
          <>
            {/* eslint-disable-next-line camelcase */}
            <span className={classes.templateName}>signed_by:</span>
            <span> {signed_by}</span>
          </>
        )}
        {verified.name && (
          <div style={{ marginTop: '7px' }}>
            {/* eslint-disable-next-line camelcase */}
            <span className={classes.templateName}>verified name:</span>
            <span> {verified.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Thumbnail = ({ src, classes }) => {
  return <img className={classes.thumbnail} src={src} alt={'thumbnail'} />;
};

const TemplateData = ({ classes, tmpl, details }) => {
  let templateName;

  if (knownTemplates[tmpl]) {
    templateName = knownTemplates[tmpl].friendly_name;
  } else if (knownTemplates.testnet[tmpl]) {
    templateName = knownTemplates.testnet[tmpl].friendly_name;
  } else {
    templateName = 'Unknown Template';
  }
  if (tmpl === BASIC) {
    details = {
      title: details.title,
      description: details.description,
      year: details.year
    };
  }
  if (tmpl === VIDEO) {
    details = {
      displayName: details.displayName,
      addressDirectory: details.addressDirectory,
      filename: details.filename,
      thumbnailFilename: details.thumbnailFilename,
      publishDate: details.publishDate
    };
  }
  if (tmpl === PAYMENT) {
    details = {
      platformCut: details.platformCut,
      influencerCut: details.influencerCut,
      ...details
    };
  }
  // console.log('details', details)
  return (
    <div className={classes.templateDataRow}>
      <span className={classes.templateName}>{templateName}:</span>
      <span> {tmpl}</span>
      {Object.keys(details).map(recordField => {
        return (
          <RecordField
            classes={classes}
            key={recordField}
            recordField={recordField}
            recordFieldData={details[recordField]}
          />
        );
      })}
    </div>
  );
};

const RecordField = ({ classes, recordField, recordFieldData }) => {
  if (!recordFieldData) {
    return null;
  }
  if (recordFieldData.raw) {
    recordFieldData = recordFieldData.raw;
  }
  return (
    <div className={classes.recordFieldRow}>
      <span className={classes.recordField}>{recordField}:</span>
      <span> {recordFieldData}</span>
    </div>
  );
};

RecordRow.propTypes = {
  classes: PropTypes.object.isRequired,
  record: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

export default withStyles(styles)(RecordRow);
