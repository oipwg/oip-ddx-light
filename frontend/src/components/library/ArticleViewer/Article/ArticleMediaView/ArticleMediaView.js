import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const ArticleMediaView = ({
  body,
  caption,
  className,
  style
}) => {
  const c = styles()
  return <div className={clsx(c.root, className)} style={style}>
    <div className={c.body}>
      {body}
    </div>
    <span className={c.caption}>{caption}</span>
  </div>
}

ArticleMediaView.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

ArticleMediaView.defaultProps = {

}

export default ArticleMediaView
