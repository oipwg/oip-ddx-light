const knownTemplates = {
  video: [ 'tmpl_4769368E', 'tmpl_5679C4E4' ],
  audio: [],
  image: [],
  tmpl_66089C48: {
    'friendly_name': 'Basic',
    'name': 'tmpl_66089C48',
    'description': 'basic template information',
    'file_descriptor_set': 'ClwKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyI1CgFQEg0KBXRpdGxlGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEgwKBHllYXIYAyABKBFiBnByb3RvMw==',
    'identifier': 1711840328
  },
  tmpl_4769368E: {
    'friendly_name': 'Basic Video',
    'name': 'tmpl_4769368E',
    'description': 'For records of a video & its thumbnail inside a directory, without ',
    'file_descriptor_set': 'CuABCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiuAEKAVASEwoLcHVibGlzaERhdGUYASABKAQSGAoQYWRkcmVzc0RpcmVjdG9yeRgDIAEoCRIQCghmaWxlbmFtZRgEIAEoCRITCgtkaXNwbGF5TmFtZRgFIAEoCRIZChF0aHVtYm5haWxGaWxlbmFtZRgGIAEoCSJCCgdOZXR3b3JrEg0KCVVOREVGSU5FRBAAEhAKDE5ldHdvcmtfSVBGUxABEhYKEk5ldHdvcmtfQklUVE9SUkVOVBACYgZwcm90bzM=',
    'identifier': 1198077582
  },
  tmpl_3084380E: {
    'friendly_name': 'Payments',
    'name': 'tmpl_3084380E',
    'description': 'payment details',
    'file_descriptor_set': 'CoUCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi3QEKAVASDQoFc2NhbGUYAiABKA0SEwoLcGxhdGZvcm1DdXQYAyABKA0SFQoNaW5mbHVlbmNlckN1dBgEIAEoDRIWCg5wYXltZW50c0JpcDQ0SRgFIAEoDRIOCgZzdWdUaXAYBiADKA0SDwoHc3VnUGxheRgHIAEoDRIOCgZzdWdCdXkYCCABKA0SDwoHbWluUGxheRgJIAEoDRIOCgZtaW5CdXkYCiABKA0iMwoERmlhdBINCglVTkRFRklORUQQABIMCghGaWF0X1VTRBABEg4KCkZpYXRfT1RIRVIQAmIGcHJvdG8z',
    'identifier': 813971470
  },
  tmpl_433C2783: {
    'friendly_name': 'Registered Publishers',
    'name': 'tmpl_433C2783',
    'description': 'All registered publishers in OIP',
    'file_descriptor_set': 'Ck4KB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyInCgFQEgwKBG5hbWUYASABKAkSFAoMZmxvQmlwNDRYUHViGAIgASgJYgZwcm90bzM=',
    'identifier': 1128015747
  },
  tmpl_F471DFF9: {
    'friendly_name': 'Verified Publisher',
    'name': 'tmpl_F471DFF9',
    'description': 'reference data to verify registered publishers',
    'file_descriptor_set': 'CoQBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiXQoBUBIhChNyZWdpc3RlcmVkUHVibGlzaGVyGAEgASgLMgRUeGlkEhEKCXR3aXR0ZXJJZBgCIAEoCRINCgVnYWJJZBgDIAEoCRoTCgRUeGlkEgsKA3JhdxgBIAEoDGIGcHJvdG8z',
    'identifier': 4101103609
  },
  tmpl_F6A8A55E: {
    'friendly_name': 'Registered Platform',
    'name': 'tmpl_F6A8A55E',
    'description': 'register web platform',
    'file_descriptor_set': 'CrEBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiiQEKAVASDAoEbmFtZRgBIAEoCRIPCgdodHRwVXJsGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEhoKEmZsb0JpcDQ0Q2hhbmdlWHB1YhgEIAEoCRIZChFmbG9QYXltZW50QWRkcmVzcxgFIAEoCRIZChFidGNQYXltZW50QWRkcmVzcxgGIAEoCWIGcHJvdG8z',
    'identifier': 4138247518
  },
  testnet: {
    tmpl_BE47CC68: {
      'friendly_name': 'Basic',
      'name': 'tmpl_BE47CC68',
      'description': 'basic template information',
      'file_descriptor_set': 'ClwKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyI1CgFQEg0KBXRpdGxlGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEgwKBHllYXIYAyABKBFiBnByb3RvMw==',
      'identifier': 3192376424
    },
    tmpl_5679C4E4: {
      'friendly_name': 'Basic Video',
      'name': 'tmpl_5679C4E4',
      'description': 'For records of a video & its thumbnail inside a directory, without ',
      'file_descriptor_set': 'CuABCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiuAEKAVASEwoLcHVibGlzaERhdGUYASABKAQSGAoQYWRkcmVzc0RpcmVjdG9yeRgDIAEoCRIQCghmaWxlbmFtZRgEIAEoCRITCgtkaXNwbGF5TmFtZRgFIAEoCRIZChF0aHVtYm5haWxGaWxlbmFtZRgGIAEoCSJCCgdOZXR3b3JrEg0KCVVOREVGSU5FRBAAEhAKDE5ldHdvcmtfSVBGUxABEhYKEk5ldHdvcmtfQklUVE9SUkVOVBACYgZwcm90bzM=',
      'identifier': 1450820836
    },
    tmpl_CC905C15: {
      'friendly_name': 'Payments',
      'name': 'tmpl_CC905C15',
      'description': 'payment details',
      'file_descriptor_set': 'CoUCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi3QEKAVASDQoFc2NhbGUYAiABKA0SEwoLcGxhdGZvcm1DdXQYAyABKA0SFQoNaW5mbHVlbmNlckN1dBgEIAEoDRIWCg5wYXltZW50c0JpcDQ0SRgFIAEoDRIOCgZzdWdUaXAYBiADKA0SDwoHc3VnUGxheRgHIAEoDRIOCgZzdWdCdXkYCCABKA0SDwoHbWluUGxheRgJIAEoDRIOCgZtaW5CdXkYCiABKA0iMwoERmlhdBINCglVTkRFRklORUQQABIMCghGaWF0X1VTRBABEg4KCkZpYXRfT1RIRVIQAmIGcHJvdG8z',
      'identifier': 3432012821
    },
    tmpl_D6038842: {
      'friendly_name': 'Registered Publishers',
      'name': 'tmpl_D6038842',
      'description': 'All registered publishers in OIP',
      'file_descriptor_set': 'Ck4KB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyInCgFQEgwKBG5hbWUYASABKAkSFAoMZmxvQmlwNDRYUHViGAIgASgJYgZwcm90bzM=',
      'identifier': 3590555714
    },
    tmpl_2A46C905: {
      'friendly_name': 'Verified Publisher',
      'name': 'tmpl_2A46C905',
      'description': 'reference data to verify registered publishers',
      'file_descriptor_set': 'CoQBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiXQoBUBIhChNyZWdpc3RlcmVkUHVibGlzaGVyGAEgASgLMgRUeGlkEhEKCXR3aXR0ZXJJZBgCIAEoCRINCgVnYWJJZBgDIAEoCRoTCgRUeGlkEgsKA3JhdxgBIAEoDGIGcHJvdG8z',
      'identifier': 709282053
    }
  }
}

export default knownTemplates
