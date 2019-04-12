import React, { useState } from 'react'
import { RecordTemplate, useTheme, ThemeProvider } from 'oip-react-jss'
import withStyles from 'react-jss'

import SideBar from '../components/SideBar'
import PublishPage from '../components/PublishPage'

import RecordTemplateStyles from '../styles/jss/RecordTemplateStyles'
const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
}

const publishTypes = [
  'recordTemplate'
]

const StyledRecordTemplatePublisher = withStyles(RecordTemplateStyles)(RecordTemplate)

function RenderPublisher (publishPage) {
  switch (publishPage) {
    case 'recordTemplate':
      return <StyledRecordTemplatePublisher />
    default:
      throw new Error(`Page not defined: ${publishPage}`)
  }
}
const Index = ({ classes }) => {
  const { theme } = useTheme()

  const [publishPage, setPublishPage] = useState(publishTypes[0])

  const handlePublishPageChange = (publishPage) => {
    setPublishPage(publishPage)
  }

  return <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <SideBar
        publishTypes={publishTypes}
        publishPage={publishPage}
        handlePublishPageChange={handlePublishPageChange}
      />
      <PublishPage>
        {RenderPublisher(publishPage)}
      </PublishPage>
    </div>
  </ThemeProvider>
}

export default withStyles(styles)(Index)
