import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Explorer from '../views/wrappers/Explorer'

import {
  LATEST,
  SEARCH
} from '../../redux/actions/Interface/creators'
import isObjEmpty from '../../util/isObjEmpty'

const ExplorerContainer = ({
  defaultRecords,
  defaultTemplates,
  searchedRecords,
  searchedTemplates,
  mode,
  defaultRecordsPage,
  defaultTemplatesPage,
  searchedRecordsPage,
  searchedTemplatesPages,
  latestRecordsKeys,
  latestTemplatesKeys,
  searchedRecordsKeys,
  searchedTemplatesKeys
}) => {
  const [searchInput, setSearchInput] = useState('')
  const [selectOption, setSelectOption] = useState('Templates')

  function handleSearchInput (e) {
    setSearchInput(e.target.value)
  }

  function handleSelectOption (e) {
    setSelectOption(e.target.value)
  }

  function handleSearchSubmit () {
    if (selectOption === 'Records') {
    }
    if (selectOption === 'Templates') {
    }
  }

  return <Explorer
    searchInput={searchInput}
    selectOption={selectOption}
    handleSearchInput={handleSearchInput}
    handleSelectOption={handleSelectOption}
    handleSearchSubmit={handleSearchSubmit}
  />
}

function mapStateToProps (state) { // toDo: note:: separate templates and records
  return {
    defaultRecords: state.Explorer.defaultRecords,
    defaultTemplates: state.Explorer.defaultTemplates,
    searchedRecords: state.Explorer.searchedRecords,
    searchedTemplates: state.Explorer.searchedTemplates,
    mode: state.Interface.mode,
    defaultRecordsPage: state.Interface.defaultRecordsPage,
    defaultTemplatesPage: state.Interface.defaultTemplatesPage,
    searchedRecordsPage: state.Interface.searchedRecordsPage,
    searchedTemplatesPages: state.Interface.searchedTemplatesPages,
    latestRecordsKeys: state.Explorer.latestRecordsKeys,
    latestTemplatesKeys: state.Explorer.latestTemplatesKeys,
    searchedRecordsKeys: state.Explorer.searchedRecordsKeys,
    searchedTemplatesKeys: state.Explorer.searchedTemplatesKeys,
  }
}

const mapDispatchToProps = {}

ExplorerContainer.propTypes = {
  defaultRecords: PropTypes.object,
  defaultTemplates: PropTypes.object,
  searchedRecords: PropTypes.object,
  searchedTemplates: PropTypes.object,
  mode: PropTypes.string.isRequired,
  defaultRecordsPage: PropTypes.number,
  defaultTemplatesPage: PropTypes.number,
  searchedRecordsPage: PropTypes.number,
  searchedTemplatesPages: PropTypes.number,
  latestRecordsKeys: PropTypes.array,
  latestTemplatesKeys: PropTypes.array,
  searchedRecordsKeys: PropTypes.array,
  searchedTemplatesKeys: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerContainer)
