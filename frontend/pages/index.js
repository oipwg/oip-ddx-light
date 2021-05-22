import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import config from '../config'
import InterfaceContainer from '../src/components/views/Interface/InterfaceContainer'

import {
  fetchingRecordsError,
  fetchingTemplatesError,
  setDefaultRecords,
  setDefaultTemplates
} from '../src/redux/actions/Explorer/creators'
import { getDefaultRecords, getDefaultTemplates } from '../src/redux/actions/Explorer/thunks'
import { getBalance, getExchangeRate } from '../src/redux/modules/Wallet/thunks'
import useRegisterPlatform from '../src/hooks/useRegisterPlatform'
import { registerPlatform, setPlatformData } from '../src/redux/actions/Platform/creators'

const Index = ({
  defaultRecords,
  defaultTemplates,
  setDefaultRecords,
  setDefaultTemplates,
  fetchingRecordsError,
  fetchingTemplatesError,
  getExchangeRate,
  getBalance,
  daemonApi,
  setPlatformData,
  registerPlatform
}) => {

  // work on this
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const router = useRouter()
  console.log(router.query);

  if (router.query.code && router.query.state && router.query.scope) {
    let coilTokenRequest = ''
    
    fetch(`${config.backendApiUrl}/api/users/coilLoginToken`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(router.query)
    }).then(rsp => {
      coilTokenRequest = rsp
    })

    console.log(coilTokenRequest)
  }
  
  useEffect(() => {
    if(document.cookie) {
      // Edit here 1203i102930129301923091230912039120931029301293
    }
  })

  const { registered, platformData } = useRegisterPlatform({
    txid: config.platformRegistrationTxid,
    daemon: daemonApi
  })
  useEffect(() => {
    let current = true
    if (current) {
      if (registered) {
        registerPlatform(registered)
        setPlatformData(platformData)
      }
    }
    return () => {
      current = false
    }
  }, [registered, platformData])

  useEffect(() => {
    let current = true
    if (defaultRecords) {
      const { error } = defaultRecords
      if (current) {
        if (error) {
          fetchingRecordsError(error)
        } else setDefaultRecords(defaultRecords)
      }
    }
    if (defaultTemplates) {
      const { error } = defaultTemplates
      if (current) {
        if (error) {
          fetchingTemplatesError(error)
        } else setDefaultTemplates(defaultTemplates)
      }
    }
    return () => {
      current = false
    }
  }, [])

  // get flo balance and exchange rate
  useEffect(() => {
    let current = true
    const getXrAndBalance = async () => {
      if (current) {
        await getExchangeRate()
        await getBalance()
      }
    }
    getXrAndBalance()
    return () => {
      current = false
    }
  }, [])

  return <InterfaceContainer />
}

Index.getInitialProps = async (ctx) => {
  const { req, reduxStore } = ctx
  const { dispatch } = reduxStore
  const isServer = !!req

  // this is a part of render blocking I think
  const recordsPayload = await dispatch(getDefaultRecords())
  const templatesPayload = await dispatch(getDefaultTemplates())

  if (isServer) {
    return {
      defaultRecords: recordsPayload,
      defaultTemplates: templatesPayload
    }
  } else return {}
}

Index.propTypes = {
  defaultTemplates: PropTypes.object,
  defaultRecords: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    daemonApi: state.Explorer.daemonApi
  }
}

const mapDispatchToProps = {
  setDefaultTemplates,
  setDefaultRecords,
  fetchingRecordsError,
  fetchingTemplatesError,
  getExchangeRate,
  getBalance,
  setPlatformData,
  registerPlatform
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
