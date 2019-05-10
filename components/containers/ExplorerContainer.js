import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Explorer from '../views/wrappers/Explorer'
import {
  getLatestOip5Records,
  getLatestOip5Templates,
  searchOip5Records,
  searchOip5Templates
} from '../../redux/actions/Explorer/thunks'

import {
  LATEST,
  SEARCH
} from '../../redux/actions/Explorer/creators'
import isObjEmpty from '../../util/isObjEmpty'

const ExplorerContainer = ({
  latestRecords,
  latestTemplates,
  getLatestOip5Records,
  getLatestOip5Templates,
  searchedRecords,
  searchedTemplates,
  mode,
  activeLatestRecordsPage,
  activeLatestTemplatesPage,
  activeSearchedRecordsPage,
  activeSearchedTemplatesPage,
  latestRecordsNextKeys,
  latestTemplatesNextKeys,
  searchedRecordsNextKeys,
  searchedTemplatesNextKeys
}) => {
  const [searchInput, setSearchInput] = useState('')
  const [selectOption, setSelectOption] = useState('Templates')
  const [displayTemplates, setDisplayTemplates] = useState(latestTemplates)
  const [displayRecords, setDisplayRecords] = useState(latestRecords)

  // ACTIVE LATEST TEMPLATE KEY
  const altKey = latestTemplatesNextKeys[activeLatestTemplatesPage]
  // ACTIVE LATEST RECORD KEY
  const alrKey = latestRecordsNextKeys[activeLatestRecordsPage]
  // ACTIVE SEARCHED RECORD KEY
  const asrKey = searchedRecordsNextKeys[activeSearchedRecordsPage]
  // ACTIVE SEARCHED TEMPLATE KEY
  const astKey = searchedTemplatesNextKeys[activeSearchedTemplatesPage]

  useEffect(() => {
    if (isObjEmpty(latestRecords)) {
      getLatestOip5Records()
    }
    if (isObjEmpty(latestTemplates)) {
      getLatestOip5Templates()
    }
  }, [])

  useEffect(() => {
    if (mode === LATEST) {
      setDisplayRecords(latestRecords[alrKey])
    }
    if (mode === SEARCH) {
      setDisplayRecords(searchedRecords[asrKey])
    }
  }, [latestRecords, searchedRecords, mode, activeLatestRecordsPage, activeSearchedRecordsPage])

  useEffect(() => {
    if (mode === LATEST) {
      setDisplayTemplates(latestTemplates[altKey])
    }
    if (mode === SEARCH) {
      setDisplayTemplates(searchedTemplates[astKey])
    }
  }, [latestTemplates, searchedTemplates, mode, activeLatestTemplatesPage, activeSearchedTemplatesPage])

  function handleSearchInput (e) {
    setSearchInput(e.target.value)
  }

  function handleSelectOption (e) {
    setSelectOption(e.target.value)
  }

  function handleSearchSubmit () {
    if (selectOption === 'Records') {
      searchOip5Records(searchInput)
    }
    if (selectOption === 'Templates') {
      searchOip5Templates(searchInput)
    }
  }

  return <Explorer
    displayRecords={displayRecords}
    displayTemplates={displayTemplates}
    searchInput={searchInput}
    selectOption={selectOption}
    handleSearchInput={handleSearchInput}
    handleSelectOption={handleSelectOption}
    handleSearchSubmit={handleSearchSubmit}
  />
}

function mapStateToProps (state) { // toDo: note:: separate templates and records
  return {
    latestRecords: state.Explorer.latestRecords,
    latestTemplates: state.Explorer.latestTemplates,
    searchedRecords: state.Explorer.searchInput,
    searchedTemplates: state.Explorer.searchedTemplates,
    mode: state.Explorer.mode,
    activeLatestRecordsPage: state.Explorer.activeLatestRecordsPage,
    activeLatestTemplatesPage: state.Explorer.activeLatestTemplatesPage,
    activeSearchedRecordsPage: state.Explorer.activeSearchedRecordsPage,
    activeSearchedTemplatesPages: state.Explorer.activeSearchedTemplatesPages,
    latestRecordsNextKeys: state.Explorer.latestRecordsNextKeys,
    latestTemplatesNextKeys: state.Explorer.latestTemplatesNextKeys,
    searchedRecordsNextKeys: state.Explorer.searchedRecordsNextKeys,
    searchedTemplatesNextKeys: state.Explorer.searchedTemplatesNextKeys
  }
}

const mapDispatchToProps = {
  getLatestOip5Records,
  getLatestOip5Templates,
  searchOip5Records,
  searchOip5Templates
}

ExplorerContainer.propTypes = {
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object,
  getLatestOip5Records: PropTypes.func.isRequired,
  getLatestOip5Templates: PropTypes.func.isRequired,
  searchOip5Records: PropTypes.func.isRequired,
  searchOip5Templates: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  activeLatestRecordsPage: PropTypes.number.isRequired,
  activeLatestTemplatesPage: PropTypes.number.isRequired,
  activeSearchedRecordsPage: PropTypes.number.isRequired,
  activeSearchedTemplatesPages: PropTypes.number.isRequired,
  latestRecordsNextKeys: PropTypes.array.isRequired,
  latestTemplatesNextKeys: PropTypes.array.isRequired,
  searchedRecordsNextKeys: PropTypes.array.isRequired,
  searchedTemplatesNextKeys: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerContainer)
