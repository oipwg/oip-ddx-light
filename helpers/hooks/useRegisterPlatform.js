import { useState, useEffect } from 'react'

const useRegisterPlatform = ({
  txid,
  daemon
}) => {
  const [registered, setRegister] = useState(false)
  const [platformData, setPlatformData] = useState({})
  // look up register platform record
  useEffect(() => {
    const getPlatformRecord = async (txid) => {
      let res
      try {
        res = await daemon.getOip5Record(txid)
      } catch (err) {
        console.error(`Failed to register platform; Failed to get platform record \n ${err}`)
        return
      }

      const { success, payload } = res
      if (success) {
        let httpUrl
        let { results } = payload
        if (results[0]) {
          const { record } = results[0]
          const { details } = record
          setPlatformData(details['tmpl_AFFDC192'])
          httpUrl = platformData.httpUrl
        }
        if (window) {
          if (window.location.hostname === httpUrl) {
            setRegister(true)
          }
          if (window.location.hostname === 'localhost') {
            setRegister(true)
          }
        }
      }
    }
    getPlatformRecord(txid)
  }, [])

  return { registered, platformData }
}

export default useRegisterPlatform
