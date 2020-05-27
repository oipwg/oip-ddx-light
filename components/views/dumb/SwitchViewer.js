import React from 'react';
import PropTypes from 'prop-types';
import knownTemplates from '../../../templates/knownTemplates';
import VideoViewer from './VideoViewer';
import PdfViewer from './PdfViewer';
import AudioPlayer from './AudioPlayer';
import ImageViewer from './ImageViewer';
import GenericRecordViewer from './GenericRecordViewer';

const SwitchViewer = ({ recordPayload }) => {
  const { record } = recordPayload;''


  if (!record) {
    return null; // return record viewer error/blank
  }

  console.log(recordPayload)

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
    return <VideoViewer recordPayload={recordPayload} />;
  } else if (isAudio) {
    return <AudioPlayer recordPayload={recordPayload} />;
  } else if (isImage) {
    return <ImageViewer recordPayload={recordPayload} />;
  } else if (isPdf) {
    return <PdfViewer recordPayload={recordPayload} />;
  } else {
    return <GenericRecordViewer recordPayload={recordPayload} />;
  }
};

SwitchViewer.propTypes = {
  recordPayload: PropTypes.shape({
    record: PropTypes.object,
    meta: PropTypes.object
  })
};

export default SwitchViewer;
