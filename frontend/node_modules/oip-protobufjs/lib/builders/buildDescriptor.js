"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildDescriptor;

var _protobufjs = _interopRequireDefault(require("protobufjs"));

var _descriptor = _interopRequireDefault(require("protobufjs/ext/descriptor"));

var _jsPascalcase = _interopRequireDefault(require("js-pascalcase"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} fieldData
 * @param {string} fieldData.name - field name
 * @param {string} fieldData.type - field type
 * @param {string} [fieldData.rule] - rule as according to proto3 standards (must be 'repeated' or `undefined`)
 * @param {array} [fieldData.values] - **only used for enum** enum values in an array
 * @param {number} [fieldData.index] - optionally declare proto tag number
 */

/**
 * helper function to build the descriptorSetProto filed in the recordTemplate.proto message
 * @param {fieldData|Array.<fieldData>} fieldData
 * @returns {Uint8Array | Buffer | never | void}
 */
function buildDescriptor(fieldData) {
  if (!Array.isArray(fieldData)) {
    fieldData = [fieldData];
  }

  const reg = /^[a-zA-Z]\w*$/;

  for (const field of fieldData) {
    if (!reg.test(field.name)) {
      throw Error(`invalid field name: ${field.name}. Must start with a letter and only contain letters/numbers.`);
    }

    if (field.values) {
      for (const value of field.values) {
        if (!reg.test(value)) {
          throw Error(`invalid enum value: ${value} for enum field: ${field.name}. Must start with a letter and only contain letters/numbers.`);
        }
      }
    }
  }

  const pRoot = new _protobufjs.default.Root();
  const tmplNameSpace = pRoot.define('oipProto.templates');
  tmplNameSpace.filename = 'p.proto';
  const Txid = new _protobufjs.default.Type('Txid').add(new _protobufjs.default.Field('raw', 1, 'bytes'));
  const P = new _protobufjs.default.Type('P');
  tmplNameSpace.add(P);
  let txidMessageAdded = false;
  const ENUM = 'enum';
  const OIP_REF = 'oipref';

  function serializeEnumValues(values, name) {
    name = (0, _jsPascalcase.default)(name);
    const enumValues = {};
    enumValues[`${name}_UNDEFINED`] = 0; // set default value

    for (const index in values) {
      enumValues[`${name}_${values[index].toUpperCase()}`] = Number(index) + 1;
    }

    return enumValues;
  }

  let counter = 1;

  for (const field of fieldData) {
    const index = counter;
    const name = (0, _lodash.camelCase)(field.name);
    const rule = field.rule;
    const enumValues = field.values ? serializeEnumValues(field.values, name) : undefined;
    const type = field.type;
    const lowercaseType = field.type.toLowerCase();
    const tag = field.index || index;

    switch (lowercaseType) {
      case ENUM:
        {
          const pascalName = (0, _jsPascalcase.default)(name);
          P.add(new _protobufjs.default.Field(name, tag, `.oipProto.templates.P.${pascalName}`, rule));
          P.add(new _protobufjs.default.Enum(pascalName, enumValues));
          break;
        }

      case OIP_REF:
        {
          if (!txidMessageAdded) {
            P.add(Txid);
            txidMessageAdded = true;
          }

          const field = new _protobufjs.default.Field(name, tag, 'Txid', rule);
          P.add(field);
          break;
        }

      default:
        P.add(new _protobufjs.default.Field(name, tag, type, rule));
    }

    counter += 1;
  }

  const descriptorFromRoot = pRoot.toDescriptor('proto3');

  const buffer = _descriptor.default.FileDescriptorSet.encode(descriptorFromRoot).finish();

  return buffer;
}