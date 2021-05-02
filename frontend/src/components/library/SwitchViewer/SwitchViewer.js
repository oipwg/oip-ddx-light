import React from 'react'
import PropTypes from 'prop-types'
import templates from '../../../../templates'
import VideoViewer from '../VideoViewer/VideoViewer'
import PdfViewer from '../PdfViewer/PdfViewer'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import ImageViewer from '../ImageViewer/ImageViewer'
import GenericRecordViewer from '../GenericRecordViewer/GenericRecordViewer'

const SwitchViewer = ({ recordPayload, purchasedData }) => {
  const { record } = recordPayload

  let location = ''
  if (purchasedData.paid) {
    location = purchasedData.data.location
  }

  if (!record) {
    return null // return record viewer error/blank
  }

  const { details } = record
  let isVideo = false
  let isAudio = false
  let isImage = false
  let isPdf = false

  for (const tmpl of Object.keys(details)) {
    if (templates.video.includes(tmpl)) isVideo = true
    if (templates.audio.includes(tmpl)) isAudio = true
    if (templates.image.includes(tmpl)) isImage = true
    if (templates.pdf.includes(tmpl)) isPdf = true
  }
  if (isVideo) {
    return <VideoViewer recordPayload={recordPayload} src={location}/>
  } else if (isAudio) {
    return <AudioPlayer recordPayload={recordPayload} src={location}/>
  } else if (isImage) {
    return <ImageViewer recordPayload={recordPayload} src={location}/>
  } else if (isPdf) {
    return <PdfViewer recordPayload={recordPayload} src={location}/>
  } else {
    return <GenericRecordViewer recordPayload={recordPayload} src={location}/>
  }
}

SwitchViewer.propTypes = {
  recordPayload: PropTypes.shape({
    record: PropTypes.object,
    meta: PropTypes.object
  })
}

export default SwitchViewer
