import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function useOip5RecordsByTxid (txid, log) {
	const [isLoading, setLoading] = useState(false)
	const [isError, setError] = useState('')
	const [isSettled, setSettled] = useState(false)
	const [record, setRecord] = useState(null)

	const daemonApi = useSelector(state => state.Explorer.daemonApi)

	useEffect(() => {
		async function getRecord () {
			setLoading(true)
			setSettled(false)
			setError('')
			try {
				// toDo: this api shouldn't return an array when the api is /record/get
				const res = await daemonApi.getOip5Record(txid)
				const { payload, error } = res
				if (error) {
					setError(error)
				} else {
					const records = payload?.results
					if (records[0]) {
						setRecord(records[0])
					}
				}
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
		if (txid) {
			console.log('found txid for ', txid, log)
			getRecord()
		}
	}, [txid])

	return [record, { isLoading, isError, isSettled }]
}
