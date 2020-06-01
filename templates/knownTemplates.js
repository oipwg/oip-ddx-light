const knownTemplates = {
  video: ['tmpl_4769368E', 'tmpl_5679C4E4', 'tmpl_5D503849'],
  audio: ['tmpl_2670B072'],
  image: ['tmpl_1AC73C98'],
  pdf: ['tmpl_8EE48C00'],
  commercialContent: ['tmpl_D8D0F22C'],
  tmpl_66089C48: {
    friendly_name: 'Basic',
    name: 'tmpl_66089C48',
    description: 'basic template information',
    "file_descriptor_set":
      'ClwKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyI1CgFQEg0KBXRpdGxlGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEgwKBHllYXIYAyABKBFiBnByb3RvMw==',
    identifier: 1711840328
  },
  tmpl_4769368E: {
    friendly_name: 'Basic Video',
    name: 'tmpl_4769368E',
    description:  'For records of a video & its thumbnail inside a directory, without ',
    "file_descriptor_set":
      'CuABCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiuAEKAVASEwoLcHVibGlzaERhdGUYASABKAQSGAoQYWRkcmVzc0RpcmVjdG9yeRgDIAEoCRIQCghmaWxlbmFtZRgEIAEoCRITCgtkaXNwbGF5TmFtZRgFIAEoCRIZChF0aHVtYm5haWxGaWxlbmFtZRgGIAEoCSJCCgdOZXR3b3JrEg0KCVVOREVGSU5FRBAAEhAKDE5ldHdvcmtfSVBGUxABEhYKEk5ldHdvcmtfQklUVE9SUkVOVBACYgZwcm90bzM=',
    identifier: 1198077582
  },
  tmpl_2670B072: {
    friendly_name: "Song",
    name: 'tmpl_2670B072',
    description: 'Simple song',
    "file_descriptor_set":
      'CmoKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyJDCgFQEg0KBXRpdGxlGAEgASgJEg0KBWdlbnJlGAIgASgJEhAKCGR1cmF0aW9uGAMgASgNEg4KBmFydGlzdBgEIAEoCWIGcHJvdG8z',
    identifier: 644919410
  },
  tmpl_3084380E: {
    friendly_name: 'Payments',
    name: 'tmpl_3084380E',
    description: 'payment details',
    "file_descriptor_set":
      'CoUCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi3QEKAVASDQoFc2NhbGUYAiABKA0SEwoLcGxhdGZvcm1DdXQYAyABKA0SFQoNaW5mbHVlbmNlckN1dBgEIAEoDRIWCg5wYXltZW50c0JpcDQ0SRgFIAEoDRIOCgZzdWdUaXAYBiADKA0SDwoHc3VnUGxheRgHIAEoDRIOCgZzdWdCdXkYCCABKA0SDwoHbWluUGxheRgJIAEoDRIOCgZtaW5CdXkYCiABKA0iMwoERmlhdBINCglVTkRFRklORUQQABIMCghGaWF0X1VTRBABEg4KCkZpYXRfT1RIRVIQAmIGcHJvdG8z',
    identifier: 813971470
  },
  tmpl_433C2783: {
    friendly_name: 'Registered Publishers',
    name: 'tmpl_433C2783',
    description: 'All registered publishers in OIP',
    "file_descriptor_set":
      'Ck4KB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyInCgFQEgwKBG5hbWUYASABKAkSFAoMZmxvQmlwNDRYUHViGAIgASgJYgZwcm90bzM=',
    identifier: 1128015747
  },
  tmpl_F471DFF9: {
    friendly_name: 'Verified Publisher',
    name: 'tmpl_F471DFF9',
    description: 'reference data to verify registered publishers',
    "file_descriptor_set":
      'CoQBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiXQoBUBIhChNyZWdpc3RlcmVkUHVibGlzaGVyGAEgASgLMgRUeGlkEhEKCXR3aXR0ZXJJZBgCIAEoCRINCgVnYWJJZBgDIAEoCRoTCgRUeGlkEgsKA3JhdxgBIAEoDGIGcHJvdG8z',
    identifier: 4101103609
  },
  tmpl_F6A8A55E: {
    friendly_name: 'Registered Platform',
    name: 'tmpl_F6A8A55E',
    description: 'register web platform',
    "file_descriptor_set":
      'CrEBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiiQEKAVASDAoEbmFtZRgBIAEoCRIPCgdodHRwVXJsGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEhoKEmZsb0JpcDQ0Q2hhbmdlWHB1YhgEIAEoCRIZChFmbG9QYXltZW50QWRkcmVzcxgFIAEoCRIZChFidGNQYXltZW50QWRkcmVzcxgGIAEoCWIGcHJvdG8z',
    identifier: 4138247518
  },
  testnet: {
    tmpl_BE47CC68: {
      friendly_name: 'Basic',
      name: 'tmpl_BE47CC68',
      description: 'basic template information',
      "file_descriptor_set":
        'ClwKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyI1CgFQEg0KBXRpdGxlGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEgwKBHllYXIYAyABKBFiBnByb3RvMw==',
      identifier: 3192376424
    },
    tmpl_5679C4E4: {
      friendly_name: 'Basic Video',
      name: 'tmpl_5679C4E4',
      description: 'For records of a video & its thumbnail inside a directory, without ',
      "file_descriptor_set":
        'CuABCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiuAEKAVASEwoLcHVibGlzaERhdGUYASABKAQSGAoQYWRkcmVzc0RpcmVjdG9yeRgDIAEoCRIQCghmaWxlbmFtZRgEIAEoCRITCgtkaXNwbGF5TmFtZRgFIAEoCRIZChF0aHVtYm5haWxGaWxlbmFtZRgGIAEoCSJCCgdOZXR3b3JrEg0KCVVOREVGSU5FRBAAEhAKDE5ldHdvcmtfSVBGUxABEhYKEk5ldHdvcmtfQklUVE9SUkVOVBACYgZwcm90bzM=',
      identifier: 1450820836
    },
    tmpl_CC905C15: {
      friendly_name: 'Payments',
      name: 'tmpl_CC905C15',
      description: 'payment details',
      "file_descriptor_set":
        'CoUCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi3QEKAVASDQoFc2NhbGUYAiABKA0SEwoLcGxhdGZvcm1DdXQYAyABKA0SFQoNaW5mbHVlbmNlckN1dBgEIAEoDRIWCg5wYXltZW50c0JpcDQ0SRgFIAEoDRIOCgZzdWdUaXAYBiADKA0SDwoHc3VnUGxheRgHIAEoDRIOCgZzdWdCdXkYCCABKA0SDwoHbWluUGxheRgJIAEoDRIOCgZtaW5CdXkYCiABKA0iMwoERmlhdBINCglVTkRFRklORUQQABIMCghGaWF0X1VTRBABEg4KCkZpYXRfT1RIRVIQAmIGcHJvdG8z',
      identifier: 3432012821
    },
    tmpl_D6038842: {
      friendly_name: 'Registered Publishers',
      name: 'tmpl_D6038842',
      description: 'All registered publishers in OIP',
      "file_descriptor_set":
        'Ck4KB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyInCgFQEgwKBG5hbWUYASABKAkSFAoMZmxvQmlwNDRYUHViGAIgASgJYgZwcm90bzM=',
      identifier: 3590555714
    },
    tmpl_2A46C905: {
      friendly_name: 'Verified Publisher',
      name: 'tmpl_2A46C905',
      description: 'reference data to verify registered publishers',
      "file_descriptor_set":
        'CoQBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiXQoBUBIhChNyZWdpc3RlcmVkUHVibGlzaGVyGAEgASgLMgRUeGlkEhEKCXR3aXR0ZXJJZBgCIAEoCRINCgVnYWJJZBgDIAEoCRoTCgRUeGlkEgsKA3JhdxgBIAEoDGIGcHJvdG8z',
      identifier: 709282053
    },
    tmpl_BD4CD990: {
      friendly_name: "Microblog Post",
      "name": "tmpl_BD4CD990",
      description: 'reference data to verify registered publishers',
      "file_descriptor_set":
        'CjgKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIRCgFQEgwKBHRleHQYASABKAliBnByb3RvMw==',
      identifier: 3175930256
    },
    tmpl_D8D0F22C: {
      friendly_name: "CommercialContent",
      "name": "tmpl_D8D0F22C",
      description: 'Storage location and terms of a piece of commercial content',
      "file_descriptor_set":
        'CogCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi4AEKAVASEAoIbG9jYXRpb24YASABKAkSGAoHbmV0d29yaxgCIAEoDjIHTmV0d29yaxITCgV0ZXJtcxgDIAMoCzIEVHhpZBIVCg1lbWJlZGRlZFRlcm1zGAQgAygHGhMKBFR4aWQSCwoDcmF3GAEgASgMIm4KB05ldHdvcmsSFQoRTmV0d29ya19VTkRFRklORUQQABIQCgxOZXR3b3JrX0lQRlMQARIWChJOZXR3b3JrX0JJVFRPUlJFTlQQAhIPCgtOZXR3b3JrX1NJQRADEhEKDU5ldHdvcmtfU1RPUkoQBGIGcHJvdG8z',
      identifier: 3637572140
    },
    tmpl_20AD45E7: {
      friendly_name: "basic",
      "name": "tmpl_20AD45E7",
      description: 'new primitive to replace basic, includes privacy, date, language, avatar, tags, notes and urls',
      "file_descriptor_set": "CpwSCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi9BEKAVASDAoEbmFtZRgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRIMCgRkYXRlGAMgASgEEhoKCGxhbmd1YWdlGAQgASgOMghMYW5ndWFnZRIUCgZhdmF0YXIYBSABKAsyBFR4aWQSDwoHdGFnTGlzdBgGIAMoCRIQCghub3RlTGlzdBgHIAMoCRIVCgd1cmxMaXN0GAggAygLMgRUeGlkGhMKBFR4aWQSCwoDcmF3GAEgASgMIrwQCghMYW5ndWFnZRIWChJMYW5ndWFnZV9VTkRFRklORUQQABIPCgtMYW5ndWFnZV9BRhABEg8KC0xhbmd1YWdlX0FNEAISDwoLTGFuZ3VhZ2VfQVIQAxIQCgxMYW5ndWFnZV9BUk4QBBIPCgtMYW5ndWFnZV9BUxAFEg8KC0xhbmd1YWdlX0FaEAYSDwoLTGFuZ3VhZ2VfQkEQBxIPCgtMYW5ndWFnZV9CRRAIEg8KC0xhbmd1YWdlX0JHEAkSDwoLTGFuZ3VhZ2VfQk4QChIPCgtMYW5ndWFnZV9CTxALEg8KC0xhbmd1YWdlX0JSEAwSDwoLTGFuZ3VhZ2VfQlMQDRIPCgtMYW5ndWFnZV9DQRAOEg8KC0xhbmd1YWdlX0NPEA8SDwoLTGFuZ3VhZ2VfQ1MQEBIPCgtMYW5ndWFnZV9DWRAREg8KC0xhbmd1YWdlX0RBEBISDwoLTGFuZ3VhZ2VfREUQExIQCgxMYW5ndWFnZV9EU0IQFBIPCgtMYW5ndWFnZV9EVhAVEg8KC0xhbmd1YWdlX0VMEBYSDwoLTGFuZ3VhZ2VfRU4QFxIPCgtMYW5ndWFnZV9FUxAYEg8KC0xhbmd1YWdlX0VUEBkSDwoLTGFuZ3VhZ2VfRVUQGhIPCgtMYW5ndWFnZV9GQRAbEg8KC0xhbmd1YWdlX0ZJEBwSEAoMTGFuZ3VhZ2VfRklMEB0SDwoLTGFuZ3VhZ2VfRk8QHhIPCgtMYW5ndWFnZV9GUhAfEg8KC0xhbmd1YWdlX0ZZECASDwoLTGFuZ3VhZ2VfR0EQIRIPCgtMYW5ndWFnZV9HRBAiEg8KC0xhbmd1YWdlX0dMECMSEAoMTGFuZ3VhZ2VfR1NXECQSDwoLTGFuZ3VhZ2VfR1UQJRIPCgtMYW5ndWFnZV9IQRAmEg8KC0xhbmd1YWdlX0hFECcSDwoLTGFuZ3VhZ2VfSEkQKBIPCgtMYW5ndWFnZV9IUhApEhAKDExhbmd1YWdlX0hTQhAqEg8KC0xhbmd1YWdlX0hVECsSDwoLTGFuZ3VhZ2VfSFkQLBIPCgtMYW5ndWFnZV9JRBAtEg8KC0xhbmd1YWdlX0lHEC4SDwoLTGFuZ3VhZ2VfSUkQLxIPCgtMYW5ndWFnZV9JUxAwEg8KC0xhbmd1YWdlX0lUEDESDwoLTGFuZ3VhZ2VfSVUQMhIPCgtMYW5ndWFnZV9KQRAzEg8KC0xhbmd1YWdlX0tBEDQSDwoLTGFuZ3VhZ2VfS0sQNRIPCgtMYW5ndWFnZV9LTBA2Eg8KC0xhbmd1YWdlX0tNEDcSDwoLTGFuZ3VhZ2VfS04QOBIQCgxMYW5ndWFnZV9LT0sQORIPCgtMYW5ndWFnZV9LTxA6Eg8KC0xhbmd1YWdlX0tZEDsSDwoLTGFuZ3VhZ2VfTEIQPBIPCgtMYW5ndWFnZV9MTxA9Eg8KC0xhbmd1YWdlX0xUED4SDwoLTGFuZ3VhZ2VfTFYQPxIPCgtMYW5ndWFnZV9NSRBAEg8KC0xhbmd1YWdlX01LEEESDwoLTGFuZ3VhZ2VfTUwQQhIPCgtMYW5ndWFnZV9NThBDEhAKDExhbmd1YWdlX01PSBBEEg8KC0xhbmd1YWdlX01SEEUSDwoLTGFuZ3VhZ2VfTVMQRhIPCgtMYW5ndWFnZV9NVBBHEg8KC0xhbmd1YWdlX05CEEgSDwoLTGFuZ3VhZ2VfTkUQSRIPCgtMYW5ndWFnZV9OTBBKEg8KC0xhbmd1YWdlX05OEEsSEAoMTGFuZ3VhZ2VfTlNPEEwSDwoLTGFuZ3VhZ2VfT0MQTRIPCgtMYW5ndWFnZV9PUhBOEg8KC0xhbmd1YWdlX1BBEE8SDwoLTGFuZ3VhZ2VfUEwQUBIQCgxMYW5ndWFnZV9QUlMQURIPCgtMYW5ndWFnZV9QVBBSEhAKDExhbmd1YWdlX1FVVBBTEhAKDExhbmd1YWdlX1FVWhBUEg8KC0xhbmd1YWdlX1JNEFUSDwoLTGFuZ3VhZ2VfUk8QVhIPCgtMYW5ndWFnZV9SVRBXEg8KC0xhbmd1YWdlX1JXEFgSEAoMTGFuZ3VhZ2VfU0FIEFkSDwoLTGFuZ3VhZ2VfU0EQWhIPCgtMYW5ndWFnZV9TRRBbEg8KC0xhbmd1YWdlX1NJEFwSDwoLTGFuZ3VhZ2VfU0sQXRIPCgtMYW5ndWFnZV9TTBBeEhAKDExhbmd1YWdlX1NNQRBfEhAKDExhbmd1YWdlX1NNShBgEhAKDExhbmd1YWdlX1NNThBhEg8KC0xhbmd1YWdlX1NREGISDwoLTGFuZ3VhZ2VfU1IQYxIPCgtMYW5ndWFnZV9TVhBkEg8KC0xhbmd1YWdlX1NXEGUSEAoMTGFuZ3VhZ2VfU1lSEGYSDwoLTGFuZ3VhZ2VfVEEQZxIPCgtMYW5ndWFnZV9URRBoEg8KC0xhbmd1YWdlX1RHEGkSDwoLTGFuZ3VhZ2VfVEgQahIPCgtMYW5ndWFnZV9USxBrEg8KC0xhbmd1YWdlX1ROEGwSDwoLTGFuZ3VhZ2VfVFIQbRIPCgtMYW5ndWFnZV9UVBBuEhAKDExhbmd1YWdlX1RaTRBvEg8KC0xhbmd1YWdlX1VHEHASDwoLTGFuZ3VhZ2VfVUsQcRIPCgtMYW5ndWFnZV9VUhByEg8KC0xhbmd1YWdlX1VaEHMSDwoLTGFuZ3VhZ2VfVkkQdBIPCgtMYW5ndWFnZV9XTxB1Eg8KC0xhbmd1YWdlX1hIEHYSDwoLTGFuZ3VhZ2VfWU8QdxIPCgtMYW5ndWFnZV9aSBB4Eg8KC0xhbmd1YWdlX1pVEHliBnByb3RvMw==",
      identifier: 548226535
    },
    tmpl_CC0EEA66: {
      friendly_name:  "people",
      "name": "tmpl_CC0EEA66",
      description: 'extends profile to add place of birth',
      "extends": [
          2999003772
        ],
      "file_descriptor_set":
        'CkAKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIZCgFQEhQKDHBsYWNlT2ZCaXJ0aBgBIAEoCWIGcHJvdG8z',
      identifier: 3423529574
    },
    tmpl_B6E9AF9B: {
      friendly_name:  "person",
      "name": "tmpl_B6E9AF9B",
      description: "extends basic to add metadata for a person",
      "extends": [
          548226535
        ],
      "file_descriptor_set":
        'ClEKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIqCgFQEg8KB3N1cm5hbWUYASABKAkSFAoMcGxhY2VPZkJpcnRoGAIgASgJYgZwcm90bzM=',
      identifier: 3068768155
    },
    tmpl_1AC73C98: {
      friendly_name:  "image",
      "name": "tmpl_1AC73C98",
      description: "extends basic to add fields for a single image and its thumbnail",
      "extends": [
          548226535
        ],
      "file_descriptor_set":
        'CrwCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMilAIKAVASGAoHbmV0d29yaxgBIAEoDjIHTmV0d29yaxIQCghmaWxlbmFtZRgCIAEoCRIUCgxpbWFnZUFkZHJlc3MYAyABKAkSGAoQdGh1bWJuYWlsQWRkcmVzcxgEIAEoCRIZCgt0YWtlbkJ5TGlzdBgFIAMoCzIEVHhpZBIbCg10YWtlbldpdGhMaXN0GAYgAygLMgRUeGlkEhoKDHByb3RvY29sTGlzdBgHIAMoCzIEVHhpZBoTCgRUeGlkEgsKA3JhdxgBIAEoDCJKCgdOZXR3b3JrEhUKEU5ldHdvcmtfVU5ERUZJTkVEEAASEAoMTmV0d29ya19JUEZTEAESFgoSTmV0d29ya19CSVRUT1JSRU5UEAJiBnByb3RvMw==',
      identifier: 449264792
    },
    tmpl_DE84D583: {
      friendly_name:  "SimpleCoinSale",
      "name": "tmpl_DE84D583",
      description: "Simple coin sale consisting of a destination, amount, and valid duration",
      "file_descriptor_set":
        'Cq4BCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMihgEKAVASEgoEY29pbhgBIAEoCzIEVHhpZBITCgtkZXN0aW5hdGlvbhgCIAEoCRIOCgZhbW91bnQYAyABKAQSDQoFc2NhbGUYBCABKA0SEAoIZHVyYXRpb24YBSABKA0SEgoKaW5kZWZpbml0ZRgGIAEoCBoTCgRUeGlkEgsKA3JhdxgBIAEoDGIGcHJvdG8z',
      identifier: 3733247363
    },
    tmpl_5D503849: {
      friendly_name:  "Basic Video",
      "name": "tmpl_5D503849",
      description: "For records of a video & its thumbnail inside a directory distributed over a selected P2P network",
      "file_descriptor_set":
        'CpQCCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMi7AEKAVASEwoLcHVibGlzaERhdGUYASABKAQSHgoKcDJQTmV0d29yaxgCIAEoDjIKUDJwbmV0d29yaxIYChBhZGRyZXNzRGlyZWN0b3J5GAMgASgJEhAKCGZpbGVuYW1lGAQgASgJEhMKC2Rpc3BsYXlOYW1lGAUgASgJEhkKEXRodW1ibmFpbEZpbGVuYW1lGAYgASgJIlYKClAycG5ldHdvcmsSGAoUUDJwbmV0d29ya19VTkRFRklORUQQABITCg9QMnBuZXR3b3JrX0lQRlMQARIZChVQMnBuZXR3b3JrX0JJVFRPUlJFTlQQAmIGcHJvdG8z',
      identifier: 1565538377
    },
    tmpl_A8863D0A: {
      friendly_name:  "Associated URL on Facebook",
      "name": "tmpl_A8863D0A",
      description: "To associate an OIP record with iterations of it found on platforms on Facebook",
      "file_descriptor_set":
        'Ck8KB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIoCgFQEgsKA3VybBgBIAEoCRIWCg5mYWNlYm9va1Bvc3RJZBgCIAEoCWIGcHJvdG8z',
      identifier: 2827369738
    },
    tmpl_4ACCED8C: {
      friendly_name:  "Associated URL on Instagram",
      "name": "tmpl_4ACCED8C",
      description: "To associate an OIP record with iterations of it found on platforms on Instagram",
      "file_descriptor_set":
        'ClAKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIpCgFQEgsKA3VybBgBIAEoCRIXCg9pbnN0YWdyYW1GZWVkSWQYAiABKAliBnByb3RvMw==',
      identifier: 1254944140
    },
    tmpl_834772F4: {
      friendly_name:  "Associated URL on YouTube",
      "name": "tmpl_834772F4",
      description: "To associate an OIP record with iterations of it found on platforms on YouTube",
      "file_descriptor_set":
        'CkoKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIjCgFQEgsKA3VybBgBIAEoCRIRCgl5b3VUdWJlSWQYAiABKAliBnByb3RvMw=="',
      identifier: 2202497780
    },
    tmpl_F32EF71C: {
      friendly_name:  "Associated URL on Twitter",
      "name": "tmpl_F32EF71C",
      description: "To associate an OIP record with iterations of it found on platforms on Twitter",
      "file_descriptor_set":
        'CkgKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyIhCgFQEgsKA3VybBgBIAEoCRIPCgd0d2VldElkGAIgASgJYgZwcm90bzM="',
      identifier: 4079941404
    },
    tmpl_29F96711: {
      friendly_name:  "Coin",
      "name": "tmpl_29F96711",
      description: "Cryptocurrency basic information",
      "file_descriptor_set":
        'CmoKB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyJDCgFQEgwKBG5hbWUYASABKAkSDgoGdGlja2VyGAIgASgJEg4KBnNvdXJjZRgDIAEoCRIQCghob21lcGFnZRgEIAEoCWIGcHJvdG8z="',
      identifier: 704210705
    },
  }
};

export default knownTemplates;
