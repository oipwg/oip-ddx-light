import { TMP_ARTICLE, TMP_BASIC, TMP_IMAGE, TMP_PERSON, TMP_TEXT } from './index'
import { arrayOf, IpfsAddress, OipRef, string } from '../constants/prop-types'

export const Models = {
	[TMP_ARTICLE]: {
		imageCaptionList: arrayOf(string),
		bylineWriter: OipRef,
		articleText: OipRef,
		videoList: arrayOf(OipRef),
		imageList: arrayOf(OipRef),
		videoCaptionList: arrayOf(string),
		bylineWritersTitle: string,
		bylineWritersLocation: string
	},
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
	[TMP_BASIC]: {
		name: string,
		description: string,
		language: string,
		// ...rest
	}
}
