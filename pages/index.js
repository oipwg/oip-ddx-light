import React, { useState } from 'react'
import { RecordTemplate, ThemeProvider, useTheme } from 'oip-react-jss'
import withStyles from 'react-jss'

import { Explorer, Header, PublishPage, SideBar, Wallet } from '../components'

import RecordTemplateStyles from '../styles/jss/RecordTemplateStyles'

const recordTypes = [
  'record',
  'template',
  'profile',
  'influencer',
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

const PublisherPage = (recordType, handleRecordTypeChange) => {
  return <PublishPage
    activeRecordType={recordType}
    recordTypes={recordTypes}
    handleRecordTypeChange={handleRecordTypeChange}
  >
    {RenderPublisher(recordType)}
  </PublishPage>
}

function RenderMainContent ({ activePage, recordType, handleRecordTypeChange }) {
  switch (activePage) {
    case EXPLORER:
      return <Explorer
        activeRecordType={recordType}
        recordTypes={recordTypes}
        handleRecordTypeChange={handleRecordTypeChange}
      />
    case PUBLISH:
      return PublisherPage(recordType, handleRecordTypeChange)
    case WALLET:
      return <Wallet />
    default:
      throw new Error(`Publish type not defined: ${recordType}`)
  }
}

function RenderPublisher (recordType) {
  switch (recordType) {
    case 'template':
      return <StyledRecordTemplatePublisher />
    default:
      return <StyledRecordTemplatePublisher />
      throw new Error(`Record type not defined: ${recordType}`)
  }
}

const Index = ({ classes }) => {
  const { theme } = useTheme()

  const [activePage, setActivePage] = useState(EXPLORER)
  const [recordType, setRecordType] = useState(recordTypes[0])

  const handleRecordTypeChange = (recordType) => {
    setRecordType(recordType)
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
        recordTypes={recordTypes}
        handleRecordTypeChange={handleRecordTypeChange}
        handleActivePageChange={handleActivePageChange}
      />
      {RenderMainContent({
        activePage,
        recordType,
        handleRecordTypeChange
      })}
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
