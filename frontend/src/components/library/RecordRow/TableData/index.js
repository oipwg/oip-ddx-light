import React from 'react'
import TemplateData from '../TemplateData'
import Thumbnail from '../Thumbnail'

const TableData = ({
  classes,
  thumbnail,
  ipfsUrl,
  orderedDetails,
  details,
  // eslint-disable-next-line camelcase
  signed_by,
  verified,
  purchasedData
}) => {
  return (
    <div className={classes.tableData}>
      {/* thumbnail here */}
      {thumbnail && <Thumbnail src={ipfsUrl} classes={classes}/>}
      <div className={classes.templateData}>
        {orderedDetails.map(tmpl => {
          if (!details[tmpl]) return null
          return (
            <TemplateData
              classes={classes}
              tmpl={tmpl}
              details={details[tmpl]}
              key={tmpl}
              purchasedData={purchasedData}
            />
          )
        })}
        {/* eslint-disable-next-line camelcase */}
        {signed_by && (
          <>
            {/* eslint-disable-next-line camelcase */}
            <span className={classes.templateName}>signed_by:</span>
            {/* eslint-disable-next-line camelcase */}
            <span>{signed_by}</span>
          </>
        )}
        {verified.name && (
          <div style={{ marginTop: '7px' }}>
            <span className={classes.templateName}>verified name:</span>
            <span> {verified.name}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default TableData
