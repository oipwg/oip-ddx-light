import React, { useState } from 'react'
import { RecordTemplate, useTheme, ThemeProvider } from 'oip-react-jss'
import withStyles from 'react-jss'

import { SideBar, Header, Explorer, PublishPage, Wallet } from '../components'

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
const EXPLORER = 'EXPLORER'
const PUBLISH = 'PUBLISH'
const WALLET = 'WALLET'

const StyledRecordTemplatePublisher = withStyles(RecordTemplateStyles)(RecordTemplate)

const PublisherPage = (publishType) => {
  return <PublishPage>
    {RenderPublisher(publishType)}
  </PublishPage>
}
function RenderMainContent (activePage, publishType) {
  switch (activePage) {
    case EXPLORER:
      return <Explorer />
    case PUBLISH:
      return PublisherPage(publishType)
    case WALLET:
      return <Wallet />
    default:
      throw new Error(`Publish type not defined: ${publishType}`)
  }
}

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

  const [activePage, setActivePage] = useState(EXPLORER)
  const [publishType, setPublishType] = useState(publishTypes[0])

  const handlePublishTypeChange = (publishType) => {
    setPublishType(publishType)
  }

  const handleActivePageChange = (activePage) => {
    setActivePage(activePage)
  }

  return <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header
        breakpoints={bp}
        handleActivePageChange={handleActivePageChange}
      />
      <SideBar
        publishTypes={publishTypes}
        handlePublishTypeChange={handlePublishTypeChange}
        handleActivePageChange={handleActivePageChange}
      />
      {RenderMainContent(activePage, publishType)}
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
        display: 'flex'
      }
    }
  }
}

export default withStyles(styles)(Index)
