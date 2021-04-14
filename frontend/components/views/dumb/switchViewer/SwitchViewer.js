import React from 'react';
import PropTypes from 'prop-types';
import knownTemplates from '../../../../templates/knownTemplates';
import VideoViewer from '../videoViewer/VideoViewer';
import PdfViewer from '../pdfViewer/PdfViewer';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import ImageViewer from '../imageViewer/ImageViewer';
import GenericRecordViewer from '../genericRecordViewer/GenericRecordViewer';

const SwitchViewer = ({ recordPayload, purchasedData }) => {
  const { record } = recordPayload;''

  let location = ''
  if(purchasedData.paid){
    location = purchasedData.data.location
  }

  if (!record) {
    return null; // return record viewer error/blank
  }

  const { details } = record;
  let isVideo = false;
  let isAudio = false;
  let isImage = false;
  let isPdf = false;

  for (let tmpl of Object.keys(details)) {
    if (knownTemplates.video.includes(tmpl)) isVideo = true;
    if (knownTemplates.audio.includes(tmpl)) isAudio = true;
    if (knownTemplates.image.includes(tmpl)) isImage = true;
    if (knownTemplates.pdf.includes(tmpl)) isPdf = true;
  }
  if (isVideo) {
    return <VideoViewer recordPayload={recordPayload} src={location} />;
  } else if (isAudio) {
    return <AudioPlayer recordPayload={recordPayload} src={location} />;
  } else if (isImage) {
    return <ImageViewer recordPayload={recordPayload} src={location} />;
  } else if (isPdf) {
    return <PdfViewer recordPayload={recordPayload} src={location} />;
  } else {
    return <GenericRecordViewer recordPayload={recordPayload} src={location} />;
  }
};

SwitchViewer.propTypes = {
  recordPayload: PropTypes.shape({
    record: PropTypes.object,
    meta: PropTypes.object
  })
};

export default SwitchViewer;
