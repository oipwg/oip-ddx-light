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
  }
});

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
      <Link prefetch passHref href={`/record?txid=${txid}`}>
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
