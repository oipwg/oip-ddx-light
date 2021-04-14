"use strict";

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.oipProto = function () {
  /**
   * Namespace oipProto.
   * @exports oipProto
   * @namespace
   */
  var oipProto = {};

  oipProto.HistorianDataPoint = function () {
    /**
     * Properties of a HistorianDataPoint.
     * @memberof oipProto
     * @interface IHistorianDataPoint
     * @property {number|null} [Version] HistorianDataPoint Version
     * @property {Uint8Array|null} [PubKey] HistorianDataPoint PubKey
     * @property {number|null} [MiningRigRentalsLast10] HistorianDataPoint MiningRigRentalsLast10
     * @property {number|null} [MiningRigRentalsLast24Hr] HistorianDataPoint MiningRigRentalsLast24Hr
     * @property {number|null} [AutominerPoolHashrate] HistorianDataPoint AutominerPoolHashrate
     * @property {number|null} [FloNetHashRate] HistorianDataPoint FloNetHashRate
     * @property {number|null} [FloMarketPriceBTC] HistorianDataPoint FloMarketPriceBTC
     * @property {number|null} [FloMarketPriceUSD] HistorianDataPoint FloMarketPriceUSD
     * @property {number|null} [LtcMarketPriceUSD] HistorianDataPoint LtcMarketPriceUSD
     * @property {number|null} [NiceHashLast] HistorianDataPoint NiceHashLast
     * @property {number|null} [NiceHash24hr] HistorianDataPoint NiceHash24hr
     */

    /**
     * Constructs a new HistorianDataPoint.
     * @memberof oipProto
     * @classdesc Represents a HistorianDataPoint.
     * @implements IHistorianDataPoint
     * @constructor
     * @param {oipProto.IHistorianDataPoint=} [properties] Properties to set
     */
    function HistorianDataPoint(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * HistorianDataPoint Version.
     * @member {number} Version
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */


    HistorianDataPoint.prototype.Version = 0;
    /**
     * HistorianDataPoint PubKey.
     * @member {Uint8Array} PubKey
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.PubKey = $util.newBuffer([]);
    /**
     * HistorianDataPoint MiningRigRentalsLast10.
     * @member {number} MiningRigRentalsLast10
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.MiningRigRentalsLast10 = 0;
    /**
     * HistorianDataPoint MiningRigRentalsLast24Hr.
     * @member {number} MiningRigRentalsLast24Hr
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.MiningRigRentalsLast24Hr = 0;
    /**
     * HistorianDataPoint AutominerPoolHashrate.
     * @member {number} AutominerPoolHashrate
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.AutominerPoolHashrate = 0;
    /**
     * HistorianDataPoint FloNetHashRate.
     * @member {number} FloNetHashRate
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.FloNetHashRate = 0;
    /**
     * HistorianDataPoint FloMarketPriceBTC.
     * @member {number} FloMarketPriceBTC
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.FloMarketPriceBTC = 0;
    /**
     * HistorianDataPoint FloMarketPriceUSD.
     * @member {number} FloMarketPriceUSD
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.FloMarketPriceUSD = 0;
    /**
     * HistorianDataPoint LtcMarketPriceUSD.
     * @member {number} LtcMarketPriceUSD
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.LtcMarketPriceUSD = 0;
    /**
     * HistorianDataPoint NiceHashLast.
     * @member {number} NiceHashLast
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.NiceHashLast = 0;
    /**
     * HistorianDataPoint NiceHash24hr.
     * @member {number} NiceHash24hr
     * @memberof oipProto.HistorianDataPoint
     * @instance
     */

    HistorianDataPoint.prototype.NiceHash24hr = 0;
    /**
     * Creates a new HistorianDataPoint instance using the specified properties.
     * @function create
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {oipProto.IHistorianDataPoint=} [properties] Properties to set
     * @returns {oipProto.HistorianDataPoint} HistorianDataPoint instance
     */

    HistorianDataPoint.create = function create(properties) {
      return new HistorianDataPoint(properties);
    };
    /**
     * Encodes the specified HistorianDataPoint message. Does not implicitly {@link oipProto.HistorianDataPoint.verify|verify} messages.
     * @function encode
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {oipProto.IHistorianDataPoint} message HistorianDataPoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    HistorianDataPoint.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.Version != null && Object.hasOwnProperty.call(message, "Version")) writer.uint32(
      /* id 1, wireType 0 =*/
      8).int32(message.Version);
      if (message.PubKey != null && Object.hasOwnProperty.call(message, "PubKey")) writer.uint32(
      /* id 2, wireType 2 =*/
      18).bytes(message.PubKey);
      if (message.MiningRigRentalsLast10 != null && Object.hasOwnProperty.call(message, "MiningRigRentalsLast10")) writer.uint32(
      /* id 3, wireType 1 =*/
      25).double(message.MiningRigRentalsLast10);
      if (message.MiningRigRentalsLast24Hr != null && Object.hasOwnProperty.call(message, "MiningRigRentalsLast24Hr")) writer.uint32(
      /* id 4, wireType 1 =*/
      33).double(message.MiningRigRentalsLast24Hr);
      if (message.AutominerPoolHashrate != null && Object.hasOwnProperty.call(message, "AutominerPoolHashrate")) writer.uint32(
      /* id 5, wireType 1 =*/
      41).double(message.AutominerPoolHashrate);
      if (message.FloNetHashRate != null && Object.hasOwnProperty.call(message, "FloNetHashRate")) writer.uint32(
      /* id 6, wireType 1 =*/
      49).double(message.FloNetHashRate);
      if (message.FloMarketPriceBTC != null && Object.hasOwnProperty.call(message, "FloMarketPriceBTC")) writer.uint32(
      /* id 7, wireType 1 =*/
      57).double(message.FloMarketPriceBTC);
      if (message.FloMarketPriceUSD != null && Object.hasOwnProperty.call(message, "FloMarketPriceUSD")) writer.uint32(
      /* id 8, wireType 1 =*/
      65).double(message.FloMarketPriceUSD);
      if (message.LtcMarketPriceUSD != null && Object.hasOwnProperty.call(message, "LtcMarketPriceUSD")) writer.uint32(
      /* id 9, wireType 1 =*/
      73).double(message.LtcMarketPriceUSD);
      if (message.NiceHashLast != null && Object.hasOwnProperty.call(message, "NiceHashLast")) writer.uint32(
      /* id 10, wireType 1 =*/
      81).double(message.NiceHashLast);
      if (message.NiceHash24hr != null && Object.hasOwnProperty.call(message, "NiceHash24hr")) writer.uint32(
      /* id 11, wireType 1 =*/
      89).double(message.NiceHash24hr);
      return writer;
    };
    /**
     * Encodes the specified HistorianDataPoint message, length delimited. Does not implicitly {@link oipProto.HistorianDataPoint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {oipProto.IHistorianDataPoint} message HistorianDataPoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    HistorianDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a HistorianDataPoint message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.HistorianDataPoint} HistorianDataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    HistorianDataPoint.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.HistorianDataPoint();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.Version = reader.int32();
            break;

          case 2:
            message.PubKey = reader.bytes();
            break;

          case 3:
            message.MiningRigRentalsLast10 = reader.double();
            break;

          case 4:
            message.MiningRigRentalsLast24Hr = reader.double();
            break;

          case 5:
            message.AutominerPoolHashrate = reader.double();
            break;

          case 6:
            message.FloNetHashRate = reader.double();
            break;

          case 7:
            message.FloMarketPriceBTC = reader.double();
            break;

          case 8:
            message.FloMarketPriceUSD = reader.double();
            break;

          case 9:
            message.LtcMarketPriceUSD = reader.double();
            break;

          case 10:
            message.NiceHashLast = reader.double();
            break;

          case 11:
            message.NiceHash24hr = reader.double();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a HistorianDataPoint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.HistorianDataPoint} HistorianDataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    HistorianDataPoint.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a HistorianDataPoint message.
     * @function verify
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    HistorianDataPoint.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.Version != null && message.hasOwnProperty("Version")) if (!$util.isInteger(message.Version)) return "Version: integer expected";
      if (message.PubKey != null && message.hasOwnProperty("PubKey")) if (!(message.PubKey && typeof message.PubKey.length === "number" || $util.isString(message.PubKey))) return "PubKey: buffer expected";
      if (message.MiningRigRentalsLast10 != null && message.hasOwnProperty("MiningRigRentalsLast10")) if (typeof message.MiningRigRentalsLast10 !== "number") return "MiningRigRentalsLast10: number expected";
      if (message.MiningRigRentalsLast24Hr != null && message.hasOwnProperty("MiningRigRentalsLast24Hr")) if (typeof message.MiningRigRentalsLast24Hr !== "number") return "MiningRigRentalsLast24Hr: number expected";
      if (message.AutominerPoolHashrate != null && message.hasOwnProperty("AutominerPoolHashrate")) if (typeof message.AutominerPoolHashrate !== "number") return "AutominerPoolHashrate: number expected";
      if (message.FloNetHashRate != null && message.hasOwnProperty("FloNetHashRate")) if (typeof message.FloNetHashRate !== "number") return "FloNetHashRate: number expected";
      if (message.FloMarketPriceBTC != null && message.hasOwnProperty("FloMarketPriceBTC")) if (typeof message.FloMarketPriceBTC !== "number") return "FloMarketPriceBTC: number expected";
      if (message.FloMarketPriceUSD != null && message.hasOwnProperty("FloMarketPriceUSD")) if (typeof message.FloMarketPriceUSD !== "number") return "FloMarketPriceUSD: number expected";
      if (message.LtcMarketPriceUSD != null && message.hasOwnProperty("LtcMarketPriceUSD")) if (typeof message.LtcMarketPriceUSD !== "number") return "LtcMarketPriceUSD: number expected";
      if (message.NiceHashLast != null && message.hasOwnProperty("NiceHashLast")) if (typeof message.NiceHashLast !== "number") return "NiceHashLast: number expected";
      if (message.NiceHash24hr != null && message.hasOwnProperty("NiceHash24hr")) if (typeof message.NiceHash24hr !== "number") return "NiceHash24hr: number expected";
      return null;
    };
    /**
     * Creates a HistorianDataPoint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.HistorianDataPoint} HistorianDataPoint
     */


    HistorianDataPoint.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.HistorianDataPoint) return object;
      var message = new $root.oipProto.HistorianDataPoint();
      if (object.Version != null) message.Version = object.Version | 0;
      if (object.PubKey != null) if (typeof object.PubKey === "string") $util.base64.decode(object.PubKey, message.PubKey = $util.newBuffer($util.base64.length(object.PubKey)), 0);else if (object.PubKey.length) message.PubKey = object.PubKey;
      if (object.MiningRigRentalsLast10 != null) message.MiningRigRentalsLast10 = Number(object.MiningRigRentalsLast10);
      if (object.MiningRigRentalsLast24Hr != null) message.MiningRigRentalsLast24Hr = Number(object.MiningRigRentalsLast24Hr);
      if (object.AutominerPoolHashrate != null) message.AutominerPoolHashrate = Number(object.AutominerPoolHashrate);
      if (object.FloNetHashRate != null) message.FloNetHashRate = Number(object.FloNetHashRate);
      if (object.FloMarketPriceBTC != null) message.FloMarketPriceBTC = Number(object.FloMarketPriceBTC);
      if (object.FloMarketPriceUSD != null) message.FloMarketPriceUSD = Number(object.FloMarketPriceUSD);
      if (object.LtcMarketPriceUSD != null) message.LtcMarketPriceUSD = Number(object.LtcMarketPriceUSD);
      if (object.NiceHashLast != null) message.NiceHashLast = Number(object.NiceHashLast);
      if (object.NiceHash24hr != null) message.NiceHash24hr = Number(object.NiceHash24hr);
      return message;
    };
    /**
     * Creates a plain object from a HistorianDataPoint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.HistorianDataPoint
     * @static
     * @param {oipProto.HistorianDataPoint} message HistorianDataPoint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    HistorianDataPoint.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        object.Version = 0;
        if (options.bytes === String) object.PubKey = "";else {
          object.PubKey = [];
          if (options.bytes !== Array) object.PubKey = $util.newBuffer(object.PubKey);
        }
        object.MiningRigRentalsLast10 = 0;
        object.MiningRigRentalsLast24Hr = 0;
        object.AutominerPoolHashrate = 0;
        object.FloNetHashRate = 0;
        object.FloMarketPriceBTC = 0;
        object.FloMarketPriceUSD = 0;
        object.LtcMarketPriceUSD = 0;
        object.NiceHashLast = 0;
        object.NiceHash24hr = 0;
      }

      if (message.Version != null && message.hasOwnProperty("Version")) object.Version = message.Version;
      if (message.PubKey != null && message.hasOwnProperty("PubKey")) object.PubKey = options.bytes === String ? $util.base64.encode(message.PubKey, 0, message.PubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.PubKey) : message.PubKey;
      if (message.MiningRigRentalsLast10 != null && message.hasOwnProperty("MiningRigRentalsLast10")) object.MiningRigRentalsLast10 = options.json && !isFinite(message.MiningRigRentalsLast10) ? String(message.MiningRigRentalsLast10) : message.MiningRigRentalsLast10;
      if (message.MiningRigRentalsLast24Hr != null && message.hasOwnProperty("MiningRigRentalsLast24Hr")) object.MiningRigRentalsLast24Hr = options.json && !isFinite(message.MiningRigRentalsLast24Hr) ? String(message.MiningRigRentalsLast24Hr) : message.MiningRigRentalsLast24Hr;
      if (message.AutominerPoolHashrate != null && message.hasOwnProperty("AutominerPoolHashrate")) object.AutominerPoolHashrate = options.json && !isFinite(message.AutominerPoolHashrate) ? String(message.AutominerPoolHashrate) : message.AutominerPoolHashrate;
      if (message.FloNetHashRate != null && message.hasOwnProperty("FloNetHashRate")) object.FloNetHashRate = options.json && !isFinite(message.FloNetHashRate) ? String(message.FloNetHashRate) : message.FloNetHashRate;
      if (message.FloMarketPriceBTC != null && message.hasOwnProperty("FloMarketPriceBTC")) object.FloMarketPriceBTC = options.json && !isFinite(message.FloMarketPriceBTC) ? String(message.FloMarketPriceBTC) : message.FloMarketPriceBTC;
      if (message.FloMarketPriceUSD != null && message.hasOwnProperty("FloMarketPriceUSD")) object.FloMarketPriceUSD = options.json && !isFinite(message.FloMarketPriceUSD) ? String(message.FloMarketPriceUSD) : message.FloMarketPriceUSD;
      if (message.LtcMarketPriceUSD != null && message.hasOwnProperty("LtcMarketPriceUSD")) object.LtcMarketPriceUSD = options.json && !isFinite(message.LtcMarketPriceUSD) ? String(message.LtcMarketPriceUSD) : message.LtcMarketPriceUSD;
      if (message.NiceHashLast != null && message.hasOwnProperty("NiceHashLast")) object.NiceHashLast = options.json && !isFinite(message.NiceHashLast) ? String(message.NiceHashLast) : message.NiceHashLast;
      if (message.NiceHash24hr != null && message.hasOwnProperty("NiceHash24hr")) object.NiceHash24hr = options.json && !isFinite(message.NiceHash24hr) ? String(message.NiceHash24hr) : message.NiceHash24hr;
      return object;
    };
    /**
     * Converts this HistorianDataPoint to JSON.
     * @function toJSON
     * @memberof oipProto.HistorianDataPoint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    HistorianDataPoint.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HistorianDataPoint;
  }();

  oipProto.HistorianPayout = function () {
    /**
     * Properties of a HistorianPayout.
     * @memberof oipProto
     * @interface IHistorianPayout
     * @property {number|null} [Version] HistorianPayout Version
     */

    /**
     * Constructs a new HistorianPayout.
     * @memberof oipProto
     * @classdesc Represents a HistorianPayout.
     * @implements IHistorianPayout
     * @constructor
     * @param {oipProto.IHistorianPayout=} [properties] Properties to set
     */
    function HistorianPayout(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * HistorianPayout Version.
     * @member {number} Version
     * @memberof oipProto.HistorianPayout
     * @instance
     */


    HistorianPayout.prototype.Version = 0;
    /**
     * Creates a new HistorianPayout instance using the specified properties.
     * @function create
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {oipProto.IHistorianPayout=} [properties] Properties to set
     * @returns {oipProto.HistorianPayout} HistorianPayout instance
     */

    HistorianPayout.create = function create(properties) {
      return new HistorianPayout(properties);
    };
    /**
     * Encodes the specified HistorianPayout message. Does not implicitly {@link oipProto.HistorianPayout.verify|verify} messages.
     * @function encode
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {oipProto.IHistorianPayout} message HistorianPayout message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    HistorianPayout.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.Version != null && Object.hasOwnProperty.call(message, "Version")) writer.uint32(
      /* id 1, wireType 0 =*/
      8).int32(message.Version);
      return writer;
    };
    /**
     * Encodes the specified HistorianPayout message, length delimited. Does not implicitly {@link oipProto.HistorianPayout.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {oipProto.IHistorianPayout} message HistorianPayout message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    HistorianPayout.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a HistorianPayout message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.HistorianPayout} HistorianPayout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    HistorianPayout.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.HistorianPayout();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.Version = reader.int32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a HistorianPayout message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.HistorianPayout} HistorianPayout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    HistorianPayout.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a HistorianPayout message.
     * @function verify
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    HistorianPayout.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.Version != null && message.hasOwnProperty("Version")) if (!$util.isInteger(message.Version)) return "Version: integer expected";
      return null;
    };
    /**
     * Creates a HistorianPayout message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.HistorianPayout} HistorianPayout
     */


    HistorianPayout.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.HistorianPayout) return object;
      var message = new $root.oipProto.HistorianPayout();
      if (object.Version != null) message.Version = object.Version | 0;
      return message;
    };
    /**
     * Creates a plain object from a HistorianPayout message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.HistorianPayout
     * @static
     * @param {oipProto.HistorianPayout} message HistorianPayout
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    HistorianPayout.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.Version = 0;
      if (message.Version != null && message.hasOwnProperty("Version")) object.Version = message.Version;
      return object;
    };
    /**
     * Converts this HistorianPayout to JSON.
     * @function toJSON
     * @memberof oipProto.HistorianPayout
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    HistorianPayout.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HistorianPayout;
  }();

  oipProto.MultiPart = function () {
    /**
     * Properties of a MultiPart.
     * @memberof oipProto
     * @interface IMultiPart
     * @property {number|null} [currentPart] MultiPart currentPart
     * @property {number|null} [countParts] MultiPart countParts
     * @property {Uint8Array|null} [rawData] MultiPart rawData
     * @property {oipProto.ITxid|null} [reference] MultiPart reference
     */

    /**
     * Constructs a new MultiPart.
     * @memberof oipProto
     * @classdesc Represents a MultiPart.
     * @implements IMultiPart
     * @constructor
     * @param {oipProto.IMultiPart=} [properties] Properties to set
     */
    function MultiPart(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * MultiPart currentPart.
     * @member {number} currentPart
     * @memberof oipProto.MultiPart
     * @instance
     */


    MultiPart.prototype.currentPart = 0;
    /**
     * MultiPart countParts.
     * @member {number} countParts
     * @memberof oipProto.MultiPart
     * @instance
     */

    MultiPart.prototype.countParts = 0;
    /**
     * MultiPart rawData.
     * @member {Uint8Array} rawData
     * @memberof oipProto.MultiPart
     * @instance
     */

    MultiPart.prototype.rawData = $util.newBuffer([]);
    /**
     * MultiPart reference.
     * @member {oipProto.ITxid|null|undefined} reference
     * @memberof oipProto.MultiPart
     * @instance
     */

    MultiPart.prototype.reference = null;
    /**
     * Creates a new MultiPart instance using the specified properties.
     * @function create
     * @memberof oipProto.MultiPart
     * @static
     * @param {oipProto.IMultiPart=} [properties] Properties to set
     * @returns {oipProto.MultiPart} MultiPart instance
     */

    MultiPart.create = function create(properties) {
      return new MultiPart(properties);
    };
    /**
     * Encodes the specified MultiPart message. Does not implicitly {@link oipProto.MultiPart.verify|verify} messages.
     * @function encode
     * @memberof oipProto.MultiPart
     * @static
     * @param {oipProto.IMultiPart} message MultiPart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    MultiPart.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.currentPart != null && Object.hasOwnProperty.call(message, "currentPart")) writer.uint32(
      /* id 1, wireType 0 =*/
      8).uint32(message.currentPart);
      if (message.countParts != null && Object.hasOwnProperty.call(message, "countParts")) writer.uint32(
      /* id 2, wireType 0 =*/
      16).uint32(message.countParts);
      if (message.rawData != null && Object.hasOwnProperty.call(message, "rawData")) writer.uint32(
      /* id 3, wireType 2 =*/
      26).bytes(message.rawData);
      if (message.reference != null && Object.hasOwnProperty.call(message, "reference")) $root.oipProto.Txid.encode(message.reference, writer.uint32(
      /* id 4, wireType 2 =*/
      34).fork()).ldelim();
      return writer;
    };
    /**
     * Encodes the specified MultiPart message, length delimited. Does not implicitly {@link oipProto.MultiPart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.MultiPart
     * @static
     * @param {oipProto.IMultiPart} message MultiPart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    MultiPart.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a MultiPart message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.MultiPart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.MultiPart} MultiPart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    MultiPart.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.MultiPart();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.currentPart = reader.uint32();
            break;

          case 2:
            message.countParts = reader.uint32();
            break;

          case 3:
            message.rawData = reader.bytes();
            break;

          case 4:
            message.reference = $root.oipProto.Txid.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a MultiPart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.MultiPart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.MultiPart} MultiPart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    MultiPart.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a MultiPart message.
     * @function verify
     * @memberof oipProto.MultiPart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    MultiPart.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.currentPart != null && message.hasOwnProperty("currentPart")) if (!$util.isInteger(message.currentPart)) return "currentPart: integer expected";
      if (message.countParts != null && message.hasOwnProperty("countParts")) if (!$util.isInteger(message.countParts)) return "countParts: integer expected";
      if (message.rawData != null && message.hasOwnProperty("rawData")) if (!(message.rawData && typeof message.rawData.length === "number" || $util.isString(message.rawData))) return "rawData: buffer expected";

      if (message.reference != null && message.hasOwnProperty("reference")) {
        var error = $root.oipProto.Txid.verify(message.reference);
        if (error) return "reference." + error;
      }

      return null;
    };
    /**
     * Creates a MultiPart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.MultiPart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.MultiPart} MultiPart
     */


    MultiPart.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.MultiPart) return object;
      var message = new $root.oipProto.MultiPart();
      if (object.currentPart != null) message.currentPart = object.currentPart >>> 0;
      if (object.countParts != null) message.countParts = object.countParts >>> 0;
      if (object.rawData != null) if (typeof object.rawData === "string") $util.base64.decode(object.rawData, message.rawData = $util.newBuffer($util.base64.length(object.rawData)), 0);else if (object.rawData.length) message.rawData = object.rawData;

      if (object.reference != null) {
        if (typeof object.reference !== "object") throw TypeError(".oipProto.MultiPart.reference: object expected");
        message.reference = $root.oipProto.Txid.fromObject(object.reference);
      }

      return message;
    };
    /**
     * Creates a plain object from a MultiPart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.MultiPart
     * @static
     * @param {oipProto.MultiPart} message MultiPart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    MultiPart.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        object.currentPart = 0;
        object.countParts = 0;
        if (options.bytes === String) object.rawData = "";else {
          object.rawData = [];
          if (options.bytes !== Array) object.rawData = $util.newBuffer(object.rawData);
        }
        object.reference = null;
      }

      if (message.currentPart != null && message.hasOwnProperty("currentPart")) object.currentPart = message.currentPart;
      if (message.countParts != null && message.hasOwnProperty("countParts")) object.countParts = message.countParts;
      if (message.rawData != null && message.hasOwnProperty("rawData")) object.rawData = options.bytes === String ? $util.base64.encode(message.rawData, 0, message.rawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawData) : message.rawData;
      if (message.reference != null && message.hasOwnProperty("reference")) object.reference = $root.oipProto.Txid.toObject(message.reference, options);
      return object;
    };
    /**
     * Converts this MultiPart to JSON.
     * @function toJSON
     * @memberof oipProto.MultiPart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    MultiPart.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MultiPart;
  }();

  oipProto.Txid = function () {
    /**
     * Properties of a Txid.
     * @memberof oipProto
     * @interface ITxid
     * @property {Uint8Array|null} [raw] Txid raw
     */

    /**
     * Constructs a new Txid.
     * @memberof oipProto
     * @classdesc Represents a Txid.
     * @implements ITxid
     * @constructor
     * @param {oipProto.ITxid=} [properties] Properties to set
     */
    function Txid(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Txid raw.
     * @member {Uint8Array} raw
     * @memberof oipProto.Txid
     * @instance
     */


    Txid.prototype.raw = $util.newBuffer([]);
    /**
     * Creates a new Txid instance using the specified properties.
     * @function create
     * @memberof oipProto.Txid
     * @static
     * @param {oipProto.ITxid=} [properties] Properties to set
     * @returns {oipProto.Txid} Txid instance
     */

    Txid.create = function create(properties) {
      return new Txid(properties);
    };
    /**
     * Encodes the specified Txid message. Does not implicitly {@link oipProto.Txid.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Txid
     * @static
     * @param {oipProto.ITxid} message Txid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Txid.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.raw != null && Object.hasOwnProperty.call(message, "raw")) writer.uint32(
      /* id 1, wireType 2 =*/
      10).bytes(message.raw);
      return writer;
    };
    /**
     * Encodes the specified Txid message, length delimited. Does not implicitly {@link oipProto.Txid.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Txid
     * @static
     * @param {oipProto.ITxid} message Txid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Txid.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Txid message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Txid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Txid} Txid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Txid.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Txid();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.raw = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a Txid message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Txid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Txid} Txid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Txid.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Txid message.
     * @function verify
     * @memberof oipProto.Txid
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Txid.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.raw != null && message.hasOwnProperty("raw")) if (!(message.raw && typeof message.raw.length === "number" || $util.isString(message.raw))) return "raw: buffer expected";
      return null;
    };
    /**
     * Creates a Txid message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Txid
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Txid} Txid
     */


    Txid.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Txid) return object;
      var message = new $root.oipProto.Txid();
      if (object.raw != null) if (typeof object.raw === "string") $util.base64.decode(object.raw, message.raw = $util.newBuffer($util.base64.length(object.raw)), 0);else if (object.raw.length) message.raw = object.raw;
      return message;
    };
    /**
     * Creates a plain object from a Txid message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Txid
     * @static
     * @param {oipProto.Txid} message Txid
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Txid.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) if (options.bytes === String) object.raw = "";else {
        object.raw = [];
        if (options.bytes !== Array) object.raw = $util.newBuffer(object.raw);
      }
      if (message.raw != null && message.hasOwnProperty("raw")) object.raw = options.bytes === String ? $util.base64.encode(message.raw, 0, message.raw.length) : options.bytes === Array ? Array.prototype.slice.call(message.raw) : message.raw;
      return object;
    };
    /**
     * Converts this Txid to JSON.
     * @function toJSON
     * @memberof oipProto.Txid
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Txid.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Txid;
  }();

  oipProto.NormalizeRecordProto = function () {
    /**
     * Properties of a NormalizeRecordProto.
     * @memberof oipProto
     * @interface INormalizeRecordProto
     * @property {number|Long|null} [mainTemplate] NormalizeRecordProto mainTemplate
     * @property {Array.<oipProto.INormalField>|null} [fields] NormalizeRecordProto fields
     */

    /**
     * Constructs a new NormalizeRecordProto.
     * @memberof oipProto
     * @classdesc Represents a NormalizeRecordProto.
     * @implements INormalizeRecordProto
     * @constructor
     * @param {oipProto.INormalizeRecordProto=} [properties] Properties to set
     */
    function NormalizeRecordProto(properties) {
      this.fields = [];
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * NormalizeRecordProto mainTemplate.
     * @member {number|Long} mainTemplate
     * @memberof oipProto.NormalizeRecordProto
     * @instance
     */


    NormalizeRecordProto.prototype.mainTemplate = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    /**
     * NormalizeRecordProto fields.
     * @member {Array.<oipProto.INormalField>} fields
     * @memberof oipProto.NormalizeRecordProto
     * @instance
     */

    NormalizeRecordProto.prototype.fields = $util.emptyArray;
    /**
     * Creates a new NormalizeRecordProto instance using the specified properties.
     * @function create
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {oipProto.INormalizeRecordProto=} [properties] Properties to set
     * @returns {oipProto.NormalizeRecordProto} NormalizeRecordProto instance
     */

    NormalizeRecordProto.create = function create(properties) {
      return new NormalizeRecordProto(properties);
    };
    /**
     * Encodes the specified NormalizeRecordProto message. Does not implicitly {@link oipProto.NormalizeRecordProto.verify|verify} messages.
     * @function encode
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {oipProto.INormalizeRecordProto} message NormalizeRecordProto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    NormalizeRecordProto.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.mainTemplate != null && Object.hasOwnProperty.call(message, "mainTemplate")) writer.uint32(
      /* id 1, wireType 0 =*/
      8).uint64(message.mainTemplate);
      if (message.fields != null && message.fields.length) for (var i = 0; i < message.fields.length; ++i) $root.oipProto.NormalField.encode(message.fields[i], writer.uint32(
      /* id 2, wireType 2 =*/
      18).fork()).ldelim();
      return writer;
    };
    /**
     * Encodes the specified NormalizeRecordProto message, length delimited. Does not implicitly {@link oipProto.NormalizeRecordProto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {oipProto.INormalizeRecordProto} message NormalizeRecordProto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    NormalizeRecordProto.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a NormalizeRecordProto message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.NormalizeRecordProto} NormalizeRecordProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    NormalizeRecordProto.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.NormalizeRecordProto();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.mainTemplate = reader.uint64();
            break;

          case 2:
            if (!(message.fields && message.fields.length)) message.fields = [];
            message.fields.push($root.oipProto.NormalField.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a NormalizeRecordProto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.NormalizeRecordProto} NormalizeRecordProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    NormalizeRecordProto.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a NormalizeRecordProto message.
     * @function verify
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    NormalizeRecordProto.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.mainTemplate != null && message.hasOwnProperty("mainTemplate")) if (!$util.isInteger(message.mainTemplate) && !(message.mainTemplate && $util.isInteger(message.mainTemplate.low) && $util.isInteger(message.mainTemplate.high))) return "mainTemplate: integer|Long expected";

      if (message.fields != null && message.hasOwnProperty("fields")) {
        if (!Array.isArray(message.fields)) return "fields: array expected";

        for (var i = 0; i < message.fields.length; ++i) {
          var error = $root.oipProto.NormalField.verify(message.fields[i]);
          if (error) return "fields." + error;
        }
      }

      return null;
    };
    /**
     * Creates a NormalizeRecordProto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.NormalizeRecordProto} NormalizeRecordProto
     */


    NormalizeRecordProto.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.NormalizeRecordProto) return object;
      var message = new $root.oipProto.NormalizeRecordProto();
      if (object.mainTemplate != null) if ($util.Long) (message.mainTemplate = $util.Long.fromValue(object.mainTemplate)).unsigned = true;else if (typeof object.mainTemplate === "string") message.mainTemplate = parseInt(object.mainTemplate, 10);else if (typeof object.mainTemplate === "number") message.mainTemplate = object.mainTemplate;else if (typeof object.mainTemplate === "object") message.mainTemplate = new $util.LongBits(object.mainTemplate.low >>> 0, object.mainTemplate.high >>> 0).toNumber(true);

      if (object.fields) {
        if (!Array.isArray(object.fields)) throw TypeError(".oipProto.NormalizeRecordProto.fields: array expected");
        message.fields = [];

        for (var i = 0; i < object.fields.length; ++i) {
          if (typeof object.fields[i] !== "object") throw TypeError(".oipProto.NormalizeRecordProto.fields: object expected");
          message.fields[i] = $root.oipProto.NormalField.fromObject(object.fields[i]);
        }
      }

      return message;
    };
    /**
     * Creates a plain object from a NormalizeRecordProto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.NormalizeRecordProto
     * @static
     * @param {oipProto.NormalizeRecordProto} message NormalizeRecordProto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    NormalizeRecordProto.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.fields = [];
      if (options.defaults) if ($util.Long) {
        var long = new $util.Long(0, 0, true);
        object.mainTemplate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
      } else object.mainTemplate = options.longs === String ? "0" : 0;
      if (message.mainTemplate != null && message.hasOwnProperty("mainTemplate")) if (typeof message.mainTemplate === "number") object.mainTemplate = options.longs === String ? String(message.mainTemplate) : message.mainTemplate;else object.mainTemplate = options.longs === String ? $util.Long.prototype.toString.call(message.mainTemplate) : options.longs === Number ? new $util.LongBits(message.mainTemplate.low >>> 0, message.mainTemplate.high >>> 0).toNumber(true) : message.mainTemplate;

      if (message.fields && message.fields.length) {
        object.fields = [];

        for (var j = 0; j < message.fields.length; ++j) object.fields[j] = $root.oipProto.NormalField.toObject(message.fields[j], options);
      }

      return object;
    };
    /**
     * Converts this NormalizeRecordProto to JSON.
     * @function toJSON
     * @memberof oipProto.NormalizeRecordProto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    NormalizeRecordProto.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NormalizeRecordProto;
  }();

  oipProto.NormalField = function () {
    /**
     * Properties of a NormalField.
     * @memberof oipProto
     * @interface INormalField
     * @property {string|null} [name] NormalField name
     * @property {Array.<oipProto.IField>|null} [path] NormalField path
     */

    /**
     * Constructs a new NormalField.
     * @memberof oipProto
     * @classdesc Represents a NormalField.
     * @implements INormalField
     * @constructor
     * @param {oipProto.INormalField=} [properties] Properties to set
     */
    function NormalField(properties) {
      this.path = [];
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * NormalField name.
     * @member {string} name
     * @memberof oipProto.NormalField
     * @instance
     */


    NormalField.prototype.name = "";
    /**
     * NormalField path.
     * @member {Array.<oipProto.IField>} path
     * @memberof oipProto.NormalField
     * @instance
     */

    NormalField.prototype.path = $util.emptyArray;
    /**
     * Creates a new NormalField instance using the specified properties.
     * @function create
     * @memberof oipProto.NormalField
     * @static
     * @param {oipProto.INormalField=} [properties] Properties to set
     * @returns {oipProto.NormalField} NormalField instance
     */

    NormalField.create = function create(properties) {
      return new NormalField(properties);
    };
    /**
     * Encodes the specified NormalField message. Does not implicitly {@link oipProto.NormalField.verify|verify} messages.
     * @function encode
     * @memberof oipProto.NormalField
     * @static
     * @param {oipProto.INormalField} message NormalField message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    NormalField.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.name != null && Object.hasOwnProperty.call(message, "name")) writer.uint32(
      /* id 1, wireType 2 =*/
      10).string(message.name);
      if (message.path != null && message.path.length) for (var i = 0; i < message.path.length; ++i) $root.oipProto.Field.encode(message.path[i], writer.uint32(
      /* id 2, wireType 2 =*/
      18).fork()).ldelim();
      return writer;
    };
    /**
     * Encodes the specified NormalField message, length delimited. Does not implicitly {@link oipProto.NormalField.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.NormalField
     * @static
     * @param {oipProto.INormalField} message NormalField message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    NormalField.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a NormalField message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.NormalField
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.NormalField} NormalField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    NormalField.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.NormalField();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            if (!(message.path && message.path.length)) message.path = [];
            message.path.push($root.oipProto.Field.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a NormalField message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.NormalField
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.NormalField} NormalField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    NormalField.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a NormalField message.
     * @function verify
     * @memberof oipProto.NormalField
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    NormalField.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";

      if (message.path != null && message.hasOwnProperty("path")) {
        if (!Array.isArray(message.path)) return "path: array expected";

        for (var i = 0; i < message.path.length; ++i) {
          var error = $root.oipProto.Field.verify(message.path[i]);
          if (error) return "path." + error;
        }
      }

      return null;
    };
    /**
     * Creates a NormalField message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.NormalField
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.NormalField} NormalField
     */


    NormalField.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.NormalField) return object;
      var message = new $root.oipProto.NormalField();
      if (object.name != null) message.name = String(object.name);

      if (object.path) {
        if (!Array.isArray(object.path)) throw TypeError(".oipProto.NormalField.path: array expected");
        message.path = [];

        for (var i = 0; i < object.path.length; ++i) {
          if (typeof object.path[i] !== "object") throw TypeError(".oipProto.NormalField.path: object expected");
          message.path[i] = $root.oipProto.Field.fromObject(object.path[i]);
        }
      }

      return message;
    };
    /**
     * Creates a plain object from a NormalField message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.NormalField
     * @static
     * @param {oipProto.NormalField} message NormalField
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    NormalField.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.path = [];
      if (options.defaults) object.name = "";
      if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;

      if (message.path && message.path.length) {
        object.path = [];

        for (var j = 0; j < message.path.length; ++j) object.path[j] = $root.oipProto.Field.toObject(message.path[j], options);
      }

      return object;
    };
    /**
     * Converts this NormalField to JSON.
     * @function toJSON
     * @memberof oipProto.NormalField
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    NormalField.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NormalField;
  }();

  oipProto.Field = function () {
    /**
     * Properties of a Field.
     * @memberof oipProto
     * @interface IField
     * @property {number|null} [tag] Field tag
     * @property {oipProto.Field.Type|null} [type] Field type
     * @property {number|Long|null} [template] Field template
     */

    /**
     * Constructs a new Field.
     * @memberof oipProto
     * @classdesc Represents a Field.
     * @implements IField
     * @constructor
     * @param {oipProto.IField=} [properties] Properties to set
     */
    function Field(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Field tag.
     * @member {number} tag
     * @memberof oipProto.Field
     * @instance
     */


    Field.prototype.tag = 0;
    /**
     * Field type.
     * @member {oipProto.Field.Type} type
     * @memberof oipProto.Field
     * @instance
     */

    Field.prototype.type = 0;
    /**
     * Field template.
     * @member {number|Long} template
     * @memberof oipProto.Field
     * @instance
     */

    Field.prototype.template = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    /**
     * Creates a new Field instance using the specified properties.
     * @function create
     * @memberof oipProto.Field
     * @static
     * @param {oipProto.IField=} [properties] Properties to set
     * @returns {oipProto.Field} Field instance
     */

    Field.create = function create(properties) {
      return new Field(properties);
    };
    /**
     * Encodes the specified Field message. Does not implicitly {@link oipProto.Field.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Field
     * @static
     * @param {oipProto.IField} message Field message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Field.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.tag != null && Object.hasOwnProperty.call(message, "tag")) writer.uint32(
      /* id 1, wireType 0 =*/
      8).int32(message.tag);
      if (message.type != null && Object.hasOwnProperty.call(message, "type")) writer.uint32(
      /* id 2, wireType 0 =*/
      16).int32(message.type);
      if (message.template != null && Object.hasOwnProperty.call(message, "template")) writer.uint32(
      /* id 3, wireType 0 =*/
      24).uint64(message.template);
      return writer;
    };
    /**
     * Encodes the specified Field message, length delimited. Does not implicitly {@link oipProto.Field.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Field
     * @static
     * @param {oipProto.IField} message Field message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Field.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Field message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Field
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Field} Field
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Field.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Field();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.tag = reader.int32();
            break;

          case 2:
            message.type = reader.int32();
            break;

          case 3:
            message.template = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a Field message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Field
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Field} Field
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Field.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Field message.
     * @function verify
     * @memberof oipProto.Field
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Field.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.tag != null && message.hasOwnProperty("tag")) if (!$util.isInteger(message.tag)) return "tag: integer expected";
      if (message.type != null && message.hasOwnProperty("type")) switch (message.type) {
        default:
          return "type: enum value expected";

        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          break;
      }
      if (message.template != null && message.hasOwnProperty("template")) if (!$util.isInteger(message.template) && !(message.template && $util.isInteger(message.template.low) && $util.isInteger(message.template.high))) return "template: integer|Long expected";
      return null;
    };
    /**
     * Creates a Field message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Field
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Field} Field
     */


    Field.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Field) return object;
      var message = new $root.oipProto.Field();
      if (object.tag != null) message.tag = object.tag | 0;

      switch (object.type) {
        case "TYPE_ERROR":
        case 0:
          message.type = 0;
          break;

        case "TYPE_DOUBLE":
        case 1:
          message.type = 1;
          break;

        case "TYPE_FLOAT":
        case 2:
          message.type = 2;
          break;

        case "TYPE_INT64":
        case 3:
          message.type = 3;
          break;

        case "TYPE_UINT64":
        case 4:
          message.type = 4;
          break;

        case "TYPE_INT32":
        case 5:
          message.type = 5;
          break;

        case "TYPE_FIXED64":
        case 6:
          message.type = 6;
          break;

        case "TYPE_FIXED32":
        case 7:
          message.type = 7;
          break;

        case "TYPE_BOOL":
        case 8:
          message.type = 8;
          break;

        case "TYPE_STRING":
        case 9:
          message.type = 9;
          break;

        case "TYPE_GROUP":
        case 10:
          message.type = 10;
          break;

        case "TYPE_MESSAGE":
        case 11:
          message.type = 11;
          break;

        case "TYPE_BYTES":
        case 12:
          message.type = 12;
          break;

        case "TYPE_UINT32":
        case 13:
          message.type = 13;
          break;

        case "TYPE_ENUM":
        case 14:
          message.type = 14;
          break;

        case "TYPE_SFIXED32":
        case 15:
          message.type = 15;
          break;

        case "TYPE_SFIXED64":
        case 16:
          message.type = 16;
          break;

        case "TYPE_SINT32":
        case 17:
          message.type = 17;
          break;

        case "TYPE_SINT64":
        case 18:
          message.type = 18;
          break;
      }

      if (object.template != null) if ($util.Long) (message.template = $util.Long.fromValue(object.template)).unsigned = true;else if (typeof object.template === "string") message.template = parseInt(object.template, 10);else if (typeof object.template === "number") message.template = object.template;else if (typeof object.template === "object") message.template = new $util.LongBits(object.template.low >>> 0, object.template.high >>> 0).toNumber(true);
      return message;
    };
    /**
     * Creates a plain object from a Field message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Field
     * @static
     * @param {oipProto.Field} message Field
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Field.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        object.tag = 0;
        object.type = options.enums === String ? "TYPE_ERROR" : 0;

        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.template = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else object.template = options.longs === String ? "0" : 0;
      }

      if (message.tag != null && message.hasOwnProperty("tag")) object.tag = message.tag;
      if (message.type != null && message.hasOwnProperty("type")) object.type = options.enums === String ? $root.oipProto.Field.Type[message.type] : message.type;
      if (message.template != null && message.hasOwnProperty("template")) if (typeof message.template === "number") object.template = options.longs === String ? String(message.template) : message.template;else object.template = options.longs === String ? $util.Long.prototype.toString.call(message.template) : options.longs === Number ? new $util.LongBits(message.template.low >>> 0, message.template.high >>> 0).toNumber(true) : message.template;
      return object;
    };
    /**
     * Converts this Field to JSON.
     * @function toJSON
     * @memberof oipProto.Field
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Field.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Type enum.
     * @name oipProto.Field.Type
     * @enum {number}
     * @property {number} TYPE_ERROR=0 TYPE_ERROR value
     * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
     * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
     * @property {number} TYPE_INT64=3 TYPE_INT64 value
     * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
     * @property {number} TYPE_INT32=5 TYPE_INT32 value
     * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
     * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
     * @property {number} TYPE_BOOL=8 TYPE_BOOL value
     * @property {number} TYPE_STRING=9 TYPE_STRING value
     * @property {number} TYPE_GROUP=10 TYPE_GROUP value
     * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
     * @property {number} TYPE_BYTES=12 TYPE_BYTES value
     * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
     * @property {number} TYPE_ENUM=14 TYPE_ENUM value
     * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
     * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
     * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
     * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
     */


    Field.Type = function () {
      var valuesById = {},
          values = Object.create(valuesById);
      values[valuesById[0] = "TYPE_ERROR"] = 0;
      values[valuesById[1] = "TYPE_DOUBLE"] = 1;
      values[valuesById[2] = "TYPE_FLOAT"] = 2;
      values[valuesById[3] = "TYPE_INT64"] = 3;
      values[valuesById[4] = "TYPE_UINT64"] = 4;
      values[valuesById[5] = "TYPE_INT32"] = 5;
      values[valuesById[6] = "TYPE_FIXED64"] = 6;
      values[valuesById[7] = "TYPE_FIXED32"] = 7;
      values[valuesById[8] = "TYPE_BOOL"] = 8;
      values[valuesById[9] = "TYPE_STRING"] = 9;
      values[valuesById[10] = "TYPE_GROUP"] = 10;
      values[valuesById[11] = "TYPE_MESSAGE"] = 11;
      values[valuesById[12] = "TYPE_BYTES"] = 12;
      values[valuesById[13] = "TYPE_UINT32"] = 13;
      values[valuesById[14] = "TYPE_ENUM"] = 14;
      values[valuesById[15] = "TYPE_SFIXED32"] = 15;
      values[valuesById[16] = "TYPE_SFIXED64"] = 16;
      values[valuesById[17] = "TYPE_SINT32"] = 17;
      values[valuesById[18] = "TYPE_SINT64"] = 18;
      return values;
    }();

    return Field;
  }();

  oipProto.OipFive = function () {
    /**
     * Properties of an OipFive.
     * @memberof oipProto
     * @interface IOipFive
     * @property {oipProto.IRecordTemplateProto|null} [recordTemplate] OipFive recordTemplate
     * @property {oipProto.IRecordProto|null} [record] OipFive record
     * @property {oipProto.INormalizeRecordProto|null} [normalize] OipFive normalize
     * @property {oipProto.ITransfer|null} [transfer] OipFive transfer
     * @property {oipProto.IDeactivate|null} [deactivate] OipFive deactivate
     * @property {oipProto.IEdit|null} [edit] OipFive edit
     */

    /**
     * Constructs a new OipFive.
     * @memberof oipProto
     * @classdesc Represents an OipFive.
     * @implements IOipFive
     * @constructor
     * @param {oipProto.IOipFive=} [properties] Properties to set
     */
    function OipFive(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * OipFive recordTemplate.
     * @member {oipProto.IRecordTemplateProto|null|undefined} recordTemplate
     * @memberof oipProto.OipFive
     * @instance
     */


    OipFive.prototype.recordTemplate = null;
    /**
     * OipFive record.
     * @member {oipProto.IRecordProto|null|undefined} record
     * @memberof oipProto.OipFive
     * @instance
     */

    OipFive.prototype.record = null;
    /**
     * OipFive normalize.
     * @member {oipProto.INormalizeRecordProto|null|undefined} normalize
     * @memberof oipProto.OipFive
     * @instance
     */

    OipFive.prototype.normalize = null;
    /**
     * OipFive transfer.
     * @member {oipProto.ITransfer|null|undefined} transfer
     * @memberof oipProto.OipFive
     * @instance
     */

    OipFive.prototype.transfer = null;
    /**
     * OipFive deactivate.
     * @member {oipProto.IDeactivate|null|undefined} deactivate
     * @memberof oipProto.OipFive
     * @instance
     */

    OipFive.prototype.deactivate = null;
    /**
     * OipFive edit.
     * @member {oipProto.IEdit|null|undefined} edit
     * @memberof oipProto.OipFive
     * @instance
     */

    OipFive.prototype.edit = null;
    /**
     * Creates a new OipFive instance using the specified properties.
     * @function create
     * @memberof oipProto.OipFive
     * @static
     * @param {oipProto.IOipFive=} [properties] Properties to set
     * @returns {oipProto.OipFive} OipFive instance
     */

    OipFive.create = function create(properties) {
      return new OipFive(properties);
    };
    /**
     * Encodes the specified OipFive message. Does not implicitly {@link oipProto.OipFive.verify|verify} messages.
     * @function encode
     * @memberof oipProto.OipFive
     * @static
     * @param {oipProto.IOipFive} message OipFive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    OipFive.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.recordTemplate != null && Object.hasOwnProperty.call(message, "recordTemplate")) $root.oipProto.RecordTemplateProto.encode(message.recordTemplate, writer.uint32(
      /* id 1, wireType 2 =*/
      10).fork()).ldelim();
      if (message.record != null && Object.hasOwnProperty.call(message, "record")) $root.oipProto.RecordProto.encode(message.record, writer.uint32(
      /* id 2, wireType 2 =*/
      18).fork()).ldelim();
      if (message.normalize != null && Object.hasOwnProperty.call(message, "normalize")) $root.oipProto.NormalizeRecordProto.encode(message.normalize, writer.uint32(
      /* id 3, wireType 2 =*/
      26).fork()).ldelim();
      if (message.transfer != null && Object.hasOwnProperty.call(message, "transfer")) $root.oipProto.Transfer.encode(message.transfer, writer.uint32(
      /* id 7, wireType 2 =*/
      58).fork()).ldelim();
      if (message.deactivate != null && Object.hasOwnProperty.call(message, "deactivate")) $root.oipProto.Deactivate.encode(message.deactivate, writer.uint32(
      /* id 8, wireType 2 =*/
      66).fork()).ldelim();
      if (message.edit != null && Object.hasOwnProperty.call(message, "edit")) $root.oipProto.Edit.encode(message.edit, writer.uint32(
      /* id 9, wireType 2 =*/
      74).fork()).ldelim();
      return writer;
    };
    /**
     * Encodes the specified OipFive message, length delimited. Does not implicitly {@link oipProto.OipFive.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.OipFive
     * @static
     * @param {oipProto.IOipFive} message OipFive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    OipFive.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes an OipFive message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.OipFive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.OipFive} OipFive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    OipFive.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.OipFive();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.recordTemplate = $root.oipProto.RecordTemplateProto.decode(reader, reader.uint32());
            break;

          case 2:
            message.record = $root.oipProto.RecordProto.decode(reader, reader.uint32());
            break;

          case 3:
            message.normalize = $root.oipProto.NormalizeRecordProto.decode(reader, reader.uint32());
            break;

          case 7:
            message.transfer = $root.oipProto.Transfer.decode(reader, reader.uint32());
            break;

          case 8:
            message.deactivate = $root.oipProto.Deactivate.decode(reader, reader.uint32());
            break;

          case 9:
            message.edit = $root.oipProto.Edit.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes an OipFive message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.OipFive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.OipFive} OipFive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    OipFive.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies an OipFive message.
     * @function verify
     * @memberof oipProto.OipFive
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    OipFive.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";

      if (message.recordTemplate != null && message.hasOwnProperty("recordTemplate")) {
        var error = $root.oipProto.RecordTemplateProto.verify(message.recordTemplate);
        if (error) return "recordTemplate." + error;
      }

      if (message.record != null && message.hasOwnProperty("record")) {
        var error = $root.oipProto.RecordProto.verify(message.record);
        if (error) return "record." + error;
      }

      if (message.normalize != null && message.hasOwnProperty("normalize")) {
        var error = $root.oipProto.NormalizeRecordProto.verify(message.normalize);
        if (error) return "normalize." + error;
      }

      if (message.transfer != null && message.hasOwnProperty("transfer")) {
        var error = $root.oipProto.Transfer.verify(message.transfer);
        if (error) return "transfer." + error;
      }

      if (message.deactivate != null && message.hasOwnProperty("deactivate")) {
        var error = $root.oipProto.Deactivate.verify(message.deactivate);
        if (error) return "deactivate." + error;
      }

      if (message.edit != null && message.hasOwnProperty("edit")) {
        var error = $root.oipProto.Edit.verify(message.edit);
        if (error) return "edit." + error;
      }

      return null;
    };
    /**
     * Creates an OipFive message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.OipFive
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.OipFive} OipFive
     */


    OipFive.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.OipFive) return object;
      var message = new $root.oipProto.OipFive();

      if (object.recordTemplate != null) {
        if (typeof object.recordTemplate !== "object") throw TypeError(".oipProto.OipFive.recordTemplate: object expected");
        message.recordTemplate = $root.oipProto.RecordTemplateProto.fromObject(object.recordTemplate);
      }

      if (object.record != null) {
        if (typeof object.record !== "object") throw TypeError(".oipProto.OipFive.record: object expected");
        message.record = $root.oipProto.RecordProto.fromObject(object.record);
      }

      if (object.normalize != null) {
        if (typeof object.normalize !== "object") throw TypeError(".oipProto.OipFive.normalize: object expected");
        message.normalize = $root.oipProto.NormalizeRecordProto.fromObject(object.normalize);
      }

      if (object.transfer != null) {
        if (typeof object.transfer !== "object") throw TypeError(".oipProto.OipFive.transfer: object expected");
        message.transfer = $root.oipProto.Transfer.fromObject(object.transfer);
      }

      if (object.deactivate != null) {
        if (typeof object.deactivate !== "object") throw TypeError(".oipProto.OipFive.deactivate: object expected");
        message.deactivate = $root.oipProto.Deactivate.fromObject(object.deactivate);
      }

      if (object.edit != null) {
        if (typeof object.edit !== "object") throw TypeError(".oipProto.OipFive.edit: object expected");
        message.edit = $root.oipProto.Edit.fromObject(object.edit);
      }

      return message;
    };
    /**
     * Creates a plain object from an OipFive message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.OipFive
     * @static
     * @param {oipProto.OipFive} message OipFive
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    OipFive.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        object.recordTemplate = null;
        object.record = null;
        object.normalize = null;
        object.transfer = null;
        object.deactivate = null;
        object.edit = null;
      }

      if (message.recordTemplate != null && message.hasOwnProperty("recordTemplate")) object.recordTemplate = $root.oipProto.RecordTemplateProto.toObject(message.recordTemplate, options);
      if (message.record != null && message.hasOwnProperty("record")) object.record = $root.oipProto.RecordProto.toObject(message.record, options);
      if (message.normalize != null && message.hasOwnProperty("normalize")) object.normalize = $root.oipProto.NormalizeRecordProto.toObject(message.normalize, options);
      if (message.transfer != null && message.hasOwnProperty("transfer")) object.transfer = $root.oipProto.Transfer.toObject(message.transfer, options);
      if (message.deactivate != null && message.hasOwnProperty("deactivate")) object.deactivate = $root.oipProto.Deactivate.toObject(message.deactivate, options);
      if (message.edit != null && message.hasOwnProperty("edit")) object.edit = $root.oipProto.Edit.toObject(message.edit, options);
      return object;
    };
    /**
     * Converts this OipFive to JSON.
     * @function toJSON
     * @memberof oipProto.OipFive
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    OipFive.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OipFive;
  }();

  oipProto.Transfer = function () {
    /**
     * Properties of a Transfer.
     * @memberof oipProto
     * @interface ITransfer
     */

    /**
     * Constructs a new Transfer.
     * @memberof oipProto
     * @classdesc Represents a Transfer.
     * @implements ITransfer
     * @constructor
     * @param {oipProto.ITransfer=} [properties] Properties to set
     */
    function Transfer(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new Transfer instance using the specified properties.
     * @function create
     * @memberof oipProto.Transfer
     * @static
     * @param {oipProto.ITransfer=} [properties] Properties to set
     * @returns {oipProto.Transfer} Transfer instance
     */


    Transfer.create = function create(properties) {
      return new Transfer(properties);
    };
    /**
     * Encodes the specified Transfer message. Does not implicitly {@link oipProto.Transfer.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Transfer
     * @static
     * @param {oipProto.ITransfer} message Transfer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Transfer.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };
    /**
     * Encodes the specified Transfer message, length delimited. Does not implicitly {@link oipProto.Transfer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Transfer
     * @static
     * @param {oipProto.ITransfer} message Transfer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Transfer.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Transfer message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Transfer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Transfer} Transfer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Transfer.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Transfer();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a Transfer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Transfer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Transfer} Transfer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Transfer.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Transfer message.
     * @function verify
     * @memberof oipProto.Transfer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Transfer.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      return null;
    };
    /**
     * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Transfer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Transfer} Transfer
     */


    Transfer.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Transfer) return object;
      return new $root.oipProto.Transfer();
    };
    /**
     * Creates a plain object from a Transfer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Transfer
     * @static
     * @param {oipProto.Transfer} message Transfer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Transfer.toObject = function toObject() {
      return {};
    };
    /**
     * Converts this Transfer to JSON.
     * @function toJSON
     * @memberof oipProto.Transfer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Transfer.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Transfer;
  }();

  oipProto.Deactivate = function () {
    /**
     * Properties of a Deactivate.
     * @memberof oipProto
     * @interface IDeactivate
     */

    /**
     * Constructs a new Deactivate.
     * @memberof oipProto
     * @classdesc Represents a Deactivate.
     * @implements IDeactivate
     * @constructor
     * @param {oipProto.IDeactivate=} [properties] Properties to set
     */
    function Deactivate(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new Deactivate instance using the specified properties.
     * @function create
     * @memberof oipProto.Deactivate
     * @static
     * @param {oipProto.IDeactivate=} [properties] Properties to set
     * @returns {oipProto.Deactivate} Deactivate instance
     */


    Deactivate.create = function create(properties) {
      return new Deactivate(properties);
    };
    /**
     * Encodes the specified Deactivate message. Does not implicitly {@link oipProto.Deactivate.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Deactivate
     * @static
     * @param {oipProto.IDeactivate} message Deactivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Deactivate.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };
    /**
     * Encodes the specified Deactivate message, length delimited. Does not implicitly {@link oipProto.Deactivate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Deactivate
     * @static
     * @param {oipProto.IDeactivate} message Deactivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Deactivate.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Deactivate message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Deactivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Deactivate} Deactivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Deactivate.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Deactivate();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a Deactivate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Deactivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Deactivate} Deactivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Deactivate.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Deactivate message.
     * @function verify
     * @memberof oipProto.Deactivate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Deactivate.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      return null;
    };
    /**
     * Creates a Deactivate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Deactivate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Deactivate} Deactivate
     */


    Deactivate.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Deactivate) return object;
      return new $root.oipProto.Deactivate();
    };
    /**
     * Creates a plain object from a Deactivate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Deactivate
     * @static
     * @param {oipProto.Deactivate} message Deactivate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Deactivate.toObject = function toObject() {
      return {};
    };
    /**
     * Converts this Deactivate to JSON.
     * @function toJSON
     * @memberof oipProto.Deactivate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Deactivate.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Deactivate;
  }();

  oipProto.Edit = function () {
    /**
     * Properties of an Edit.
     * @memberof oipProto
     * @interface IEdit
     */

    /**
     * Constructs a new Edit.
     * @memberof oipProto
     * @classdesc Represents an Edit.
     * @implements IEdit
     * @constructor
     * @param {oipProto.IEdit=} [properties] Properties to set
     */
    function Edit(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new Edit instance using the specified properties.
     * @function create
     * @memberof oipProto.Edit
     * @static
     * @param {oipProto.IEdit=} [properties] Properties to set
     * @returns {oipProto.Edit} Edit instance
     */


    Edit.create = function create(properties) {
      return new Edit(properties);
    };
    /**
     * Encodes the specified Edit message. Does not implicitly {@link oipProto.Edit.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Edit
     * @static
     * @param {oipProto.IEdit} message Edit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Edit.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };
    /**
     * Encodes the specified Edit message, length delimited. Does not implicitly {@link oipProto.Edit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Edit
     * @static
     * @param {oipProto.IEdit} message Edit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Edit.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes an Edit message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Edit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Edit} Edit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Edit.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Edit();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes an Edit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Edit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Edit} Edit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Edit.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies an Edit message.
     * @function verify
     * @memberof oipProto.Edit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Edit.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      return null;
    };
    /**
     * Creates an Edit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Edit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Edit} Edit
     */


    Edit.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Edit) return object;
      return new $root.oipProto.Edit();
    };
    /**
     * Creates a plain object from an Edit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Edit
     * @static
     * @param {oipProto.Edit} message Edit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Edit.toObject = function toObject() {
      return {};
    };
    /**
     * Converts this Edit to JSON.
     * @function toJSON
     * @memberof oipProto.Edit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Edit.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Edit;
  }();

  oipProto.RecordProto = function () {
    /**
     * Properties of a RecordProto.
     * @memberof oipProto
     * @interface IRecordProto
     * @property {Array.<string>|null} [tags] RecordProto tags
     * @property {oipProto.IPayment|null} [payment] RecordProto payment
     * @property {oipProto.IOipDetails|null} [details] RecordProto details
     * @property {oipProto.IPermissions|null} [permissions] RecordProto permissions
     */

    /**
     * Constructs a new RecordProto.
     * @memberof oipProto
     * @classdesc Represents a RecordProto.
     * @implements IRecordProto
     * @constructor
     * @param {oipProto.IRecordProto=} [properties] Properties to set
     */
    function RecordProto(properties) {
      this.tags = [];
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * RecordProto tags.
     * @member {Array.<string>} tags
     * @memberof oipProto.RecordProto
     * @instance
     */


    RecordProto.prototype.tags = $util.emptyArray;
    /**
     * RecordProto payment.
     * @member {oipProto.IPayment|null|undefined} payment
     * @memberof oipProto.RecordProto
     * @instance
     */

    RecordProto.prototype.payment = null;
    /**
     * RecordProto details.
     * @member {oipProto.IOipDetails|null|undefined} details
     * @memberof oipProto.RecordProto
     * @instance
     */

    RecordProto.prototype.details = null;
    /**
     * RecordProto permissions.
     * @member {oipProto.IPermissions|null|undefined} permissions
     * @memberof oipProto.RecordProto
     * @instance
     */

    RecordProto.prototype.permissions = null;
    /**
     * Creates a new RecordProto instance using the specified properties.
     * @function create
     * @memberof oipProto.RecordProto
     * @static
     * @param {oipProto.IRecordProto=} [properties] Properties to set
     * @returns {oipProto.RecordProto} RecordProto instance
     */

    RecordProto.create = function create(properties) {
      return new RecordProto(properties);
    };
    /**
     * Encodes the specified RecordProto message. Does not implicitly {@link oipProto.RecordProto.verify|verify} messages.
     * @function encode
     * @memberof oipProto.RecordProto
     * @static
     * @param {oipProto.IRecordProto} message RecordProto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    RecordProto.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.tags != null && message.tags.length) for (var i = 0; i < message.tags.length; ++i) writer.uint32(
      /* id 4, wireType 2 =*/
      34).string(message.tags[i]);
      if (message.payment != null && Object.hasOwnProperty.call(message, "payment")) $root.oipProto.Payment.encode(message.payment, writer.uint32(
      /* id 6, wireType 2 =*/
      50).fork()).ldelim();
      if (message.details != null && Object.hasOwnProperty.call(message, "details")) $root.oipProto.OipDetails.encode(message.details, writer.uint32(
      /* id 7, wireType 2 =*/
      58).fork()).ldelim();
      if (message.permissions != null && Object.hasOwnProperty.call(message, "permissions")) $root.oipProto.Permissions.encode(message.permissions, writer.uint32(
      /* id 8, wireType 2 =*/
      66).fork()).ldelim();
      return writer;
    };
    /**
     * Encodes the specified RecordProto message, length delimited. Does not implicitly {@link oipProto.RecordProto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.RecordProto
     * @static
     * @param {oipProto.IRecordProto} message RecordProto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    RecordProto.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a RecordProto message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.RecordProto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.RecordProto} RecordProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    RecordProto.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.RecordProto();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 4:
            if (!(message.tags && message.tags.length)) message.tags = [];
            message.tags.push(reader.string());
            break;

          case 6:
            message.payment = $root.oipProto.Payment.decode(reader, reader.uint32());
            break;

          case 7:
            message.details = $root.oipProto.OipDetails.decode(reader, reader.uint32());
            break;

          case 8:
            message.permissions = $root.oipProto.Permissions.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a RecordProto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.RecordProto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.RecordProto} RecordProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    RecordProto.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a RecordProto message.
     * @function verify
     * @memberof oipProto.RecordProto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    RecordProto.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";

      if (message.tags != null && message.hasOwnProperty("tags")) {
        if (!Array.isArray(message.tags)) return "tags: array expected";

        for (var i = 0; i < message.tags.length; ++i) if (!$util.isString(message.tags[i])) return "tags: string[] expected";
      }

      if (message.payment != null && message.hasOwnProperty("payment")) {
        var error = $root.oipProto.Payment.verify(message.payment);
        if (error) return "payment." + error;
      }

      if (message.details != null && message.hasOwnProperty("details")) {
        var error = $root.oipProto.OipDetails.verify(message.details);
        if (error) return "details." + error;
      }

      if (message.permissions != null && message.hasOwnProperty("permissions")) {
        var error = $root.oipProto.Permissions.verify(message.permissions);
        if (error) return "permissions." + error;
      }

      return null;
    };
    /**
     * Creates a RecordProto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.RecordProto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.RecordProto} RecordProto
     */


    RecordProto.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.RecordProto) return object;
      var message = new $root.oipProto.RecordProto();

      if (object.tags) {
        if (!Array.isArray(object.tags)) throw TypeError(".oipProto.RecordProto.tags: array expected");
        message.tags = [];

        for (var i = 0; i < object.tags.length; ++i) message.tags[i] = String(object.tags[i]);
      }

      if (object.payment != null) {
        if (typeof object.payment !== "object") throw TypeError(".oipProto.RecordProto.payment: object expected");
        message.payment = $root.oipProto.Payment.fromObject(object.payment);
      }

      if (object.details != null) {
        if (typeof object.details !== "object") throw TypeError(".oipProto.RecordProto.details: object expected");
        message.details = $root.oipProto.OipDetails.fromObject(object.details);
      }

      if (object.permissions != null) {
        if (typeof object.permissions !== "object") throw TypeError(".oipProto.RecordProto.permissions: object expected");
        message.permissions = $root.oipProto.Permissions.fromObject(object.permissions);
      }

      return message;
    };
    /**
     * Creates a plain object from a RecordProto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.RecordProto
     * @static
     * @param {oipProto.RecordProto} message RecordProto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    RecordProto.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.tags = [];

      if (options.defaults) {
        object.payment = null;
        object.details = null;
        object.permissions = null;
      }

      if (message.tags && message.tags.length) {
        object.tags = [];

        for (var j = 0; j < message.tags.length; ++j) object.tags[j] = message.tags[j];
      }

      if (message.payment != null && message.hasOwnProperty("payment")) object.payment = $root.oipProto.Payment.toObject(message.payment, options);
      if (message.details != null && message.hasOwnProperty("details")) object.details = $root.oipProto.OipDetails.toObject(message.details, options);
      if (message.permissions != null && message.hasOwnProperty("permissions")) object.permissions = $root.oipProto.Permissions.toObject(message.permissions, options);
      return object;
    };
    /**
     * Converts this RecordProto to JSON.
     * @function toJSON
     * @memberof oipProto.RecordProto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    RecordProto.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RecordProto;
  }();

  oipProto.Permissions = function () {
    /**
     * Properties of a Permissions.
     * @memberof oipProto
     * @interface IPermissions
     */

    /**
     * Constructs a new Permissions.
     * @memberof oipProto
     * @classdesc Represents a Permissions.
     * @implements IPermissions
     * @constructor
     * @param {oipProto.IPermissions=} [properties] Properties to set
     */
    function Permissions(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new Permissions instance using the specified properties.
     * @function create
     * @memberof oipProto.Permissions
     * @static
     * @param {oipProto.IPermissions=} [properties] Properties to set
     * @returns {oipProto.Permissions} Permissions instance
     */


    Permissions.create = function create(properties) {
      return new Permissions(properties);
    };
    /**
     * Encodes the specified Permissions message. Does not implicitly {@link oipProto.Permissions.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Permissions
     * @static
     * @param {oipProto.IPermissions} message Permissions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Permissions.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };
    /**
     * Encodes the specified Permissions message, length delimited. Does not implicitly {@link oipProto.Permissions.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Permissions
     * @static
     * @param {oipProto.IPermissions} message Permissions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Permissions.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Permissions message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Permissions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Permissions} Permissions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Permissions.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Permissions();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a Permissions message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Permissions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Permissions} Permissions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Permissions.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Permissions message.
     * @function verify
     * @memberof oipProto.Permissions
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Permissions.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      return null;
    };
    /**
     * Creates a Permissions message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Permissions
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Permissions} Permissions
     */


    Permissions.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Permissions) return object;
      return new $root.oipProto.Permissions();
    };
    /**
     * Creates a plain object from a Permissions message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Permissions
     * @static
     * @param {oipProto.Permissions} message Permissions
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Permissions.toObject = function toObject() {
      return {};
    };
    /**
     * Converts this Permissions to JSON.
     * @function toJSON
     * @memberof oipProto.Permissions
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Permissions.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Permissions;
  }();

  oipProto.Payment = function () {
    /**
     * Properties of a Payment.
     * @memberof oipProto
     * @interface IPayment
     */

    /**
     * Constructs a new Payment.
     * @memberof oipProto
     * @classdesc Represents a Payment.
     * @implements IPayment
     * @constructor
     * @param {oipProto.IPayment=} [properties] Properties to set
     */
    function Payment(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new Payment instance using the specified properties.
     * @function create
     * @memberof oipProto.Payment
     * @static
     * @param {oipProto.IPayment=} [properties] Properties to set
     * @returns {oipProto.Payment} Payment instance
     */


    Payment.create = function create(properties) {
      return new Payment(properties);
    };
    /**
     * Encodes the specified Payment message. Does not implicitly {@link oipProto.Payment.verify|verify} messages.
     * @function encode
     * @memberof oipProto.Payment
     * @static
     * @param {oipProto.IPayment} message Payment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Payment.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };
    /**
     * Encodes the specified Payment message, length delimited. Does not implicitly {@link oipProto.Payment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.Payment
     * @static
     * @param {oipProto.IPayment} message Payment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    Payment.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a Payment message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.Payment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.Payment} Payment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Payment.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.Payment();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a Payment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.Payment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.Payment} Payment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    Payment.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a Payment message.
     * @function verify
     * @memberof oipProto.Payment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    Payment.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      return null;
    };
    /**
     * Creates a Payment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.Payment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.Payment} Payment
     */


    Payment.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.Payment) return object;
      return new $root.oipProto.Payment();
    };
    /**
     * Creates a plain object from a Payment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.Payment
     * @static
     * @param {oipProto.Payment} message Payment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    Payment.toObject = function toObject() {
      return {};
    };
    /**
     * Converts this Payment to JSON.
     * @function toJSON
     * @memberof oipProto.Payment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    Payment.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Payment;
  }();

  oipProto.OipDetails = function () {
    /**
     * Properties of an OipDetails.
     * @memberof oipProto
     * @interface IOipDetails
     * @property {Array.<google.protobuf.IAny>|null} [details] OipDetails details
     */

    /**
     * Constructs a new OipDetails.
     * @memberof oipProto
     * @classdesc Represents an OipDetails.
     * @implements IOipDetails
     * @constructor
     * @param {oipProto.IOipDetails=} [properties] Properties to set
     */
    function OipDetails(properties) {
      this.details = [];
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * OipDetails details.
     * @member {Array.<google.protobuf.IAny>} details
     * @memberof oipProto.OipDetails
     * @instance
     */


    OipDetails.prototype.details = $util.emptyArray;
    /**
     * Creates a new OipDetails instance using the specified properties.
     * @function create
     * @memberof oipProto.OipDetails
     * @static
     * @param {oipProto.IOipDetails=} [properties] Properties to set
     * @returns {oipProto.OipDetails} OipDetails instance
     */

    OipDetails.create = function create(properties) {
      return new OipDetails(properties);
    };
    /**
     * Encodes the specified OipDetails message. Does not implicitly {@link oipProto.OipDetails.verify|verify} messages.
     * @function encode
     * @memberof oipProto.OipDetails
     * @static
     * @param {oipProto.IOipDetails} message OipDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    OipDetails.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.details != null && message.details.length) for (var i = 0; i < message.details.length; ++i) $root.google.protobuf.Any.encode(message.details[i], writer.uint32(
      /* id 1, wireType 2 =*/
      10).fork()).ldelim();
      return writer;
    };
    /**
     * Encodes the specified OipDetails message, length delimited. Does not implicitly {@link oipProto.OipDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.OipDetails
     * @static
     * @param {oipProto.IOipDetails} message OipDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    OipDetails.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes an OipDetails message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.OipDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.OipDetails} OipDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    OipDetails.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.OipDetails();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            if (!(message.details && message.details.length)) message.details = [];
            message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes an OipDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.OipDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.OipDetails} OipDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    OipDetails.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies an OipDetails message.
     * @function verify
     * @memberof oipProto.OipDetails
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    OipDetails.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";

      if (message.details != null && message.hasOwnProperty("details")) {
        if (!Array.isArray(message.details)) return "details: array expected";

        for (var i = 0; i < message.details.length; ++i) {
          var error = $root.google.protobuf.Any.verify(message.details[i]);
          if (error) return "details." + error;
        }
      }

      return null;
    };
    /**
     * Creates an OipDetails message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.OipDetails
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.OipDetails} OipDetails
     */


    OipDetails.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.OipDetails) return object;
      var message = new $root.oipProto.OipDetails();

      if (object.details) {
        if (!Array.isArray(object.details)) throw TypeError(".oipProto.OipDetails.details: array expected");
        message.details = [];

        for (var i = 0; i < object.details.length; ++i) {
          if (typeof object.details[i] !== "object") throw TypeError(".oipProto.OipDetails.details: object expected");
          message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
        }
      }

      return message;
    };
    /**
     * Creates a plain object from an OipDetails message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.OipDetails
     * @static
     * @param {oipProto.OipDetails} message OipDetails
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    OipDetails.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.details = [];

      if (message.details && message.details.length) {
        object.details = [];

        for (var j = 0; j < message.details.length; ++j) object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
      }

      return object;
    };
    /**
     * Converts this OipDetails to JSON.
     * @function toJSON
     * @memberof oipProto.OipDetails
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    OipDetails.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OipDetails;
  }();

  oipProto.RecordTemplateProto = function () {
    /**
     * Properties of a RecordTemplateProto.
     * @memberof oipProto
     * @interface IRecordTemplateProto
     * @property {string|null} [friendlyName] RecordTemplateProto friendlyName
     * @property {string|null} [description] RecordTemplateProto description
     * @property {Uint8Array|null} [DescriptorSetProto] RecordTemplateProto DescriptorSetProto
     * @property {Array.<number>|null} ["extends"] RecordTemplateProto extends
     * @property {number|null} [identifier] RecordTemplateProto identifier
     */

    /**
     * Constructs a new RecordTemplateProto.
     * @memberof oipProto
     * @classdesc Represents a RecordTemplateProto.
     * @implements IRecordTemplateProto
     * @constructor
     * @param {oipProto.IRecordTemplateProto=} [properties] Properties to set
     */
    function RecordTemplateProto(properties) {
      this["extends"] = [];
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * RecordTemplateProto friendlyName.
     * @member {string} friendlyName
     * @memberof oipProto.RecordTemplateProto
     * @instance
     */


    RecordTemplateProto.prototype.friendlyName = "";
    /**
     * RecordTemplateProto description.
     * @member {string} description
     * @memberof oipProto.RecordTemplateProto
     * @instance
     */

    RecordTemplateProto.prototype.description = "";
    /**
     * RecordTemplateProto DescriptorSetProto.
     * @member {Uint8Array} DescriptorSetProto
     * @memberof oipProto.RecordTemplateProto
     * @instance
     */

    RecordTemplateProto.prototype.DescriptorSetProto = $util.newBuffer([]);
    /**
     * RecordTemplateProto extends.
     * @member {Array.<number>} extends
     * @memberof oipProto.RecordTemplateProto
     * @instance
     */

    RecordTemplateProto.prototype["extends"] = $util.emptyArray;
    /**
     * RecordTemplateProto identifier.
     * @member {number} identifier
     * @memberof oipProto.RecordTemplateProto
     * @instance
     */

    RecordTemplateProto.prototype.identifier = 0;
    /**
     * Creates a new RecordTemplateProto instance using the specified properties.
     * @function create
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {oipProto.IRecordTemplateProto=} [properties] Properties to set
     * @returns {oipProto.RecordTemplateProto} RecordTemplateProto instance
     */

    RecordTemplateProto.create = function create(properties) {
      return new RecordTemplateProto(properties);
    };
    /**
     * Encodes the specified RecordTemplateProto message. Does not implicitly {@link oipProto.RecordTemplateProto.verify|verify} messages.
     * @function encode
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {oipProto.IRecordTemplateProto} message RecordTemplateProto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    RecordTemplateProto.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.friendlyName != null && Object.hasOwnProperty.call(message, "friendlyName")) writer.uint32(
      /* id 1, wireType 2 =*/
      10).string(message.friendlyName);
      if (message.description != null && Object.hasOwnProperty.call(message, "description")) writer.uint32(
      /* id 2, wireType 2 =*/
      18).string(message.description);
      if (message.DescriptorSetProto != null && Object.hasOwnProperty.call(message, "DescriptorSetProto")) writer.uint32(
      /* id 4, wireType 2 =*/
      34).bytes(message.DescriptorSetProto);
      if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier")) writer.uint32(
      /* id 10, wireType 5 =*/
      85).fixed32(message.identifier);

      if (message["extends"] != null && message["extends"].length) {
        writer.uint32(
        /* id 13, wireType 2 =*/
        106).fork();

        for (var i = 0; i < message["extends"].length; ++i) writer.fixed32(message["extends"][i]);

        writer.ldelim();
      }

      return writer;
    };
    /**
     * Encodes the specified RecordTemplateProto message, length delimited. Does not implicitly {@link oipProto.RecordTemplateProto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {oipProto.IRecordTemplateProto} message RecordTemplateProto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    RecordTemplateProto.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a RecordTemplateProto message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.RecordTemplateProto} RecordTemplateProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    RecordTemplateProto.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.RecordTemplateProto();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.friendlyName = reader.string();
            break;

          case 2:
            message.description = reader.string();
            break;

          case 4:
            message.DescriptorSetProto = reader.bytes();
            break;

          case 13:
            if (!(message["extends"] && message["extends"].length)) message["extends"] = [];

            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;

              while (reader.pos < end2) message["extends"].push(reader.fixed32());
            } else message["extends"].push(reader.fixed32());

            break;

          case 10:
            message.identifier = reader.fixed32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a RecordTemplateProto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.RecordTemplateProto} RecordTemplateProto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    RecordTemplateProto.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a RecordTemplateProto message.
     * @function verify
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    RecordTemplateProto.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.friendlyName != null && message.hasOwnProperty("friendlyName")) if (!$util.isString(message.friendlyName)) return "friendlyName: string expected";
      if (message.description != null && message.hasOwnProperty("description")) if (!$util.isString(message.description)) return "description: string expected";
      if (message.DescriptorSetProto != null && message.hasOwnProperty("DescriptorSetProto")) if (!(message.DescriptorSetProto && typeof message.DescriptorSetProto.length === "number" || $util.isString(message.DescriptorSetProto))) return "DescriptorSetProto: buffer expected";

      if (message["extends"] != null && message.hasOwnProperty("extends")) {
        if (!Array.isArray(message["extends"])) return "extends: array expected";

        for (var i = 0; i < message["extends"].length; ++i) if (!$util.isInteger(message["extends"][i])) return "extends: integer[] expected";
      }

      if (message.identifier != null && message.hasOwnProperty("identifier")) if (!$util.isInteger(message.identifier)) return "identifier: integer expected";
      return null;
    };
    /**
     * Creates a RecordTemplateProto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.RecordTemplateProto} RecordTemplateProto
     */


    RecordTemplateProto.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.RecordTemplateProto) return object;
      var message = new $root.oipProto.RecordTemplateProto();
      if (object.friendlyName != null) message.friendlyName = String(object.friendlyName);
      if (object.description != null) message.description = String(object.description);
      if (object.DescriptorSetProto != null) if (typeof object.DescriptorSetProto === "string") $util.base64.decode(object.DescriptorSetProto, message.DescriptorSetProto = $util.newBuffer($util.base64.length(object.DescriptorSetProto)), 0);else if (object.DescriptorSetProto.length) message.DescriptorSetProto = object.DescriptorSetProto;

      if (object["extends"]) {
        if (!Array.isArray(object["extends"])) throw TypeError(".oipProto.RecordTemplateProto.extends: array expected");
        message["extends"] = [];

        for (var i = 0; i < object["extends"].length; ++i) message["extends"][i] = object["extends"][i] >>> 0;
      }

      if (object.identifier != null) message.identifier = object.identifier >>> 0;
      return message;
    };
    /**
     * Creates a plain object from a RecordTemplateProto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.RecordTemplateProto
     * @static
     * @param {oipProto.RecordTemplateProto} message RecordTemplateProto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    RecordTemplateProto.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object["extends"] = [];

      if (options.defaults) {
        object.friendlyName = "";
        object.description = "";
        if (options.bytes === String) object.DescriptorSetProto = "";else {
          object.DescriptorSetProto = [];
          if (options.bytes !== Array) object.DescriptorSetProto = $util.newBuffer(object.DescriptorSetProto);
        }
        object.identifier = 0;
      }

      if (message.friendlyName != null && message.hasOwnProperty("friendlyName")) object.friendlyName = message.friendlyName;
      if (message.description != null && message.hasOwnProperty("description")) object.description = message.description;
      if (message.DescriptorSetProto != null && message.hasOwnProperty("DescriptorSetProto")) object.DescriptorSetProto = options.bytes === String ? $util.base64.encode(message.DescriptorSetProto, 0, message.DescriptorSetProto.length) : options.bytes === Array ? Array.prototype.slice.call(message.DescriptorSetProto) : message.DescriptorSetProto;
      if (message.identifier != null && message.hasOwnProperty("identifier")) object.identifier = message.identifier;

      if (message["extends"] && message["extends"].length) {
        object["extends"] = [];

        for (var j = 0; j < message["extends"].length; ++j) object["extends"][j] = message["extends"][j];
      }

      return object;
    };
    /**
     * Converts this RecordTemplateProto to JSON.
     * @function toJSON
     * @memberof oipProto.RecordTemplateProto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    RecordTemplateProto.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RecordTemplateProto;
  }();

  oipProto.PubKey = function () {
    /**
     * Properties of a PubKey.
     * @memberof oipProto
     * @interface IPubKey
     * @property {oipProto.NetworkTypes|null} [network] PubKey network
     * @property {Uint8Array|null} [raw] PubKey raw
     */

    /**
     * Constructs a new PubKey.
     * @memberof oipProto
     * @classdesc Represents a PubKey.
     * @implements IPubKey
     * @constructor
     * @param {oipProto.IPubKey=} [properties] Properties to set
     */
    function PubKey(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * PubKey network.
     * @member {oipProto.NetworkTypes} network
     * @memberof oipProto.PubKey
     * @instance
     */


    PubKey.prototype.network = 0;
    /**
     * PubKey raw.
     * @member {Uint8Array} raw
     * @memberof oipProto.PubKey
     * @instance
     */

    PubKey.prototype.raw = $util.newBuffer([]);
    /**
     * Creates a new PubKey instance using the specified properties.
     * @function create
     * @memberof oipProto.PubKey
     * @static
     * @param {oipProto.IPubKey=} [properties] Properties to set
     * @returns {oipProto.PubKey} PubKey instance
     */

    PubKey.create = function create(properties) {
      return new PubKey(properties);
    };
    /**
     * Encodes the specified PubKey message. Does not implicitly {@link oipProto.PubKey.verify|verify} messages.
     * @function encode
     * @memberof oipProto.PubKey
     * @static
     * @param {oipProto.IPubKey} message PubKey message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    PubKey.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.network != null && Object.hasOwnProperty.call(message, "network")) writer.uint32(
      /* id 1, wireType 0 =*/
      8).int32(message.network);
      if (message.raw != null && Object.hasOwnProperty.call(message, "raw")) writer.uint32(
      /* id 2, wireType 2 =*/
      18).bytes(message.raw);
      return writer;
    };
    /**
     * Encodes the specified PubKey message, length delimited. Does not implicitly {@link oipProto.PubKey.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.PubKey
     * @static
     * @param {oipProto.IPubKey} message PubKey message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    PubKey.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a PubKey message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.PubKey
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.PubKey} PubKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    PubKey.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.PubKey();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.network = reader.int32();
            break;

          case 2:
            message.raw = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a PubKey message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.PubKey
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.PubKey} PubKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    PubKey.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a PubKey message.
     * @function verify
     * @memberof oipProto.PubKey
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    PubKey.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.network != null && message.hasOwnProperty("network")) switch (message.network) {
        default:
          return "network: enum value expected";

        case 0:
        case 1:
          break;
      }
      if (message.raw != null && message.hasOwnProperty("raw")) if (!(message.raw && typeof message.raw.length === "number" || $util.isString(message.raw))) return "raw: buffer expected";
      return null;
    };
    /**
     * Creates a PubKey message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.PubKey
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.PubKey} PubKey
     */


    PubKey.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.PubKey) return object;
      var message = new $root.oipProto.PubKey();

      switch (object.network) {
        case "InvalidNetwork":
        case 0:
          message.network = 0;
          break;

        case "Flo":
        case 1:
          message.network = 1;
          break;
      }

      if (object.raw != null) if (typeof object.raw === "string") $util.base64.decode(object.raw, message.raw = $util.newBuffer($util.base64.length(object.raw)), 0);else if (object.raw.length) message.raw = object.raw;
      return message;
    };
    /**
     * Creates a plain object from a PubKey message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.PubKey
     * @static
     * @param {oipProto.PubKey} message PubKey
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    PubKey.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        object.network = options.enums === String ? "InvalidNetwork" : 0;
        if (options.bytes === String) object.raw = "";else {
          object.raw = [];
          if (options.bytes !== Array) object.raw = $util.newBuffer(object.raw);
        }
      }

      if (message.network != null && message.hasOwnProperty("network")) object.network = options.enums === String ? $root.oipProto.NetworkTypes[message.network] : message.network;
      if (message.raw != null && message.hasOwnProperty("raw")) object.raw = options.bytes === String ? $util.base64.encode(message.raw, 0, message.raw.length) : options.bytes === Array ? Array.prototype.slice.call(message.raw) : message.raw;
      return object;
    };
    /**
     * Converts this PubKey to JSON.
     * @function toJSON
     * @memberof oipProto.PubKey
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    PubKey.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PubKey;
  }();
  /**
   * NetworkTypes enum.
   * @name oipProto.NetworkTypes
   * @enum {number}
   * @property {number} InvalidNetwork=0 InvalidNetwork value
   * @property {number} Flo=1 Flo value
   */


  oipProto.NetworkTypes = function () {
    var valuesById = {},
        values = Object.create(valuesById);
    values[valuesById[0] = "InvalidNetwork"] = 0;
    values[valuesById[1] = "Flo"] = 1;
    return values;
  }();

  oipProto.SignedMessage = function () {
    /**
     * Properties of a SignedMessage.
     * @memberof oipProto
     * @interface ISignedMessage
     * @property {Uint8Array|null} [SerializedMessage] SignedMessage SerializedMessage
     * @property {oipProto.MessageTypes|null} [MessageType] SignedMessage MessageType
     * @property {oipProto.SignatureTypes|null} [SignatureType] SignedMessage SignatureType
     * @property {Uint8Array|null} [PubKey] SignedMessage PubKey
     * @property {Uint8Array|null} [Signature] SignedMessage Signature
     */

    /**
     * Constructs a new SignedMessage.
     * @memberof oipProto
     * @classdesc Represents a SignedMessage.
     * @implements ISignedMessage
     * @constructor
     * @param {oipProto.ISignedMessage=} [properties] Properties to set
     */
    function SignedMessage(properties) {
      if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }
    /**
     * SignedMessage SerializedMessage.
     * @member {Uint8Array} SerializedMessage
     * @memberof oipProto.SignedMessage
     * @instance
     */


    SignedMessage.prototype.SerializedMessage = $util.newBuffer([]);
    /**
     * SignedMessage MessageType.
     * @member {oipProto.MessageTypes} MessageType
     * @memberof oipProto.SignedMessage
     * @instance
     */

    SignedMessage.prototype.MessageType = 0;
    /**
     * SignedMessage SignatureType.
     * @member {oipProto.SignatureTypes} SignatureType
     * @memberof oipProto.SignedMessage
     * @instance
     */

    SignedMessage.prototype.SignatureType = 0;
    /**
     * SignedMessage PubKey.
     * @member {Uint8Array} PubKey
     * @memberof oipProto.SignedMessage
     * @instance
     */

    SignedMessage.prototype.PubKey = $util.newBuffer([]);
    /**
     * SignedMessage Signature.
     * @member {Uint8Array} Signature
     * @memberof oipProto.SignedMessage
     * @instance
     */

    SignedMessage.prototype.Signature = $util.newBuffer([]);
    /**
     * Creates a new SignedMessage instance using the specified properties.
     * @function create
     * @memberof oipProto.SignedMessage
     * @static
     * @param {oipProto.ISignedMessage=} [properties] Properties to set
     * @returns {oipProto.SignedMessage} SignedMessage instance
     */

    SignedMessage.create = function create(properties) {
      return new SignedMessage(properties);
    };
    /**
     * Encodes the specified SignedMessage message. Does not implicitly {@link oipProto.SignedMessage.verify|verify} messages.
     * @function encode
     * @memberof oipProto.SignedMessage
     * @static
     * @param {oipProto.ISignedMessage} message SignedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    SignedMessage.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.SerializedMessage != null && Object.hasOwnProperty.call(message, "SerializedMessage")) writer.uint32(
      /* id 1, wireType 2 =*/
      10).bytes(message.SerializedMessage);
      if (message.MessageType != null && Object.hasOwnProperty.call(message, "MessageType")) writer.uint32(
      /* id 2, wireType 0 =*/
      16).int32(message.MessageType);
      if (message.SignatureType != null && Object.hasOwnProperty.call(message, "SignatureType")) writer.uint32(
      /* id 3, wireType 0 =*/
      24).int32(message.SignatureType);
      if (message.PubKey != null && Object.hasOwnProperty.call(message, "PubKey")) writer.uint32(
      /* id 4, wireType 2 =*/
      34).bytes(message.PubKey);
      if (message.Signature != null && Object.hasOwnProperty.call(message, "Signature")) writer.uint32(
      /* id 5, wireType 2 =*/
      42).bytes(message.Signature);
      return writer;
    };
    /**
     * Encodes the specified SignedMessage message, length delimited. Does not implicitly {@link oipProto.SignedMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof oipProto.SignedMessage
     * @static
     * @param {oipProto.ISignedMessage} message SignedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    SignedMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a SignedMessage message from the specified reader or buffer.
     * @function decode
     * @memberof oipProto.SignedMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {oipProto.SignedMessage} SignedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    SignedMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.oipProto.SignedMessage();

      while (reader.pos < end) {
        var tag = reader.uint32();

        switch (tag >>> 3) {
          case 1:
            message.SerializedMessage = reader.bytes();
            break;

          case 2:
            message.MessageType = reader.int32();
            break;

          case 3:
            message.SignatureType = reader.int32();
            break;

          case 4:
            message.PubKey = reader.bytes();
            break;

          case 5:
            message.Signature = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    };
    /**
     * Decodes a SignedMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof oipProto.SignedMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {oipProto.SignedMessage} SignedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    SignedMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a SignedMessage message.
     * @function verify
     * @memberof oipProto.SignedMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */


    SignedMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null) return "object expected";
      if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage")) if (!(message.SerializedMessage && typeof message.SerializedMessage.length === "number" || $util.isString(message.SerializedMessage))) return "SerializedMessage: buffer expected";
      if (message.MessageType != null && message.hasOwnProperty("MessageType")) switch (message.MessageType) {
        default:
          return "MessageType: enum value expected";

        case 0:
        case 1:
        case 2:
        case 3:
          break;
      }
      if (message.SignatureType != null && message.hasOwnProperty("SignatureType")) switch (message.SignatureType) {
        default:
          return "SignatureType: enum value expected";

        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          break;
      }
      if (message.PubKey != null && message.hasOwnProperty("PubKey")) if (!(message.PubKey && typeof message.PubKey.length === "number" || $util.isString(message.PubKey))) return "PubKey: buffer expected";
      if (message.Signature != null && message.hasOwnProperty("Signature")) if (!(message.Signature && typeof message.Signature.length === "number" || $util.isString(message.Signature))) return "Signature: buffer expected";
      return null;
    };
    /**
     * Creates a SignedMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof oipProto.SignedMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {oipProto.SignedMessage} SignedMessage
     */


    SignedMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.oipProto.SignedMessage) return object;
      var message = new $root.oipProto.SignedMessage();
      if (object.SerializedMessage != null) if (typeof object.SerializedMessage === "string") $util.base64.decode(object.SerializedMessage, message.SerializedMessage = $util.newBuffer($util.base64.length(object.SerializedMessage)), 0);else if (object.SerializedMessage.length) message.SerializedMessage = object.SerializedMessage;

      switch (object.MessageType) {
        case "InvalidMessage":
        case 0:
          message.MessageType = 0;
          break;

        case "OIP05":
        case 1:
          message.MessageType = 1;
          break;

        case "Historian":
        case 2:
          message.MessageType = 2;
          break;

        case "Multipart":
        case 3:
          message.MessageType = 3;
          break;
      }

      switch (object.SignatureType) {
        case "InvalidSignature":
        case 0:
          message.SignatureType = 0;
          break;

        case "Flo":
        case 1:
          message.SignatureType = 1;
          break;

        case "Btc":
        case 2:
          message.SignatureType = 2;
          break;

        case "Rvn":
        case 3:
          message.SignatureType = 3;
          break;

        case "Tx":
        case 4:
          message.SignatureType = 4;
          break;
      }

      if (object.PubKey != null) if (typeof object.PubKey === "string") $util.base64.decode(object.PubKey, message.PubKey = $util.newBuffer($util.base64.length(object.PubKey)), 0);else if (object.PubKey.length) message.PubKey = object.PubKey;
      if (object.Signature != null) if (typeof object.Signature === "string") $util.base64.decode(object.Signature, message.Signature = $util.newBuffer($util.base64.length(object.Signature)), 0);else if (object.Signature.length) message.Signature = object.Signature;
      return message;
    };
    /**
     * Creates a plain object from a SignedMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof oipProto.SignedMessage
     * @static
     * @param {oipProto.SignedMessage} message SignedMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */


    SignedMessage.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};

      if (options.defaults) {
        if (options.bytes === String) object.SerializedMessage = "";else {
          object.SerializedMessage = [];
          if (options.bytes !== Array) object.SerializedMessage = $util.newBuffer(object.SerializedMessage);
        }
        object.MessageType = options.enums === String ? "InvalidMessage" : 0;
        object.SignatureType = options.enums === String ? "InvalidSignature" : 0;
        if (options.bytes === String) object.PubKey = "";else {
          object.PubKey = [];
          if (options.bytes !== Array) object.PubKey = $util.newBuffer(object.PubKey);
        }
        if (options.bytes === String) object.Signature = "";else {
          object.Signature = [];
          if (options.bytes !== Array) object.Signature = $util.newBuffer(object.Signature);
        }
      }

      if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage")) object.SerializedMessage = options.bytes === String ? $util.base64.encode(message.SerializedMessage, 0, message.SerializedMessage.length) : options.bytes === Array ? Array.prototype.slice.call(message.SerializedMessage) : message.SerializedMessage;
      if (message.MessageType != null && message.hasOwnProperty("MessageType")) object.MessageType = options.enums === String ? $root.oipProto.MessageTypes[message.MessageType] : message.MessageType;
      if (message.SignatureType != null && message.hasOwnProperty("SignatureType")) object.SignatureType = options.enums === String ? $root.oipProto.SignatureTypes[message.SignatureType] : message.SignatureType;
      if (message.PubKey != null && message.hasOwnProperty("PubKey")) object.PubKey = options.bytes === String ? $util.base64.encode(message.PubKey, 0, message.PubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.PubKey) : message.PubKey;
      if (message.Signature != null && message.hasOwnProperty("Signature")) object.Signature = options.bytes === String ? $util.base64.encode(message.Signature, 0, message.Signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.Signature) : message.Signature;
      return object;
    };
    /**
     * Converts this SignedMessage to JSON.
     * @function toJSON
     * @memberof oipProto.SignedMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */


    SignedMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignedMessage;
  }();
  /**
   * MessageTypes enum.
   * @name oipProto.MessageTypes
   * @enum {number}
   * @property {number} InvalidMessage=0 InvalidMessage value
   * @property {number} OIP05=1 OIP05 value
   * @property {number} Historian=2 Historian value
   * @property {number} Multipart=3 Multipart value
   */


  oipProto.MessageTypes = function () {
    var valuesById = {},
        values = Object.create(valuesById);
    values[valuesById[0] = "InvalidMessage"] = 0;
    values[valuesById[1] = "OIP05"] = 1;
    values[valuesById[2] = "Historian"] = 2;
    values[valuesById[3] = "Multipart"] = 3;
    return values;
  }();
  /**
   * SignatureTypes enum.
   * @name oipProto.SignatureTypes
   * @enum {number}
   * @property {number} InvalidSignature=0 InvalidSignature value
   * @property {number} Flo=1 Flo value
   * @property {number} Btc=2 Btc value
   * @property {number} Rvn=3 Rvn value
   * @property {number} Tx=4 Tx value
   */


  oipProto.SignatureTypes = function () {
    var valuesById = {},
        values = Object.create(valuesById);
    values[valuesById[0] = "InvalidSignature"] = 0;
    values[valuesById[1] = "Flo"] = 1;
    values[valuesById[2] = "Btc"] = 2;
    values[valuesById[3] = "Rvn"] = 3;
    values[valuesById[4] = "Tx"] = 4;
    return values;
  }();

  oipProto.templates = function () {
    /**
     * Namespace templates.
     * @memberof oipProto
     * @namespace
     */
    var templates = {};

    templates.tmpl_0000F113 = function () {
      /**
       * Properties of a tmpl_0000F113.
       * @memberof oipProto.templates
       * @interface Itmpl_0000F113
       * @property {string|null} [displayName] tmpl_0000F113 displayName
       * @property {string|null} [filePath] tmpl_0000F113 filePath
       * @property {number|Long|null} [size] tmpl_0000F113 size
       * @property {string|null} [contentType] tmpl_0000F113 contentType
       * @property {oipProto.templates.Network|null} [network] tmpl_0000F113 network
       * @property {string|null} [location] tmpl_0000F113 location
       */

      /**
       * Constructs a new tmpl_0000F113.
       * @memberof oipProto.templates
       * @classdesc Represents a tmpl_0000F113.
       * @implements Itmpl_0000F113
       * @constructor
       * @param {oipProto.templates.Itmpl_0000F113=} [properties] Properties to set
       */
      function tmpl_0000F113(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }
      /**
       * tmpl_0000F113 displayName.
       * @member {string} displayName
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       */


      tmpl_0000F113.prototype.displayName = "";
      /**
       * tmpl_0000F113 filePath.
       * @member {string} filePath
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       */

      tmpl_0000F113.prototype.filePath = "";
      /**
       * tmpl_0000F113 size.
       * @member {number|Long} size
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       */

      tmpl_0000F113.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
      /**
       * tmpl_0000F113 contentType.
       * @member {string} contentType
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       */

      tmpl_0000F113.prototype.contentType = "";
      /**
       * tmpl_0000F113 network.
       * @member {oipProto.templates.Network} network
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       */

      tmpl_0000F113.prototype.network = 0;
      /**
       * tmpl_0000F113 location.
       * @member {string} location
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       */

      tmpl_0000F113.prototype.location = "";
      /**
       * Creates a new tmpl_0000F113 instance using the specified properties.
       * @function create
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {oipProto.templates.Itmpl_0000F113=} [properties] Properties to set
       * @returns {oipProto.templates.tmpl_0000F113} tmpl_0000F113 instance
       */

      tmpl_0000F113.create = function create(properties) {
        return new tmpl_0000F113(properties);
      };
      /**
       * Encodes the specified tmpl_0000F113 message. Does not implicitly {@link oipProto.templates.tmpl_0000F113.verify|verify} messages.
       * @function encode
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {oipProto.templates.Itmpl_0000F113} message tmpl_0000F113 message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      tmpl_0000F113.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.displayName);
        if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.filePath);
        if (message.size != null && Object.hasOwnProperty.call(message, "size")) writer.uint32(
        /* id 3, wireType 0 =*/
        24).uint64(message.size);
        if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType")) writer.uint32(
        /* id 4, wireType 2 =*/
        34).string(message.contentType);
        if (message.network != null && Object.hasOwnProperty.call(message, "network")) writer.uint32(
        /* id 5, wireType 0 =*/
        40).int32(message.network);
        if (message.location != null && Object.hasOwnProperty.call(message, "location")) writer.uint32(
        /* id 6, wireType 2 =*/
        50).string(message.location);
        return writer;
      };
      /**
       * Encodes the specified tmpl_0000F113 message, length delimited. Does not implicitly {@link oipProto.templates.tmpl_0000F113.verify|verify} messages.
       * @function encodeDelimited
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {oipProto.templates.Itmpl_0000F113} message tmpl_0000F113 message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      tmpl_0000F113.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a tmpl_0000F113 message from the specified reader or buffer.
       * @function decode
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {oipProto.templates.tmpl_0000F113} tmpl_0000F113
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      tmpl_0000F113.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.oipProto.templates.tmpl_0000F113();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.displayName = reader.string();
              break;

            case 2:
              message.filePath = reader.string();
              break;

            case 3:
              message.size = reader.uint64();
              break;

            case 4:
              message.contentType = reader.string();
              break;

            case 5:
              message.network = reader.int32();
              break;

            case 6:
              message.location = reader.string();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a tmpl_0000F113 message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {oipProto.templates.tmpl_0000F113} tmpl_0000F113
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      tmpl_0000F113.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a tmpl_0000F113 message.
       * @function verify
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      tmpl_0000F113.verify = function verify(message) {
        if (typeof message !== "object" || message === null) return "object expected";
        if (message.displayName != null && message.hasOwnProperty("displayName")) if (!$util.isString(message.displayName)) return "displayName: string expected";
        if (message.filePath != null && message.hasOwnProperty("filePath")) if (!$util.isString(message.filePath)) return "filePath: string expected";
        if (message.size != null && message.hasOwnProperty("size")) if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high))) return "size: integer|Long expected";
        if (message.contentType != null && message.hasOwnProperty("contentType")) if (!$util.isString(message.contentType)) return "contentType: string expected";
        if (message.network != null && message.hasOwnProperty("network")) switch (message.network) {
          default:
            return "network: enum value expected";

          case 0:
          case 1:
          case 2:
          case 3:
            break;
        }
        if (message.location != null && message.hasOwnProperty("location")) if (!$util.isString(message.location)) return "location: string expected";
        return null;
      };
      /**
       * Creates a tmpl_0000F113 message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {oipProto.templates.tmpl_0000F113} tmpl_0000F113
       */


      tmpl_0000F113.fromObject = function fromObject(object) {
        if (object instanceof $root.oipProto.templates.tmpl_0000F113) return object;
        var message = new $root.oipProto.templates.tmpl_0000F113();
        if (object.displayName != null) message.displayName = String(object.displayName);
        if (object.filePath != null) message.filePath = String(object.filePath);
        if (object.size != null) if ($util.Long) (message.size = $util.Long.fromValue(object.size)).unsigned = true;else if (typeof object.size === "string") message.size = parseInt(object.size, 10);else if (typeof object.size === "number") message.size = object.size;else if (typeof object.size === "object") message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
        if (object.contentType != null) message.contentType = String(object.contentType);

        switch (object.network) {
          case "UNKNOWN_NETWORK":
          case 0:
            message.network = 0;
            break;

          case "IPFS":
          case 1:
            message.network = 1;
            break;

          case "WEB_TORRENT":
          case 2:
            message.network = 2;
            break;

          case "HTTP":
          case 3:
            message.network = 3;
            break;
        }

        if (object.location != null) message.location = String(object.location);
        return message;
      };
      /**
       * Creates a plain object from a tmpl_0000F113 message. Also converts values to other types if specified.
       * @function toObject
       * @memberof oipProto.templates.tmpl_0000F113
       * @static
       * @param {oipProto.templates.tmpl_0000F113} message tmpl_0000F113
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      tmpl_0000F113.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.displayName = "";
          object.filePath = "";

          if ($util.Long) {
            var long = new $util.Long(0, 0, true);
            object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
          } else object.size = options.longs === String ? "0" : 0;

          object.contentType = "";
          object.network = options.enums === String ? "UNKNOWN_NETWORK" : 0;
          object.location = "";
        }

        if (message.displayName != null && message.hasOwnProperty("displayName")) object.displayName = message.displayName;
        if (message.filePath != null && message.hasOwnProperty("filePath")) object.filePath = message.filePath;
        if (message.size != null && message.hasOwnProperty("size")) if (typeof message.size === "number") object.size = options.longs === String ? String(message.size) : message.size;else object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
        if (message.contentType != null && message.hasOwnProperty("contentType")) object.contentType = message.contentType;
        if (message.network != null && message.hasOwnProperty("network")) object.network = options.enums === String ? $root.oipProto.templates.Network[message.network] : message.network;
        if (message.location != null && message.hasOwnProperty("location")) object.location = message.location;
        return object;
      };
      /**
       * Converts this tmpl_0000F113 to JSON.
       * @function toJSON
       * @memberof oipProto.templates.tmpl_0000F113
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      tmpl_0000F113.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return tmpl_0000F113;
    }();
    /**
     * Network enum.
     * @name oipProto.templates.Network
     * @enum {number}
     * @property {number} UNKNOWN_NETWORK=0 UNKNOWN_NETWORK value
     * @property {number} IPFS=1 IPFS value
     * @property {number} WEB_TORRENT=2 WEB_TORRENT value
     * @property {number} HTTP=3 HTTP value
     */


    templates.Network = function () {
      var valuesById = {},
          values = Object.create(valuesById);
      values[valuesById[0] = "UNKNOWN_NETWORK"] = 0;
      values[valuesById[1] = "IPFS"] = 1;
      values[valuesById[2] = "WEB_TORRENT"] = 2;
      values[valuesById[3] = "HTTP"] = 3;
      return values;
    }();

    templates.tmpl_000BA51C = function () {
      /**
       * Properties of a tmpl_000BA51C.
       * @memberof oipProto.templates
       * @interface Itmpl_000BA51C
       * @property {string|null} [title] tmpl_000BA51C title
       * @property {string|null} [description] tmpl_000BA51C description
       * @property {number|Long|null} [year] tmpl_000BA51C year
       */

      /**
       * Constructs a new tmpl_000BA51C.
       * @memberof oipProto.templates
       * @classdesc Represents a tmpl_000BA51C.
       * @implements Itmpl_000BA51C
       * @constructor
       * @param {oipProto.templates.Itmpl_000BA51C=} [properties] Properties to set
       */
      function tmpl_000BA51C(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }
      /**
       * tmpl_000BA51C title.
       * @member {string} title
       * @memberof oipProto.templates.tmpl_000BA51C
       * @instance
       */


      tmpl_000BA51C.prototype.title = "";
      /**
       * tmpl_000BA51C description.
       * @member {string} description
       * @memberof oipProto.templates.tmpl_000BA51C
       * @instance
       */

      tmpl_000BA51C.prototype.description = "";
      /**
       * tmpl_000BA51C year.
       * @member {number|Long} year
       * @memberof oipProto.templates.tmpl_000BA51C
       * @instance
       */

      tmpl_000BA51C.prototype.year = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      /**
       * Creates a new tmpl_000BA51C instance using the specified properties.
       * @function create
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {oipProto.templates.Itmpl_000BA51C=} [properties] Properties to set
       * @returns {oipProto.templates.tmpl_000BA51C} tmpl_000BA51C instance
       */

      tmpl_000BA51C.create = function create(properties) {
        return new tmpl_000BA51C(properties);
      };
      /**
       * Encodes the specified tmpl_000BA51C message. Does not implicitly {@link oipProto.templates.tmpl_000BA51C.verify|verify} messages.
       * @function encode
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {oipProto.templates.Itmpl_000BA51C} message tmpl_000BA51C message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      tmpl_000BA51C.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.title != null && Object.hasOwnProperty.call(message, "title")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.title);
        if (message.description != null && Object.hasOwnProperty.call(message, "description")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).string(message.description);
        if (message.year != null && Object.hasOwnProperty.call(message, "year")) writer.uint32(
        /* id 3, wireType 0 =*/
        24).int64(message.year);
        return writer;
      };
      /**
       * Encodes the specified tmpl_000BA51C message, length delimited. Does not implicitly {@link oipProto.templates.tmpl_000BA51C.verify|verify} messages.
       * @function encodeDelimited
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {oipProto.templates.Itmpl_000BA51C} message tmpl_000BA51C message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      tmpl_000BA51C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes a tmpl_000BA51C message from the specified reader or buffer.
       * @function decode
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {oipProto.templates.tmpl_000BA51C} tmpl_000BA51C
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      tmpl_000BA51C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.oipProto.templates.tmpl_000BA51C();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.title = reader.string();
              break;

            case 2:
              message.description = reader.string();
              break;

            case 3:
              message.year = reader.int64();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes a tmpl_000BA51C message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {oipProto.templates.tmpl_000BA51C} tmpl_000BA51C
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      tmpl_000BA51C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies a tmpl_000BA51C message.
       * @function verify
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      tmpl_000BA51C.verify = function verify(message) {
        if (typeof message !== "object" || message === null) return "object expected";
        if (message.title != null && message.hasOwnProperty("title")) if (!$util.isString(message.title)) return "title: string expected";
        if (message.description != null && message.hasOwnProperty("description")) if (!$util.isString(message.description)) return "description: string expected";
        if (message.year != null && message.hasOwnProperty("year")) if (!$util.isInteger(message.year) && !(message.year && $util.isInteger(message.year.low) && $util.isInteger(message.year.high))) return "year: integer|Long expected";
        return null;
      };
      /**
       * Creates a tmpl_000BA51C message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {oipProto.templates.tmpl_000BA51C} tmpl_000BA51C
       */


      tmpl_000BA51C.fromObject = function fromObject(object) {
        if (object instanceof $root.oipProto.templates.tmpl_000BA51C) return object;
        var message = new $root.oipProto.templates.tmpl_000BA51C();
        if (object.title != null) message.title = String(object.title);
        if (object.description != null) message.description = String(object.description);
        if (object.year != null) if ($util.Long) (message.year = $util.Long.fromValue(object.year)).unsigned = false;else if (typeof object.year === "string") message.year = parseInt(object.year, 10);else if (typeof object.year === "number") message.year = object.year;else if (typeof object.year === "object") message.year = new $util.LongBits(object.year.low >>> 0, object.year.high >>> 0).toNumber();
        return message;
      };
      /**
       * Creates a plain object from a tmpl_000BA51C message. Also converts values to other types if specified.
       * @function toObject
       * @memberof oipProto.templates.tmpl_000BA51C
       * @static
       * @param {oipProto.templates.tmpl_000BA51C} message tmpl_000BA51C
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      tmpl_000BA51C.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.title = "";
          object.description = "";

          if ($util.Long) {
            var long = new $util.Long(0, 0, false);
            object.year = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
          } else object.year = options.longs === String ? "0" : 0;
        }

        if (message.title != null && message.hasOwnProperty("title")) object.title = message.title;
        if (message.description != null && message.hasOwnProperty("description")) object.description = message.description;
        if (message.year != null && message.hasOwnProperty("year")) if (typeof message.year === "number") object.year = options.longs === String ? String(message.year) : message.year;else object.year = options.longs === String ? $util.Long.prototype.toString.call(message.year) : options.longs === Number ? new $util.LongBits(message.year.low >>> 0, message.year.high >>> 0).toNumber() : message.year;
        return object;
      };
      /**
       * Converts this tmpl_000BA51C to JSON.
       * @function toJSON
       * @memberof oipProto.templates.tmpl_000BA51C
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      tmpl_000BA51C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return tmpl_000BA51C;
    }();

    return templates;
  }();

  return oipProto;
}();

$root.google = function () {
  /**
   * Namespace google.
   * @exports google
   * @namespace
   */
  var google = {};

  google.protobuf = function () {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    var protobuf = {};

    protobuf.Any = function () {
      /**
       * Properties of an Any.
       * @memberof google.protobuf
       * @interface IAny
       * @property {string|null} [type_url] Any type_url
       * @property {Uint8Array|null} [value] Any value
       */

      /**
       * Constructs a new Any.
       * @memberof google.protobuf
       * @classdesc Represents an Any.
       * @implements IAny
       * @constructor
       * @param {google.protobuf.IAny=} [properties] Properties to set
       */
      function Any(properties) {
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }
      /**
       * Any type_url.
       * @member {string} type_url
       * @memberof google.protobuf.Any
       * @instance
       */


      Any.prototype.type_url = "";
      /**
       * Any value.
       * @member {Uint8Array} value
       * @memberof google.protobuf.Any
       * @instance
       */

      Any.prototype.value = $util.newBuffer([]);
      /**
       * Creates a new Any instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.IAny=} [properties] Properties to set
       * @returns {google.protobuf.Any} Any instance
       */

      Any.create = function create(properties) {
        return new Any(properties);
      };
      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.IAny} message Any message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Any.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url")) writer.uint32(
        /* id 1, wireType 2 =*/
        10).string(message.type_url);
        if (message.value != null && Object.hasOwnProperty.call(message, "value")) writer.uint32(
        /* id 2, wireType 2 =*/
        18).bytes(message.value);
        return writer;
      };
      /**
       * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.IAny} message Any message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */


      Any.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      /**
       * Decodes an Any message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Any
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Any} Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Any.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.google.protobuf.Any();

        while (reader.pos < end) {
          var tag = reader.uint32();

          switch (tag >>> 3) {
            case 1:
              message.type_url = reader.string();
              break;

            case 2:
              message.value = reader.bytes();
              break;

            default:
              reader.skipType(tag & 7);
              break;
          }
        }

        return message;
      };
      /**
       * Decodes an Any message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Any
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Any} Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */


      Any.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies an Any message.
       * @function verify
       * @memberof google.protobuf.Any
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Any.verify = function verify(message) {
        if (typeof message !== "object" || message === null) return "object expected";
        if (message.type_url != null && message.hasOwnProperty("type_url")) if (!$util.isString(message.type_url)) return "type_url: string expected";
        if (message.value != null && message.hasOwnProperty("value")) if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value))) return "value: buffer expected";
        return null;
      };
      /**
       * Creates an Any message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Any
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Any} Any
       */


      Any.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Any) return object;
        var message = new $root.google.protobuf.Any();
        if (object.type_url != null) message.type_url = String(object.type_url);
        if (object.value != null) if (typeof object.value === "string") $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);else if (object.value.length) message.value = object.value;
        return message;
      };
      /**
       * Creates a plain object from an Any message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Any
       * @static
       * @param {google.protobuf.Any} message Any
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Any.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};

        if (options.defaults) {
          object.type_url = "";
          if (options.bytes === String) object.value = "";else {
            object.value = [];
            if (options.bytes !== Array) object.value = $util.newBuffer(object.value);
          }
        }

        if (message.type_url != null && message.hasOwnProperty("type_url")) object.type_url = message.type_url;
        if (message.value != null && message.hasOwnProperty("value")) object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
      };
      /**
       * Converts this Any to JSON.
       * @function toJSON
       * @memberof google.protobuf.Any
       * @instance
       * @returns {Object.<string,*>} JSON object
       */


      Any.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Any;
    }();

    return protobuf;
  }();

  return google;
}();