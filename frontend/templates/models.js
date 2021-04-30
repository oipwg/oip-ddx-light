import { TMP_IMAGE, TMP_PERSON, TMP_TEXT } from './index'
import { IpfsAddress, string } from '../constants/prop-types'

const Models = {
	[TMP_TEXT]: {
		network: string,
		textAddress: IpfsAddress,
		textFiletype: string
	},
	[TMP_PERSON]: {
		surname: string
	},
	[TMP_IMAGE]: {
		filename: string,
		imageAddress: IpfsAddress,
		network: string, // assuming IPFS
		thumbnailAddress: IpfsAddress
	},
}
