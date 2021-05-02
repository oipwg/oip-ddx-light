import React from 'react'

const RecordField = ({ classes, recordField, recordFieldData }) => {
  if (!recordFieldData) {
    return null
  }
  if (recordFieldData.raw) {
    recordFieldData = recordFieldData.raw
  }
  return (
    <div className={classes.recordFieldRow}>
      <span className={classes.recordField}>{recordField}:</span>
      <span> {recordFieldData}</span>
    </div>
  )
}

export default RecordField
