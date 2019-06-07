import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import config from '../../../config'
import knownTemplates from '../../../templates/knownTemplates'

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
    justifyContent: 'space-between'
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
    '&:hover': {
      borderBottom: '1px solid'
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
      cursor: 'pointer',
      backgroundColor: 'black',
      color: 'white'
    }
  },
  searchLink: {
    display: 'inherit'
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
  }
})

const ActionBar = ({
  classes,
  verified,
  txid
}) => {
  let explorerLink
  if (config.testnet) {
    explorerLink = `https://testnet.flocha.in/tx/${txid}`
  } else explorerLink = `https://livenet.flocha.in/tx/${txid}`

  return <div className={classes.actionBarRoot}>
    <a
      className={classes.txidHeader}
      href={explorerLink}
      target='_blank'
    >
      {txid}
    </a>
    <LinkRow
      classes={classes}
      verified={verified}
      txid={txid}
    />
  </div>
}

const LinkRow = ({
  classes,
  verified,
  txid
}) => {
  const { twitter } = verified

  return <div className={classes.linkRowRoot}>
    {twitter && <button className={classes.twitterButton}>
      <a
        className={classes.twitterLink}
        href={`https://twitter.com/oip/status/${verified.twitterId}`}
        target='_blank'
      >
        <FaTwitter />
      </a>
    </button>}
    <Link prefetch passHref href={`/record?txid=${txid}`}>
      <button className={classes.actionIconButton}>
        <a className={classes.searchLink}><MdSearch /></a>
      </button>
    </Link>
  </div>
}

const RecordRow = ({
  classes,
  record,
  meta,
  isVerified
}) => {
  const { details } = record // tags, payment, permissions
  // eslint-disable-next-line camelcase
  const { signed_by } = meta

  const [verified, setVerified] = useState({ twitter: false, gab: false })

  useEffect(() => {
    let current = true
    async function verify (pubAddr) {
      let tmplName
      let localhost = false
      if (config.testnet) {
        tmplName = 'tmpl_2A46C905'
        localhost = true
      }
      const { success, payload } = await isVerified({ pubAddr, templateName: tmplName, localhost })
      if (success && current) {
        setVerified(payload)
      }
    }

    verify(signed_by)
    return () => {
      current = false
    }
  }, [])

  return <div
    className={classes.root}
  >
    <ActionBar
      classes={classes}
      verified={verified}
      recordDetails={details}
      txid={meta.txid}
    />
    <div className={classes.tableData}>
      {Object.keys(details).map(tmpl => {
        return <TemplateData
          classes={classes}
          tmpl={tmpl}
          details={details[tmpl]}
          key={tmpl}
        />
      })}
      {/* eslint-disable-next-line camelcase */}
      {signed_by && <>
        {/* eslint-disable-next-line camelcase */}
        <span className={classes.templateName}>signed_by:</span><span> {signed_by}</span>
      </>}
    </div>
  </div>
}

const TemplateData = ({
  classes,
  tmpl,
  details
}) => {
  let templateName

  if (knownTemplates[tmpl]) {
    templateName = knownTemplates[tmpl].friendly_name
  } else if (knownTemplates.testnet[tmpl]) {
    templateName = knownTemplates.testnet[tmpl].friendly_name
  } else {
    templateName = 'Unknown Template'
  }
  return <div className={classes.templateDataRow}>
    <span className={classes.templateName}>{templateName}:</span>
    <span> {tmpl}</span>
    {Object.keys(details).map(recordField => {
      return <RecordField
        classes={classes}
        key={recordField}
        recordField={recordField}
        recordFieldData={details[recordField]}
      />
    })}
  </div>
}

const RecordField = ({
  classes,
  recordField,
  recordFieldData
}) => {
  if (recordFieldData.raw) {
    recordFieldData = recordFieldData.raw
  }
  return <div className={classes.recordFieldRow}>
    <span className={classes.recordField}>{recordField}:</span>
    <span> {recordFieldData}</span>
  </div>
}

RecordRow.propTypes = {
  classes: PropTypes.object.isRequired,
  record: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default withStyles(styles)(RecordRow)
