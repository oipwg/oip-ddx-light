import { useEffect, useState } from 'react'
import getIpfsObject from '../api/ipfs/get-ipfs-object'

export default function useIpfsRecord (address, log) {
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
				const res = await getIpfsObject(address)
				setRecord(res)
				if (log) {
					console.log(log, res)
				}
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
				setSettled(true)
			}
		}
		if (address) {
			console.log('found addy for', log)
			getRecord()
		}
	}, [address])

	return [record, { isLoading, isError, isSettled }]
}
