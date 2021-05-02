import { TMP_ARTICLE, TMP_BASIC, TMP_IMAGE, TMP_PERSON, TMP_TEXT } from './index'
import { arrayOf, IpfsAddress, OipRef, string } from '../constants/prop-types'

/**
 * These aren't actually used in the code. They are purely a quick reference for developers
 * to know what schemas they are working with for certain templates.
 *
 * Though they technically can be used to build out record type prop-types
 */

module.exports = {
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
		language: string
		// ...rest
	}
}
