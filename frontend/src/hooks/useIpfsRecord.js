import { useEffect, useState } from 'react'
import getIpfsObject from '../api/ipfs/get-ipfs-object'

/**
 *
 * @param address
 * @param options
 * @param options.responseType
 * @param options.log
 * @returns {[unknown, {isLoading: boolean, isError: string, isSettled: boolean}]}
 */
export default function useIpfsRecord (address, options = {}) {
  const { responseType, log } = options

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState('')
  const [isSettled, setSettled] = useState(false)
  const [record, setRecord] = useState(null)

  useEffect(() => {
    function l (...x) {
      if (log) {
        console.log(...x)
      }
    }

    let current = true
    async function getRecord () {
      setLoading(true)
      setSettled(false)
      setError('')
      try {
        l('get ipfs obj for', log)
        const res = await getIpfsObject(address, { responseType })
        setRecord(res)
        l('ipfs response for: ', log, res)
      } catch (err) {
        l(err)
        setError(err)
      } finally {
        setLoading(false)
        l('setting settling to true')
        setSettled(true)
      }
      l('done')
    }
    l(log, address)
    if (address && current) {
      getRecord()
    }
    return () => {
      current = false
    }
  }, [address, log, responseType])

  return [record, { isLoading, isError, isSettled }]
}
