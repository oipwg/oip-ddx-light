import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Explorer from '../views/wrappers/Explorer'
import {
  getLatestOip5Records,
  getLatestOip5Templates,
  getOip5Record,
  getOip5Template
} from '../../redux/actions/Explorer/thunks'

const ExplorerContainer = ({
  latestRecords,
  latestTemplates,
  getLatestOip5Records,
  getLatestOip5Templates,
  currentRecord,
  currentTemplate
}) => {
  const [searchInput, setSearchInput] = useState('')
  const [selectOption, setSelectOption] = useState('Templates')

  useEffect(() => {
    if (!latestRecords) {
      getLatestOip5Records()
    }
    if (!latestTemplates) {
      getLatestOip5Templates()
    }
  }, [])

  function handleSearchInput (e) {
    setSearchInput(e.target.value)
  }

  function handleSelectOption (e) {
    setSelectOption(e.target.value)
  }

  function handleSearchSubmit () {
    if (selectOption === 'Records') {
      getOip5Record(searchInput)
    }
    if (selectOption === 'Templates') {
      getOip5Template(searchInput)
    }
  }

  return <Explorer
    latestRecords={latestRecords}
    latestTemplates={latestTemplates}
    searchInput={searchInput}
    selectOption={selectOption}
    handleSearchInput={handleSearchInput}
    handleSelectOption={handleSelectOption}
    handleSearchSubmit={handleSearchSubmit}
    currentRecord={currentRecord}
    currentTemplate={currentTemplate}
  />
}

function mapStateToProps (state) { // toDo: note:: separate templates and records
  if (!state.Explorer.latestRecords && !state.Explorer.latestTemplates) {
    return {
      currentRecord: state.Explorer.currentRecord,
      currentTemplate: state.Explorer.currentTemplate
    }
  } else {
    return {
      latestRecords: state.Explorer.latestRecords,
      latestTemplates: state.Explorer.latestTemplates,
      currentRecord: state.Explorer.currentRecord,
      currentTemplate: state.Explorer.currentTemplate
    }
  }
}

const mapDispatchToProps = {
  getLatestOip5Records,
  getLatestOip5Templates,
  getOip5Record,
  getOip5Template
}

ExplorerContainer.propTypes = {
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object,
  getLatestOip5Records: PropTypes.func.isRequired,
  getLatestOip5Templates: PropTypes.func.isRequired,
  currentTemplate: PropTypes.object,
  currentRecord: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerContainer)
