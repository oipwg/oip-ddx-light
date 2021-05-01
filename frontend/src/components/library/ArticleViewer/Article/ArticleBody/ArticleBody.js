import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const ArticleBody = ({
  children,
  className,
  style
}) => {
  const c = styles()
  return <div className={clsx(c.body, className)} style={style}>
    {children}
  </div>
}

ArticleBody.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

ArticleBody.defaultProps = {

}

export default ArticleBody
