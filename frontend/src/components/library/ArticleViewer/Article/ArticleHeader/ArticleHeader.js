import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const ArticleHeader = ({
  bylineWritersTitle,
  bylineWriter,
  bylineWritersLocation,
  children,
  className,
  style
}) => {
  const c = styles()
  return <div className={clsx(c.root, className)} style={style}>
    {bylineWritersTitle}
    {bylineWriter}
    {bylineWritersLocation}
    {children}
  </div>
}

ArticleHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

ArticleHeader.defaultProps = {

}

export default ArticleHeader
