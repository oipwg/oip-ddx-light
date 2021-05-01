import React from 'react'
import PropTypes from 'prop-types'

import {
  ClipLoader,
  MoonLoader,
  BarLoader,
  BeatLoader,
  FadeLoader,
  PulseLoader,
  SyncLoader
} from 'react-spinners'

function ReactLoader (props) {
  let config = {
    type: 'ClipLoader',
    sizeUnit: 'px',
    size: 50,
    color: '#123abc',
    loading: true
  }
  config = { ...config, ...props }

  switch (config.type) {
    case 'MoonLoader':
      return <MoonLoader {...config} />
    case 'ClipLoader':
      return <ClipLoader {...config} />
    case 'BarLoader':
      return <BarLoader {...config} />
    case 'BeatLoader':
      return <BeatLoader {...config} />
    case 'FadeLoader':
      return <FadeLoader {...config} />
    case 'PulseLoader':
      return <PulseLoader {...config} />
    case 'SyncLoader':
      return <SyncLoader {...config} />
    default:
      return <MoonLoader {...config} />
  }
}

ReactLoader.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  loading: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  margin: PropTypes.number
}

export default ReactLoader
