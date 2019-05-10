import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Explorer from '../views/wrappers/Explorer'

import {
  DEFAULT,
  SEARCHED
} from '../../redux/actions/Interface/creators'

import isObjEmpty from '../../util/isObjEmpty'

const ExplorerContainer = ({
  defaultRecords,
  defaultTemplates,
  searchedRecords,
  searchedTemplates,
  mode,
  defaultRecordPage,
  defaultTemplatePage,
  searchedRecordPage,
  searchedTemplatePage,
  defaultRecordKeys,
  defaultTemplateKeys,
  searchedRecordKeys,
  searchedTemplateKeys
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

  let records, templates
  if (mode === DEFAULT) {
    records = defaultRecords
    const recordKey = defaultRecordKeys[defaultRecordPage]
    records = records[recordKey]

    templates = defaultTemplates
    const templateKey = defaultTemplateKeys[defaultTemplatePage]
    templates = templates[templateKey]
  } else if (mode === SEARCHED) {
    records = searchedRecords
    const recordKey = searchedRecordKeys[searchedRecordPage]
    records = records[recordKey]

    templates = searchedTemplates
    const templateKey = searchedTemplateKeys[searchedTemplatePage]
    templates = templates[templateKey]
  }

  return <Explorer
    records={records}
    templates={templates}
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
    defaultRecordPage: state.Interface.defaultRecordPage,
    defaultTemplatePage: state.Interface.defaultTemplatePage,
    searchedRecordPage: state.Interface.searchedRecordPage,
    searchedTemplatePage: state.Interface.searchedTemplatePage,
    defaultRecordKeys: state.Explorer.defaultRecordKeys,
    defaultTemplateKeys: state.Explorer.defaultTemplateKeys,
    searchedRecordKeys: state.Explorer.searchedRecordKeys,
    searchedTemplateKeys: state.Explorer.searchedTemplateKeys
  }
}

const mapDispatchToProps = {}

ExplorerContainer.propTypes = {
  defaultRecords: PropTypes.object,
  defaultTemplates: PropTypes.object,
  searchedRecords: PropTypes.object,
  searchedTemplates: PropTypes.object,
  mode: PropTypes.string.isRequired,
  defaultRecordPage: PropTypes.number,
  defaultTemplatePage: PropTypes.number,
  searchedRecordPage: PropTypes.number,
  searchedTemplatePage: PropTypes.number,
  defaultRecordKeys: PropTypes.array,
  defaultTemplateKeys: PropTypes.array,
  searchedRecordKeys: PropTypes.array,
  searchedTemplateKeys: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerContainer)
