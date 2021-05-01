import { useEffect, useState } from 'react'
import getIpfsObject from '../api/ipfs/get-ipfs-object'

export default function useIpfsRecord (address, responseType, log) {
	const [isLoading, setLoading] = useState(false)
	const [isError, setError] = useState('')
	const [isSettled, setSettled] = useState(false)
	const [record, setRecord] = useState(null)


	useEffect(() => {
		async function getRecord () {
			setLoading(true)
			setSettled(false)
			setError('')
			try {
				const res = await getIpfsObject(address, { responseType })
				setRecord(res)
				if (log) {
					console.log('ipfs: ', log , res)
				}
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
				setSettled(true)
			}
		}
		if (log) {
			console.log(log, address)
		}
		if (address) {
			getRecord()
		}
	}, [address])

	return [record, { isLoading, isError, isSettled }]
}
