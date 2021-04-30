import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const ArticleBody = ({
  articleText,
  className,
  style
}) => {
  const c = styles()
  return <div className={clsx(c.root, className)} style={style}>
    {articleText}
  </div>
}

ArticleBody.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

ArticleBody.defaultProps = {

}

export default ArticleBody
