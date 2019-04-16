import React, { useState } from 'react'
import { RecordTemplate, useTheme, ThemeProvider } from 'oip-react-jss'
import withStyles from 'react-jss'

import SideBar from '../components/SideBar'
import PublishPage from '../components/PublishPage'
import Header from '../components/Header'

import RecordTemplateStyles from '../styles/jss/RecordTemplateStyles'

const publishTypes = [
  'recordTemplate'
]

const bp = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const StyledRecordTemplatePublisher = withStyles(RecordTemplateStyles)(RecordTemplate)

function RenderPublisher (publishType) {
  switch (publishType) {
    case 'recordTemplate':
      return <StyledRecordTemplatePublisher />
    default:
      throw new Error(`Publish type not defined: ${publishType}`)
  }
}

const Index = ({ classes }) => {
  const { theme } = useTheme()

  const [publishType, setPublishType] = useState(publishTypes[0])

  const handlePublishPageChange = (publishType) => {
    setPublishType(publishType)
  }

  return <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header
        publishTypes={publishTypes}
        handlePublishPageChange={handlePublishPageChange}
        breakpoints={bp}
      />
      <SideBar
        publishTypes={publishTypes}
        handlePublishPageChange={handlePublishPageChange}
      />
      <PublishPage>
        {RenderPublisher(publishType)}
      </PublishPage>
    </div>
  </ThemeProvider>
}

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    '& #header': {
      display: 'none'
    }
  },
  [`@media (max-width: ${bp['md']}px)`]: {
    root: {
      flexDirection: 'column',
      '& #sidebar': {
        display: 'none'
      },
      '& #header': {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto'
      }
    }
  }
}

export default withStyles(styles)(Index)
