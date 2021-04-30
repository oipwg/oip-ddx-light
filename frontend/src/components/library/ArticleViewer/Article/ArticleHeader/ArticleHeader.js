import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const ArticleHeader = ({
  title,
  subtitle,
  children,
  className,
  style
}) => {
  const c = styles()
  return <div className={clsx(c.root, className)} style={style}>
    <div className={c.title}>{title}</div>
    <div className={c.subtitle}>{subtitle}</div>
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
