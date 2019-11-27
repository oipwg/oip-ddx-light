import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Explorer from '../views/wrappers/Explorer'

import {
  DEFAULT,
  SEARCH,
  setMode
} from '../../redux/actions/Interface/creators'
import { searchRecords, searchTemplates } from '../../redux/actions/Explorer/thunks'
import { extendTemplates, publishRecord, publishTemplate } from '../../redux/actions/Publisher/creators'

const Records = 'Records'
const Templates = 'Templates'

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
  searchedTemplateKeys,
  recordsFetching,
  recordsSuccess,
  recordsError,
  templatesFetching,
  templatesSuccess,
  templatesError,
  searchRecords,
  searchTemplates,
  setMode,
  publishRecord,
  publishTemplate,
  extendTemplates,
  daemonApi,
  showOnlyVerifiedPublishers
}) => {
  const [searchInput, setSearchInput] = useState('')
  const [selectOption, setSelectOption] = useState(Records)

  async function isVerified ({ pubAddr, templateName, apiUrl, localhost }) {
    try {
      return await daemonApi.isVerifiedPublisher({ pubAddr, templateName, apiUrl, localhost })
    } catch (err) {
      console.error(`Failed to verify pub address: ${pubAddr}: \n ${err}`)
      return { success: false, error: err }
    }
  }

  const [selectedTemplates, setSelectedTemplates] = useState({})

  function handleSelectTemplate ({ id, template }) {
    if (selectedTemplates[id]) {
      let { [id]: _, ...newSelection } = selectedTemplates
      setSelectedTemplates(newSelection)
    } else {
      setSelectedTemplates(prevState => {
        return {
          ...prevState,
          [id]: template
        }
      })
    }
  }

  function handlePublishRecordWithTemplates () {
    let templates = []
    for (let tmpl in selectedTemplates) {
      if (selectedTemplates.hasOwnProperty(tmpl)) {
        templates.push(selectedTemplates[tmpl])
      }
    }
    publishRecord(templates)
  }

  function handleExtendTemplates () {
    // get template IDs
    let ids = []
    for (let tmpl in selectedTemplates) {
      if (selectedTemplates.hasOwnProperty(tmpl)) {
        ids.push(selectedTemplates[tmpl].identifier)
      }
    }
    publishTemplate()
    extendTemplates(ids)
  }

  function handleSearchInput (e) {
    setSearchInput(e.target.value)
  }

  function handleSelectOption (e) {
    setSelectOption(e.target.value)
  }

  function handleSearchSubmit () {
    if (searchInput === '') {
      setMode(DEFAULT)
    } else {
      if (selectOption === Records) {
        setMode(SEARCH)
        searchRecords(searchInput)
      }
      if (selectOption === Templates) {
        setMode(SEARCH)
        searchTemplates(searchInput)
      }
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
  } else if (mode === SEARCH) {
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
    recordsFetching={recordsFetching}
    recordsSuccess={recordsSuccess}
    recordsError={recordsError}
    templatesFetching={templatesFetching}
    templatesSuccess={templatesSuccess}
    templatesError={templatesError}
    publishRecord={publishRecord}
    publishTemplate={publishTemplate}
    extendTemplates={extendTemplates}
    handleSelectTemplate={handleSelectTemplate}
    selectedTemplates={selectedTemplates}
    handlePublishRecordWithTemplates={handlePublishRecordWithTemplates}
    handleExtendTemplates={handleExtendTemplates}
    isVerified={isVerified}
    showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
  />
}

function mapStateToProps (state) { // toDo: note:: separate templates and records
  return {
    daemonApi: state.Explorer.daemonApi,
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
    searchedTemplateKeys: state.Explorer.searchedTemplateKeys,
    recordsFetching: state.Explorer.recordsFetching,
    recordsSuccess: state.Explorer.recordsSuccess,
    recordsError: state.Explorer.recordsError,
    templatesFetching: state.Explorer.templatesFetching,
    templatesSuccess: state.Explorer.templatesSuccess,
    templatesError: state.Explorer.templatesError,
    showOnlyVerifiedPublishers: state.Interface.showOnlyVerifiedPublishers
  }
}

const mapDispatchToProps = {
  setMode,
  searchRecords,
  searchTemplates,
  publishRecord,
  publishTemplate,
  extendTemplates
}

ExplorerContainer.propTypes = {
  daemonApi: PropTypes.object.isRequired,
  setMode: PropTypes.func.isRequired,
  searchRecords: PropTypes.func.isRequired,
  searchTemplates: PropTypes.func.isRequired,
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
  searchedTemplateKeys: PropTypes.array,
  recordsFetching: PropTypes.bool,
  recordsSuccess: PropTypes.bool,
  recordsError: PropTypes.bool,
  templatesFetching: PropTypes.bool,
  templatesSuccess: PropTypes.bool,
  templatesError: PropTypes.bool,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  extendTemplates: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerContainer)
