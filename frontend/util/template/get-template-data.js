export default function getTemplateData (record, template) {
	return record?.record?.details?.[template]
}
