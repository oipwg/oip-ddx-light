export default function createObjectUrl ({ blob, arrayBuffer }) {
	if (!blob && !arrayBuffer) return undefined
	const file = blob || new Blob(arrayBuffer, { type })
	return window.URL.createObjectURL(file)
}
