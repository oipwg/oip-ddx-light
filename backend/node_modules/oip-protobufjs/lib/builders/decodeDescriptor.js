"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeDescriptor;

var _protobufjs = _interopRequireDefault(require("protobufjs"));

var _descriptor = _interopRequireDefault(require("protobufjs/ext/descriptor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * decode descriptor.proto into a Protobuf.js Type instance
 * @param protoDescriptor - encoded file descriptor
 * @param {Boolean} [forWeb=false] - return a serialized object with fields, types, an enums to make it easier for UI
 * @returns {Object}
 */
function decodeDescriptor(protoDescriptor, forWeb = false) {
  if (!Buffer.isBuffer(protoDescriptor)) {
    let uint8 = new Uint8Array();

    const len = _protobufjs.default.util.base64.decode(protoDescriptor, uint8, 0);

    uint8 = new Uint8Array(len);

    _protobufjs.default.util.base64.decode(protoDescriptor, uint8, 0);

    protoDescriptor = uint8;
  }

  let decodedDescriptor = _descriptor.default.FileDescriptorSet.decode(protoDescriptor);

  const root = _protobufjs.default.Root.fromDescriptor(decodedDescriptor);

  const type = root.lookupType('P'); // convert types in fieldsArray (takes care of everything NOT ENUMS)
  // convert .oipProto.Txid to Txid

  for (let field of type.fieldsArray) {
    if (field.type === '.oipProto.Txid') {
      field.type = formatTxidType(field.type);
    }
  }

  let webFmt;

  if (forWeb) {
    webFmt = {
      enums: {},
      fields: {}
    };
    const nestedArray = type.nestedArray;
    const fieldArray = type.fieldsArray; //creates the enum object in webFmt

    for (let field of nestedArray) {
      if (field.name !== 'Txid') {
        webFmt.enums[field.name] = {
          values: field.values,
          //passes enum values 
          rule: field.rule
        };
      }
    } //creates the field object in webFmt


    for (let field of fieldArray) {
      // checks type
      // if type matches enum name
      // add enumRefname to the field object
      switch (field.type) {
        case 'string':
        case 'bool':
        case 'bytes':
        case 'double':
        case 'float':
        case 'OipRef':
        case 'int32':
        case 'int64':
        case 'uint32':
        case 'uint64':
        case 'sint32':
        case 'sint64':
        case 'fixed32':
        case 'fixed64':
        case 'sfixed32':
        case 'sfixed64':
          webFmt.fields[field.name] = {
            type: field.type,
            id: field.id,
            repeated: field.repeated,
            extend: field.extend
          };
          break;

        case 'Txid':
          webFmt.fields[field.name] = {
            type: 'OipRef',
            id: field.id,
            repeated: field.repeated,
            extend: field.extend
          };
          break;

        default:
          webFmt.fields[field.name] = {
            type: field.type,
            id: field.id,
            repeated: field.repeated,
            extend: field.extend,
            enumRefName: type.lookup(`.oipProto.templates.P.${field.type}`).name
          };
      }
    }
  }

  return {
    type,
    webFmt
  };
}

const formatTxidType = typePath => {
  return typePath.split('.')[2]; // [ '', 'oipProto', 'Txid' ]
};