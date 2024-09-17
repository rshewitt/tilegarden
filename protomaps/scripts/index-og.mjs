//df23fa6
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/@smithy/types/dist-cjs/index.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      AlgorithmId: () => AlgorithmId,
      EndpointURLScheme: () => EndpointURLScheme,
      FieldPosition: () => FieldPosition,
      HttpApiKeyAuthLocation: () => HttpApiKeyAuthLocation,
      HttpAuthLocation: () => HttpAuthLocation,
      IniSectionType: () => IniSectionType,
      RequestHandlerProtocol: () => RequestHandlerProtocol,
      SMITHY_CONTEXT_KEY: () => SMITHY_CONTEXT_KEY,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig
    });
    module.exports = __toCommonJS(src_exports);
    var HttpAuthLocation = /* @__PURE__ */ ((HttpAuthLocation2) => {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
      return HttpAuthLocation2;
    })(HttpAuthLocation || {});
    var HttpApiKeyAuthLocation = /* @__PURE__ */ ((HttpApiKeyAuthLocation2) => {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
      return HttpApiKeyAuthLocation2;
    })(HttpApiKeyAuthLocation || {});
    var EndpointURLScheme = /* @__PURE__ */ ((EndpointURLScheme2) => {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
      return EndpointURLScheme2;
    })(EndpointURLScheme || {});
    var AlgorithmId = /* @__PURE__ */ ((AlgorithmId2) => {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
      return AlgorithmId2;
    })(AlgorithmId || {});
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "sha256",
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "md5",
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getDefaultClientConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration(runtimeConfig)
      };
    }, "getDefaultClientConfiguration");
    var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
    var FieldPosition = /* @__PURE__ */ ((FieldPosition2) => {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      return FieldPosition2;
    })(FieldPosition || {});
    var SMITHY_CONTEXT_KEY = "__smithy_context";
    var IniSectionType = /* @__PURE__ */ ((IniSectionType2) => {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
      return IniSectionType2;
    })(IniSectionType || {});
    var RequestHandlerProtocol = /* @__PURE__ */ ((RequestHandlerProtocol2) => {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      return RequestHandlerProtocol2;
    })(RequestHandlerProtocol || {});
  }
});

// node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      Field: () => Field,
      Fields: () => Fields,
      HttpRequest: () => HttpRequest,
      HttpResponse: () => HttpResponse,
      IHttpRequest: () => import_types.HttpRequest,
      getHttpHandlerExtensionConfiguration: () => getHttpHandlerExtensionConfiguration,
      isValidHostname: () => isValidHostname,
      resolveHttpHandlerRuntimeConfig: () => resolveHttpHandlerRuntimeConfig
    });
    module.exports = __toCommonJS(src_exports);
    var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let httpHandler = runtimeConfig.httpHandler;
      return {
        setHttpHandler(handler2) {
          httpHandler = handler2;
        },
        httpHandler() {
          return httpHandler;
        },
        updateHttpClientConfig(key, value) {
          httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration");
    var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig");
    var import_types = require_dist_cjs();
    var _Field = class _Field {
      constructor({ name, kind = import_types.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      /**
       * Appends a value to the field.
       *
       * @param value The value to append.
       */
      add(value) {
        this.values.push(value);
      }
      /**
       * Overwrite existing field values.
       *
       * @param values The new field values.
       */
      set(values) {
        this.values = values;
      }
      /**
       * Remove all matching entries from list.
       *
       * @param value Value to remove.
       */
      remove(value) {
        this.values = this.values.filter((v) => v !== value);
      }
      /**
       * Get comma-delimited string.
       *
       * @returns String representation of {@link Field}.
       */
      toString() {
        return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
      }
      /**
       * Get string values as a list
       *
       * @returns Values in {@link Field} as a list.
       */
      get() {
        return this.values;
      }
    };
    __name(_Field, "Field");
    var Field = _Field;
    var _Fields = class _Fields {
      constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      /**
       * Set entry for a {@link Field} name. The `name`
       * attribute will be used to key the collection.
       *
       * @param field The {@link Field} to set.
       */
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      /**
       *  Retrieve {@link Field} entry by name.
       *
       * @param name The name of the {@link Field} entry
       *  to retrieve
       * @returns The {@link Field} if it exists.
       */
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      /**
       * Delete entry from collection.
       *
       * @param name Name of the entry to delete.
       */
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      /**
       * Helper function for retrieving specific types of fields.
       * Used to grab all headers or all trailers.
       *
       * @param kind {@link FieldPosition} of entries to retrieve.
       * @returns The {@link Field} entries with the specified
       *  {@link FieldPosition}.
       */
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    __name(_Fields, "Fields");
    var Fields = _Fields;
    var _HttpRequest = class _HttpRequest2 {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      /**
       * Note: this does not deep-clone the body.
       */
      static clone(request) {
        const cloned = new _HttpRequest2({
          ...request,
          headers: { ...request.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      /**
       * This method only actually asserts that request is the interface {@link IHttpRequest},
       * and not necessarily this concrete class. Left in place for API stability.
       *
       * Do not call instance methods on the input of this function, and
       * do not assume it has the HttpRequest prototype.
       */
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      /**
       * @deprecated use static HttpRequest.clone(request) instead. It's not safe to call
       * this method because {@link HttpRequest.isInstance} incorrectly
       * asserts that IHttpRequest (interface) objects are of type HttpRequest (class).
       */
      clone() {
        return _HttpRequest2.clone(this);
      }
    };
    __name(_HttpRequest, "HttpRequest");
    var HttpRequest = _HttpRequest;
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
    __name(cloneQuery, "cloneQuery");
    var _HttpResponse = class _HttpResponse {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    __name(_HttpResponse, "HttpResponse");
    var HttpResponse = _HttpResponse;
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    __name(isValidHostname, "isValidHostname");
  }
});

// node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      escapeUri: () => escapeUri,
      escapeUriPath: () => escapeUriPath
    });
    module.exports = __toCommonJS(src_exports);
    var escapeUri = /* @__PURE__ */ __name((uri) => (
      // AWS percent-encodes some extra non-standard characters in a URI
      encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode)
    ), "escapeUri");
    var hexEncode = /* @__PURE__ */ __name((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
    var escapeUriPath = /* @__PURE__ */ __name((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
  }
});

// node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports, module) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      buildQueryString: () => buildQueryString
    });
    module.exports = __toCommonJS(src_exports);
    var import_util_uri_escape = require_dist_cjs3();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, import_util_uri_escape.escapeUri)(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${(0, import_util_uri_escape.escapeUri)(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${(0, import_util_uri_escape.escapeUri)(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    __name(buildQueryString, "buildQueryString");
  }
});

// node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports, module) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      DEFAULT_REQUEST_TIMEOUT: () => DEFAULT_REQUEST_TIMEOUT,
      NodeHttp2Handler: () => NodeHttp2Handler,
      NodeHttpHandler: () => NodeHttpHandler2,
      streamCollector: () => streamCollector
    });
    module.exports = __toCommonJS(src_exports);
    var import_protocol_http = require_dist_cjs2();
    var import_querystring_builder = require_dist_cjs4();
    var import_http = __require("http");
    var import_https = __require("https");
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
    var setConnectionTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request.destroy();
        reject(
          Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError"
          })
        );
      }, timeoutInMs);
      request.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    }, "setConnectionTimeout");
    var setSocketKeepAlive = /* @__PURE__ */ __name((request, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    }, "setSocketKeepAlive");
    var setSocketTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    }, "setSocketTimeout");
    var import_stream = __require("stream");
    var MIN_WAIT_TIME = 1e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
      const headers = request.headers ?? {};
      const expect = headers["Expect"] || headers["expect"];
      let timeoutId = -1;
      let hasError = false;
      if (expect === "100-continue") {
        await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              clearTimeout(timeoutId);
              resolve();
            });
            httpRequest.on("error", () => {
              hasError = true;
              clearTimeout(timeoutId);
              resolve();
            });
          })
        ]);
      }
      if (!hasError) {
        writeBody(httpRequest, request.body);
      }
    }
    __name(writeRequestBody, "writeRequestBody");
    function writeBody(httpRequest, body) {
      if (body instanceof import_stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
          httpRequest.end(body);
          return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
          httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
          return;
        }
        httpRequest.end(Buffer.from(body));
        return;
      }
      httpRequest.end();
    }
    __name(writeBody, "writeBody");
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var _NodeHttpHandler = class _NodeHttpHandler2 {
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler2(instanceOrOptions);
      }
      /**
       * @internal
       *
       * @param agent - http(s) agent in use by the NodeHttpHandler instance.
       * @param socketWarningTimestamp - last socket usage check timestamp.
       * @param logger - channel for the warning.
       * @returns timestamp of last emitted warning.
       */
      static checkSocketUsage(agent, socketWarningTimestamp, logger = console) {
        var _a2, _b2, _c;
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = ((_a2 = sockets[origin]) == null ? void 0 : _a2.length) ?? 0;
            const requestsEnqueued = ((_b2 = requests[origin]) == null ? void 0 : _b2.length) ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              (_c = logger == null ? void 0 : logger.warn) == null ? void 0 : _c.call(
                logger,
                `@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`
              );
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout ?? socketTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof import_http.Agent || typeof (httpAgent == null ? void 0 : httpAgent.destroy) === "function") {
              return httpAgent;
            }
            return new import_http.Agent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof import_https.Agent || typeof (httpsAgent == null ? void 0 : httpsAgent.destroy) === "function") {
              return httpsAgent;
            }
            return new import_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: console
        };
      }
      destroy() {
        var _a2, _b2, _c, _d;
        (_b2 = (_a2 = this.config) == null ? void 0 : _a2.httpAgent) == null ? void 0 : _b2.destroy();
        (_d = (_c = this.config) == null ? void 0 : _c.httpsAgent) == null ? void 0 : _d.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _reject(arg);
          }, "reject");
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal == null ? void 0 : abortSignal.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          socketCheckTimeoutId = setTimeout(
            () => {
              this.socketWarningTimestamp = _NodeHttpHandler2.checkSocketUsage(
                agent,
                this.socketWarningTimestamp,
                this.config.logger
              );
            },
            this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3)
          );
          const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path,
            port: request.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? import_https.request : import_http.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new import_protocol_http.HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err2) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err2.code)) {
              reject(Object.assign(err2, { name: "TimeoutError" }));
            } else {
              reject(err2);
            }
          });
          setConnectionTimeout(req, reject, this.config.connectionTimeout);
          setSocketTimeout(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            const onAbort = /* @__PURE__ */ __name(() => {
              req.destroy();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            setSocketKeepAlive(req, {
              // @ts-expect-error keepAlive is not public on httpAgent.
              keepAlive: httpAgent.keepAlive,
              // @ts-expect-error keepAliveMsecs is not public on httpAgent.
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = writeRequestBody(req, request, this.config.requestTimeout).catch((e) => {
            clearTimeout(socketCheckTimeoutId);
            return _reject(e);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    __name(_NodeHttpHandler, "NodeHttpHandler");
    var NodeHttpHandler2 = _NodeHttpHandler;
    var import_http22 = __require("http2");
    var import_http2 = __toESM2(__require("http2"));
    var _NodeHttp2ConnectionPool = class _NodeHttp2ConnectionPool {
      constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
    __name(_NodeHttp2ConnectionPool, "NodeHttp2ConnectionPool");
    var NodeHttp2ConnectionPool = _NodeHttp2ConnectionPool;
    var _NodeHttp2ConnectionManager = class _NodeHttp2ConnectionManager {
      constructor(config) {
        this.sessionCache = /* @__PURE__ */ new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = import_http2.default.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err2) => {
            if (err2) {
              throw new Error(
                "Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString()
              );
            }
          });
        }
        session.unref();
        const destroySessionCb = /* @__PURE__ */ __name(() => {
          session.destroy();
          this.deleteSession(url, session);
        }, "destroySessionCb");
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
          session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
      }
      /**
       * Delete a session from the connection pool.
       * @param authority The authority of the session to delete.
       * @param session The session to delete.
       */
      deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
          return;
        }
        if (!existingConnectionPool.contains(session)) {
          return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
      }
      release(requestContext, session) {
        var _a2;
        const cacheKey = this.getUrlString(requestContext);
        (_a2 = this.sessionCache.get(cacheKey)) == null ? void 0 : _a2.offerLast(session);
      }
      destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
          for (const session of connectionPool) {
            if (!session.destroyed) {
              session.destroy();
            }
            connectionPool.remove(session);
          }
          this.sessionCache.delete(key);
        }
      }
      setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
      }
      setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
      }
      getUrlString(request) {
        return request.destination.toString();
      }
    };
    __name(_NodeHttp2ConnectionManager, "NodeHttp2ConnectionManager");
    var NodeHttp2ConnectionManager = _NodeHttp2ConnectionManager;
    var _NodeHttp2Handler = class _NodeHttp2Handler2 {
      constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((opts) => {
              resolve(opts || {});
            }).catch(reject);
          } else {
            resolve(options || {});
          }
        });
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttp2Handler2(instanceOrOptions);
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
          var _a2;
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          }, "reject");
          if (abortSignal == null ? void 0 : abortSignal.aborted) {
            fulfilled = true;
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const { hostname, method, port, protocol, query } = request;
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
          const requestContext = { destination: new URL(authority) };
          const session = this.connectionManager.lease(requestContext, {
            requestTimeout: (_a2 = this.config) == null ? void 0 : _a2.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = /* @__PURE__ */ __name((err2) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err2);
          }, "rejectWithDestroy");
          const queryString = (0, import_querystring_builder.buildQueryString)(query || {});
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [import_http22.constants.HTTP2_HEADER_PATH]: path,
            [import_http22.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new import_protocol_http.HttpResponse({
              statusCode: headers[":status"] || -1,
              headers: getTransformedHeaders(headers),
              body: req
            });
            fulfilled = true;
            resolve({ response: httpResponse });
            if (disableConcurrentStreams) {
              session.close();
              this.connectionManager.deleteSession(authority, session);
            }
          });
          if (requestTimeout) {
            req.setTimeout(requestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            const onAbort = /* @__PURE__ */ __name(() => {
              req.close();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              rejectWithDestroy(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(
              new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`)
            );
          });
          req.on("close", () => {
            session.unref();
            if (disableConcurrentStreams) {
              session.destroy();
            }
            if (!fulfilled) {
              rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
            }
          });
          writeRequestBodyPromise = writeRequestBody(req, request, requestTimeout);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      /**
       * Destroys a session.
       * @param session The session to destroy.
       */
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    __name(_NodeHttp2Handler, "NodeHttp2Handler");
    var NodeHttp2Handler = _NodeHttp2Handler;
    var _Collector = class _Collector extends import_stream.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    __name(_Collector, "Collector");
    var Collector = _Collector;
    var streamCollector = /* @__PURE__ */ __name((stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err2) => {
          collector.end();
          reject(err2);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    var isReadableStreamInstance = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream, "isReadableStreamInstance");
    async function collectReadableStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectReadableStream, "collectReadableStream");
  }
});

// ../../js/node_modules/fflate/esm/index.mjs
import { createRequire } from "module";
var require2 = createRequire("/");
var Worker;
try {
  Worker = require2("worker_threads").Worker;
} catch (e) {
}
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new u8(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st.i != 2;
  var noSt = st.i;
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift2 = dl - dt, dend = Math.min(dt, end);
          if (shift2 + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift2 + bt];
        }
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var gzs = function(d) {
  if (d[0] != 31 || d[1] != 139 || d[2] != 8)
    err(6, "invalid gzip data");
  var flg = d[3];
  var st = 10;
  if (flg & 4)
    st += (d[10] | d[11] << 8) + 2;
  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
    ;
  return st + (flg & 2);
};
var gzl = function(d) {
  var l = d.length;
  return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
var zls = function(d, dict) {
  if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    err(6, "invalid zlib data");
  if ((d[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d[1] >> 3 & 4) + 2;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function gunzipSync(data, opts) {
  var st = gzs(data);
  if (st + 8 > data.length)
    err(6, "invalid gzip data");
  return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
}
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function decompressSync(data, opts) {
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, opts) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, opts) : unzlibSync(data, opts);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}

// ../../js/v2.ts
var shift = (n, shift2) => {
  return n * 2 ** shift2;
};
var unshift = (n, shift2) => {
  return Math.floor(n / 2 ** shift2);
};
var getUint24 = (view, pos) => {
  return shift(view.getUint16(pos + 1, true), 8) + view.getUint8(pos);
};
var getUint48 = (view, pos) => {
  return shift(view.getUint32(pos + 2, true), 16) + view.getUint16(pos, true);
};
var compare = (tz, tx, ty, view, i) => {
  if (tz !== view.getUint8(i))
    return tz - view.getUint8(i);
  const x = getUint24(view, i + 1);
  if (tx !== x)
    return tx - x;
  const y = getUint24(view, i + 4);
  if (ty !== y)
    return ty - y;
  return 0;
};
var queryLeafdir = (view, z, x, y) => {
  const offsetLen = queryView(view, z | 128, x, y);
  if (offsetLen) {
    return {
      z,
      x,
      y,
      offset: offsetLen[0],
      length: offsetLen[1],
      isDir: true
    };
  }
  return null;
};
var queryTile = (view, z, x, y) => {
  const offsetLen = queryView(view, z, x, y);
  if (offsetLen) {
    return {
      z,
      x,
      y,
      offset: offsetLen[0],
      length: offsetLen[1],
      isDir: false
    };
  }
  return null;
};
var queryView = (view, z, x, y) => {
  let m = 0;
  let n = view.byteLength / 17 - 1;
  while (m <= n) {
    const k = n + m >> 1;
    const cmp = compare(z, x, y, view, k * 17);
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return [getUint48(view, k * 17 + 7), view.getUint32(k * 17 + 13, true)];
    }
  }
  return null;
};
var entrySort = (a, b) => {
  if (a.isDir && !b.isDir) {
    return 1;
  }
  if (!a.isDir && b.isDir) {
    return -1;
  }
  if (a.z !== b.z) {
    return a.z - b.z;
  }
  if (a.x !== b.x) {
    return a.x - b.x;
  }
  return a.y - b.y;
};
var parseEntry = (dataview, i) => {
  const zRaw = dataview.getUint8(i * 17);
  const z = zRaw & 127;
  return {
    z,
    x: getUint24(dataview, i * 17 + 1),
    y: getUint24(dataview, i * 17 + 4),
    offset: getUint48(dataview, i * 17 + 7),
    length: dataview.getUint32(i * 17 + 13, true),
    isDir: zRaw >> 7 === 1
  };
};
var sortDir = (a) => {
  const entries = [];
  const view = new DataView(a);
  for (let i = 0; i < view.byteLength / 17; i++) {
    entries.push(parseEntry(view, i));
  }
  return createDirectory(entries);
};
var createDirectory = (entries) => {
  entries.sort(entrySort);
  const buffer = new ArrayBuffer(17 * entries.length);
  const arr = new Uint8Array(buffer);
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    let z = entry.z;
    if (entry.isDir)
      z = z | 128;
    arr[i * 17] = z;
    arr[i * 17 + 1] = entry.x & 255;
    arr[i * 17 + 2] = entry.x >> 8 & 255;
    arr[i * 17 + 3] = entry.x >> 16 & 255;
    arr[i * 17 + 4] = entry.y & 255;
    arr[i * 17 + 5] = entry.y >> 8 & 255;
    arr[i * 17 + 6] = entry.y >> 16 & 255;
    arr[i * 17 + 7] = entry.offset & 255;
    arr[i * 17 + 8] = unshift(entry.offset, 8) & 255;
    arr[i * 17 + 9] = unshift(entry.offset, 16) & 255;
    arr[i * 17 + 10] = unshift(entry.offset, 24) & 255;
    arr[i * 17 + 11] = unshift(entry.offset, 32) & 255;
    arr[i * 17 + 12] = unshift(entry.offset, 48) & 255;
    arr[i * 17 + 13] = entry.length & 255;
    arr[i * 17 + 14] = entry.length >> 8 & 255;
    arr[i * 17 + 15] = entry.length >> 16 & 255;
    arr[i * 17 + 16] = entry.length >> 24 & 255;
  }
  return buffer;
};
var deriveLeaf = (view, tile) => {
  if (view.byteLength < 17)
    return null;
  const numEntries = view.byteLength / 17;
  const entry = parseEntry(view, numEntries - 1);
  if (entry.isDir) {
    const leafLevel = entry.z;
    const levelDiff = tile.z - leafLevel;
    const leafX = Math.trunc(tile.x / (1 << levelDiff));
    const leafY = Math.trunc(tile.y / (1 << levelDiff));
    return { z: leafLevel, x: leafX, y: leafY };
  }
  return null;
};
async function getHeader(source) {
  const resp = await source.getBytes(0, 512e3);
  const dataview = new DataView(resp.data);
  const jsonSize = dataview.getUint32(4, true);
  const rootEntries = dataview.getUint16(8, true);
  const dec = new TextDecoder("utf-8");
  const jsonMetadata = JSON.parse(
    dec.decode(new DataView(resp.data, 10, jsonSize))
  );
  let tileCompression = 0 /* Unknown */;
  if (jsonMetadata.compression === "gzip") {
    tileCompression = 2 /* Gzip */;
  }
  let minzoom = 0;
  if ("minzoom" in jsonMetadata) {
    minzoom = +jsonMetadata.minzoom;
  }
  let maxzoom = 0;
  if ("maxzoom" in jsonMetadata) {
    maxzoom = +jsonMetadata.maxzoom;
  }
  let centerLon = 0;
  let centerLat = 0;
  let centerZoom = 0;
  let minLon = -180;
  let minLat = -85;
  let maxLon = 180;
  let maxLat = 85;
  if (jsonMetadata.bounds) {
    const split = jsonMetadata.bounds.split(",");
    minLon = +split[0];
    minLat = +split[1];
    maxLon = +split[2];
    maxLat = +split[3];
  }
  if (jsonMetadata.center) {
    const split = jsonMetadata.center.split(",");
    centerLon = +split[0];
    centerLat = +split[1];
    centerZoom = +split[2];
  }
  const header = {
    specVersion: dataview.getUint16(2, true),
    rootDirectoryOffset: 10 + jsonSize,
    rootDirectoryLength: rootEntries * 17,
    jsonMetadataOffset: 10,
    jsonMetadataLength: jsonSize,
    leafDirectoryOffset: 0,
    leafDirectoryLength: void 0,
    tileDataOffset: 0,
    tileDataLength: void 0,
    numAddressedTiles: 0,
    numTileEntries: 0,
    numTileContents: 0,
    clustered: false,
    internalCompression: 1 /* None */,
    tileCompression,
    tileType: 1 /* Mvt */,
    minZoom: minzoom,
    maxZoom: maxzoom,
    minLon,
    minLat,
    maxLon,
    maxLat,
    centerZoom,
    centerLon,
    centerLat,
    etag: resp.etag
  };
  return header;
}
async function getZxy(header, source, cache, z, x, y, signal) {
  let rootDir = await cache.getArrayBuffer(
    source,
    header.rootDirectoryOffset,
    header.rootDirectoryLength,
    header
  );
  if (header.specVersion === 1) {
    rootDir = sortDir(rootDir);
  }
  const entry = queryTile(new DataView(rootDir), z, x, y);
  if (entry) {
    const resp = await source.getBytes(entry.offset, entry.length, signal);
    let tileData = resp.data;
    const view = new DataView(tileData);
    if (view.getUint8(0) === 31 && view.getUint8(1) === 139) {
      tileData = decompressSync(new Uint8Array(tileData));
    }
    return {
      data: tileData
    };
  }
  const leafcoords = deriveLeaf(new DataView(rootDir), { z, x, y });
  if (leafcoords) {
    const leafdirEntry = queryLeafdir(
      new DataView(rootDir),
      leafcoords.z,
      leafcoords.x,
      leafcoords.y
    );
    if (leafdirEntry) {
      let leafDir = await cache.getArrayBuffer(
        source,
        leafdirEntry.offset,
        leafdirEntry.length,
        header
      );
      if (header.specVersion === 1) {
        leafDir = sortDir(leafDir);
      }
      const tileEntry = queryTile(new DataView(leafDir), z, x, y);
      if (tileEntry) {
        const resp = await source.getBytes(
          tileEntry.offset,
          tileEntry.length,
          signal
        );
        let tileData = resp.data;
        const view = new DataView(tileData);
        if (view.getUint8(0) === 31 && view.getUint8(1) === 139) {
          tileData = decompressSync(new Uint8Array(tileData));
        }
        return {
          data: tileData
        };
      }
    }
  }
  return void 0;
}
var v2_default = {
  getHeader,
  getZxy
};

// ../../js/index.ts
function toNum(low, high) {
  return (high >>> 0) * 4294967296 + (low >>> 0);
}
function readVarintRemainder(l, p) {
  const buf = p.buf;
  let b = buf[p.pos++];
  let h = (b & 112) >> 4;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 3;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 10;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 17;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 24;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 1) << 31;
  if (b < 128)
    return toNum(l, h);
  throw new Error("Expected varint not more than 10 bytes");
}
function readVarint(p) {
  const buf = p.buf;
  let b = buf[p.pos++];
  let val = b & 127;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 7;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 14;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 21;
  if (b < 128)
    return val;
  b = buf[p.pos];
  val |= (b & 15) << 28;
  return readVarintRemainder(val, p);
}
function rotate(n, xy, rx, ry) {
  if (ry === 0) {
    if (rx === 1) {
      xy[0] = n - 1 - xy[0];
      xy[1] = n - 1 - xy[1];
    }
    const t = xy[0];
    xy[0] = xy[1];
    xy[1] = t;
  }
}
var tzValues = [
  0,
  1,
  5,
  21,
  85,
  341,
  1365,
  5461,
  21845,
  87381,
  349525,
  1398101,
  5592405,
  22369621,
  89478485,
  357913941,
  1431655765,
  5726623061,
  22906492245,
  91625968981,
  366503875925,
  1466015503701,
  5864062014805,
  23456248059221,
  93824992236885,
  375299968947541,
  1501199875790165
];
function zxyToTileId(z, x, y) {
  if (z > 26) {
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  }
  if (x > 2 ** z - 1 || y > 2 ** z - 1) {
    throw Error("tile x/y outside zoom level bounds");
  }
  const acc = tzValues[z];
  const n = 2 ** z;
  let rx = 0;
  let ry = 0;
  let d = 0;
  const xy = [x, y];
  let s = n / 2;
  while (s > 0) {
    rx = (xy[0] & s) > 0 ? 1 : 0;
    ry = (xy[1] & s) > 0 ? 1 : 0;
    d += s * s * (3 * rx ^ ry);
    rotate(s, xy, rx, ry);
    s = s / 2;
  }
  return acc + d;
}
async function defaultDecompress(buf, compression) {
  if (compression === 1 /* None */ || compression === 0 /* Unknown */) {
    return buf;
  }
  if (compression === 2 /* Gzip */) {
    if (typeof globalThis.DecompressionStream === "undefined") {
      return decompressSync(new Uint8Array(buf));
    }
    const stream = new Response(buf).body;
    if (!stream) {
      throw Error("Failed to read response stream");
    }
    const result = stream.pipeThrough(
      // biome-ignore lint: needed to detect DecompressionStream in browser+node+cloudflare workers
      new globalThis.DecompressionStream("gzip")
    );
    return new Response(result).arrayBuffer();
  }
  throw Error("Compression method not supported");
}
var HEADER_SIZE_BYTES = 127;
function findTile(entries, tileId) {
  let m = 0;
  let n = entries.length - 1;
  while (m <= n) {
    const k = n + m >> 1;
    const cmp = tileId - entries[k].tileId;
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return entries[k];
    }
  }
  if (n >= 0) {
    if (entries[n].runLength === 0) {
      return entries[n];
    }
    if (tileId - entries[n].tileId < entries[n].runLength) {
      return entries[n];
    }
  }
  return null;
}
var FetchSource = class {
  constructor(url, customHeaders = new Headers()) {
    this.url = url;
    this.customHeaders = customHeaders;
    this.mustReload = false;
  }
  getKey() {
    return this.url;
  }
  setHeaders(customHeaders) {
    this.customHeaders = customHeaders;
  }
  async getBytes(offset, length, passedSignal, etag) {
    let controller;
    let signal;
    if (passedSignal) {
      signal = passedSignal;
    } else {
      controller = new AbortController();
      signal = controller.signal;
    }
    const requestHeaders = new Headers(this.customHeaders);
    requestHeaders.set("range", `bytes=${offset}-${offset + length - 1}`);
    let cache;
    if (this.mustReload) {
      cache = "reload";
    }
    let resp = await fetch(this.url, {
      signal,
      cache,
      headers: requestHeaders
      //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
    });
    if (offset === 0 && resp.status === 416) {
      const contentRange = resp.headers.get("Content-Range");
      if (!contentRange || !contentRange.startsWith("bytes */")) {
        throw Error("Missing content-length on 416 response");
      }
      const actualLength = +contentRange.substr(8);
      resp = await fetch(this.url, {
        signal,
        cache: "reload",
        headers: { range: `bytes=0-${actualLength - 1}` }
        //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
      });
    }
    let newEtag = resp.headers.get("Etag");
    if (newEtag?.startsWith("W/")) {
      newEtag = null;
    }
    if (resp.status === 416 || etag && newEtag && newEtag !== etag) {
      this.mustReload = true;
      throw new EtagMismatch(
        `Server returned non-matching ETag ${etag} after one retry. Check browser extensions and servers for issues that may affect correct ETag headers.`
      );
    }
    if (resp.status >= 300) {
      throw Error(`Bad response code: ${resp.status}`);
    }
    const contentLength = resp.headers.get("Content-Length");
    if (resp.status === 200 && (!contentLength || +contentLength > length)) {
      if (controller)
        controller.abort();
      throw Error(
        "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
      );
    }
    const a = await resp.arrayBuffer();
    return {
      data: a,
      etag: newEtag || void 0,
      cacheControl: resp.headers.get("Cache-Control") || void 0,
      expires: resp.headers.get("Expires") || void 0
    };
  }
};
function getUint64(v, offset) {
  const wh = v.getUint32(offset + 4, true);
  const wl = v.getUint32(offset + 0, true);
  return wh * 2 ** 32 + wl;
}
function bytesToHeader(bytes, etag) {
  const v = new DataView(bytes);
  const specVersion = v.getUint8(7);
  if (specVersion > 3) {
    throw Error(
      `Archive is spec version ${specVersion} but this library supports up to spec version 3`
    );
  }
  return {
    specVersion,
    rootDirectoryOffset: getUint64(v, 8),
    rootDirectoryLength: getUint64(v, 16),
    jsonMetadataOffset: getUint64(v, 24),
    jsonMetadataLength: getUint64(v, 32),
    leafDirectoryOffset: getUint64(v, 40),
    leafDirectoryLength: getUint64(v, 48),
    tileDataOffset: getUint64(v, 56),
    tileDataLength: getUint64(v, 64),
    numAddressedTiles: getUint64(v, 72),
    numTileEntries: getUint64(v, 80),
    numTileContents: getUint64(v, 88),
    clustered: v.getUint8(96) === 1,
    internalCompression: v.getUint8(97),
    tileCompression: v.getUint8(98),
    tileType: v.getUint8(99),
    minZoom: v.getUint8(100),
    maxZoom: v.getUint8(101),
    minLon: v.getInt32(102, true) / 1e7,
    minLat: v.getInt32(106, true) / 1e7,
    maxLon: v.getInt32(110, true) / 1e7,
    maxLat: v.getInt32(114, true) / 1e7,
    centerZoom: v.getUint8(118),
    centerLon: v.getInt32(119, true) / 1e7,
    centerLat: v.getInt32(123, true) / 1e7,
    etag
  };
}
function deserializeIndex(buffer) {
  const p = { buf: new Uint8Array(buffer), pos: 0 };
  const numEntries = readVarint(p);
  const entries = [];
  let lastId = 0;
  for (let i = 0; i < numEntries; i++) {
    const v = readVarint(p);
    entries.push({ tileId: lastId + v, offset: 0, length: 0, runLength: 1 });
    lastId += v;
  }
  for (let i = 0; i < numEntries; i++) {
    entries[i].runLength = readVarint(p);
  }
  for (let i = 0; i < numEntries; i++) {
    entries[i].length = readVarint(p);
  }
  for (let i = 0; i < numEntries; i++) {
    const v = readVarint(p);
    if (v === 0 && i > 0) {
      entries[i].offset = entries[i - 1].offset + entries[i - 1].length;
    } else {
      entries[i].offset = v - 1;
    }
  }
  return entries;
}
function detectVersion(a) {
  const v = new DataView(a);
  if (v.getUint16(2, true) === 2) {
    console.warn(
      "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
    );
    return 2;
  }
  if (v.getUint16(2, true) === 1) {
    console.warn(
      "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
    );
    return 1;
  }
  return 3;
}
var EtagMismatch = class extends Error {
};
async function getHeaderAndRoot(source, decompress) {
  const resp = await source.getBytes(0, 16384);
  const v = new DataView(resp.data);
  if (v.getUint16(0, true) !== 19792) {
    throw new Error("Wrong magic number for PMTiles archive");
  }
  if (detectVersion(resp.data) < 3) {
    return [await v2_default.getHeader(source)];
  }
  const headerData = resp.data.slice(0, HEADER_SIZE_BYTES);
  const header = bytesToHeader(headerData, resp.etag);
  const rootDirData = resp.data.slice(
    header.rootDirectoryOffset,
    header.rootDirectoryOffset + header.rootDirectoryLength
  );
  const dirKey = `${source.getKey()}|${header.etag || ""}|${header.rootDirectoryOffset}|${header.rootDirectoryLength}`;
  const rootDir = deserializeIndex(
    await decompress(rootDirData, header.internalCompression)
  );
  return [header, [dirKey, rootDir.length, rootDir]];
}
async function getDirectory(source, decompress, offset, length, header) {
  const resp = await source.getBytes(offset, length, void 0, header.etag);
  const data = await decompress(resp.data, header.internalCompression);
  const directory = deserializeIndex(data);
  if (directory.length === 0) {
    throw new Error("Empty directory is invalid");
  }
  return directory;
}
var ResolvedValueCache = class {
  constructor(maxCacheEntries = 100, prefetch = true, decompress = defaultDecompress) {
    this.cache = /* @__PURE__ */ new Map();
    this.maxCacheEntries = maxCacheEntries;
    this.counter = 1;
    this.decompress = decompress;
  }
  async getHeader(source) {
    const cacheKey = source.getKey();
    const cacheValue = this.cache.get(cacheKey);
    if (cacheValue) {
      cacheValue.lastUsed = this.counter++;
      const data = cacheValue.data;
      return data;
    }
    const res = await getHeaderAndRoot(source, this.decompress);
    if (res[1]) {
      this.cache.set(res[1][0], {
        lastUsed: this.counter++,
        data: res[1][2]
      });
    }
    this.cache.set(cacheKey, {
      lastUsed: this.counter++,
      data: res[0]
    });
    this.prune();
    return res[0];
  }
  async getDirectory(source, offset, length, header) {
    const cacheKey = `${source.getKey()}|${header.etag || ""}|${offset}|${length}`;
    const cacheValue = this.cache.get(cacheKey);
    if (cacheValue) {
      cacheValue.lastUsed = this.counter++;
      const data = cacheValue.data;
      return data;
    }
    const directory = await getDirectory(
      source,
      this.decompress,
      offset,
      length,
      header
    );
    this.cache.set(cacheKey, {
      lastUsed: this.counter++,
      data: directory
    });
    this.prune();
    return directory;
  }
  // for v2 backwards compatibility
  async getArrayBuffer(source, offset, length, header) {
    const cacheKey = `${source.getKey()}|${header.etag || ""}|${offset}|${length}`;
    const cacheValue = this.cache.get(cacheKey);
    if (cacheValue) {
      cacheValue.lastUsed = this.counter++;
      const data = await cacheValue.data;
      return data;
    }
    const resp = await source.getBytes(offset, length, void 0, header.etag);
    this.cache.set(cacheKey, {
      lastUsed: this.counter++,
      data: resp.data
    });
    this.prune();
    return resp.data;
  }
  prune() {
    if (this.cache.size > this.maxCacheEntries) {
      let minUsed = Infinity;
      let minKey = void 0;
      this.cache.forEach((cacheValue, key) => {
        if (cacheValue.lastUsed < minUsed) {
          minUsed = cacheValue.lastUsed;
          minKey = key;
        }
      });
      if (minKey) {
        this.cache.delete(minKey);
      }
    }
  }
  async invalidate(source) {
    this.cache.delete(source.getKey());
  }
};
var SharedPromiseCache = class {
  constructor(maxCacheEntries = 100, prefetch = true, decompress = defaultDecompress) {
    this.cache = /* @__PURE__ */ new Map();
    this.invalidations = /* @__PURE__ */ new Map();
    this.maxCacheEntries = maxCacheEntries;
    this.counter = 1;
    this.decompress = decompress;
  }
  async getHeader(source) {
    const cacheKey = source.getKey();
    const cacheValue = this.cache.get(cacheKey);
    if (cacheValue) {
      cacheValue.lastUsed = this.counter++;
      const data = await cacheValue.data;
      return data;
    }
    const p = new Promise((resolve, reject) => {
      getHeaderAndRoot(source, this.decompress).then((res) => {
        if (res[1]) {
          this.cache.set(res[1][0], {
            lastUsed: this.counter++,
            data: Promise.resolve(res[1][2])
          });
        }
        resolve(res[0]);
        this.prune();
      }).catch((e) => {
        reject(e);
      });
    });
    this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
    return p;
  }
  async getDirectory(source, offset, length, header) {
    const cacheKey = `${source.getKey()}|${header.etag || ""}|${offset}|${length}`;
    const cacheValue = this.cache.get(cacheKey);
    if (cacheValue) {
      cacheValue.lastUsed = this.counter++;
      const data = await cacheValue.data;
      return data;
    }
    const p = new Promise((resolve, reject) => {
      getDirectory(source, this.decompress, offset, length, header).then((directory) => {
        resolve(directory);
        this.prune();
      }).catch((e) => {
        reject(e);
      });
    });
    this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
    return p;
  }
  // for v2 backwards compatibility
  async getArrayBuffer(source, offset, length, header) {
    const cacheKey = `${source.getKey()}|${header.etag || ""}|${offset}|${length}`;
    const cacheValue = this.cache.get(cacheKey);
    if (cacheValue) {
      cacheValue.lastUsed = this.counter++;
      const data = await cacheValue.data;
      return data;
    }
    const p = new Promise((resolve, reject) => {
      source.getBytes(offset, length, void 0, header.etag).then((resp) => {
        resolve(resp.data);
        if (this.cache.has(cacheKey)) {
        }
        this.prune();
      }).catch((e) => {
        reject(e);
      });
    });
    this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
    return p;
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let minUsed = Infinity;
      let minKey = void 0;
      this.cache.forEach((cacheValue, key) => {
        if (cacheValue.lastUsed < minUsed) {
          minUsed = cacheValue.lastUsed;
          minKey = key;
        }
      });
      if (minKey) {
        this.cache.delete(minKey);
      }
    }
  }
  async invalidate(source) {
    const key = source.getKey();
    if (this.invalidations.get(key)) {
      return await this.invalidations.get(key);
    }
    this.cache.delete(source.getKey());
    const p = new Promise((resolve, reject) => {
      this.getHeader(source).then((h) => {
        resolve();
        this.invalidations.delete(key);
      }).catch((e) => {
        reject(e);
      });
    });
    this.invalidations.set(key, p);
  }
};
var PMTiles = class {
  constructor(source, cache, decompress) {
    if (typeof source === "string") {
      this.source = new FetchSource(source);
    } else {
      this.source = source;
    }
    if (decompress) {
      this.decompress = decompress;
    } else {
      this.decompress = defaultDecompress;
    }
    if (cache) {
      this.cache = cache;
    } else {
      this.cache = new SharedPromiseCache();
    }
  }
  /**
   * Return the header of the archive,
   * including information such as tile type, min/max zoom, bounds, and summary statistics.
   */
  async getHeader() {
    return await this.cache.getHeader(this.source);
  }
  /** @hidden */
  async getZxyAttempt(z, x, y, signal) {
    const tileId = zxyToTileId(z, x, y);
    const header = await this.cache.getHeader(this.source);
    if (header.specVersion < 3) {
      return v2_default.getZxy(header, this.source, this.cache, z, x, y, signal);
    }
    if (z < header.minZoom || z > header.maxZoom) {
      return void 0;
    }
    let dO = header.rootDirectoryOffset;
    let dL = header.rootDirectoryLength;
    for (let depth = 0; depth <= 3; depth++) {
      const directory = await this.cache.getDirectory(
        this.source,
        dO,
        dL,
        header
      );
      const entry = findTile(directory, tileId);
      if (entry) {
        if (entry.runLength > 0) {
          const resp = await this.source.getBytes(
            header.tileDataOffset + entry.offset,
            entry.length,
            signal,
            header.etag
          );
          return {
            data: await this.decompress(resp.data, header.tileCompression),
            cacheControl: resp.cacheControl,
            expires: resp.expires
          };
        }
        dO = header.leafDirectoryOffset + entry.offset;
        dL = entry.length;
      } else {
        return void 0;
      }
    }
    throw Error("Maximum directory depth exceeded");
  }
  /**
   * Primary method to get a single tile bytes from an archive.
   *
   * Returns undefined if the tile does not exist in the archive.
   */
  async getZxy(z, x, y, signal) {
    try {
      return await this.getZxyAttempt(z, x, y, signal);
    } catch (e) {
      if (e instanceof EtagMismatch) {
        this.cache.invalidate(this.source);
        return await this.getZxyAttempt(z, x, y, signal);
      }
      throw e;
    }
  }
  /** @hidden */
  async getMetadataAttempt() {
    const header = await this.cache.getHeader(this.source);
    const resp = await this.source.getBytes(
      header.jsonMetadataOffset,
      header.jsonMetadataLength,
      void 0,
      header.etag
    );
    const decompressed = await this.decompress(
      resp.data,
      header.internalCompression
    );
    const dec = new TextDecoder("utf-8");
    return JSON.parse(dec.decode(decompressed));
  }
  /**
   * Return the arbitrary JSON metadata of the archive.
   */
  async getMetadata() {
    try {
      return await this.getMetadataAttempt();
    } catch (e) {
      if (e instanceof EtagMismatch) {
        this.cache.invalidate(this.source);
        return await this.getMetadataAttempt();
      }
      throw e;
    }
  }
};

// ../shared/index.ts
var pmtiles_path = (name, setting) => {
  if (setting) {
    return setting.replaceAll("{name}", name);
  }
  return name + ".pmtiles";
};
var TILE = /^\/(?<NAME>[0-9a-zA-Z\/!\-_\.\*\'\(\)]+)\/(?<Z>\d+)\/(?<X>\d+)\/(?<Y>\d+).(?<EXT>[a-z]+)$/;
var TILESET = /^\/(?<NAME>[0-9a-zA-Z\/!\-_\.\*\'\(\)]+).json$/;
var tile_path = (path) => {
  const tile_match = path.match(TILE);
  if (tile_match) {
    const g = tile_match.groups;
    return { ok: true, name: g.NAME, tile: [+g.Z, +g.X, +g.Y], ext: g.EXT };
  }
  const tileset_match = path.match(TILESET);
  if (tileset_match) {
    const g = tileset_match.groups;
    return { ok: true, name: g.NAME, ext: "json" };
  }
  return { ok: false, name: "", tile: [0, 0, 0], ext: "" };
};
var tileJSON = (header, metadata, hostname, tileset_name) => {
  let ext = "";
  if (header.tileType === 1 /* Mvt */) {
    ext = ".mvt";
  } else if (header.tileType === 2 /* Png */) {
    ext = ".png";
  } else if (header.tileType === 3 /* Jpeg */) {
    ext = ".jpg";
  } else if (header.tileType === 4 /* Webp */) {
    ext = ".webp";
  } else if (header.tileType === 5 /* Avif */) {
    ext = ".avif";
  }
  return {
    tilejson: "3.0.0",
    scheme: "xyz",
    tiles: ["https://" + hostname + "/" + tileset_name + "/{z}/{x}/{y}" + ext],
    vector_layers: metadata.vector_layers,
    attribution: metadata.attribution,
    description: metadata.description,
    name: metadata.name,
    version: metadata.version,
    bounds: [header.minLon, header.minLat, header.maxLon, header.maxLat],
    center: [header.centerLon, header.centerLat, header.centerZoom],
    minzoom: header.minZoom,
    maxzoom: header.maxZoom
  };
};

// src/index.ts
var import_node_http_handler = __toESM(require_dist_cjs5());
import { createHash } from "crypto";
import zlib from "zlib";
import {
  GetObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";
var s3client = new S3Client({
  requestHandler: new import_node_http_handler.NodeHttpHandler({
    connectionTimeout: 500,
    socketTimeout: 500
  })
});
async function nativeDecompress(buf, compression) {
  if (compression === 1 /* None */ || compression === 0 /* Unknown */) {
    return buf;
  }
  if (compression === 2 /* Gzip */) {
    return zlib.gunzipSync(buf);
  }
  throw Error("Compression method not supported");
}
var CACHE = new ResolvedValueCache(void 0, void 0, nativeDecompress);
var S3Source = class {
  constructor(archiveName) {
    this.archiveName = archiveName;
  }
  getKey() {
    return this.archiveName;
  }
  async getBytes(offset, length, signal, etag) {
    let resp;
    try {
      resp = await s3client.send(
        new GetObjectCommand({
          // biome-ignore lint: aws api
          Bucket: process.env.BUCKET,
          // biome-ignore lint: aws api
          Key: pmtiles_path(this.archiveName, process.env.PMTILES_PATH),
          // biome-ignore lint: aws api
          Range: "bytes=" + offset + "-" + (offset + length - 1),
          // biome-ignore lint: aws api
          IfMatch: etag
        })
      );
    } catch (e) {
      if (e instanceof Error && e.name === "PreconditionFailed") {
        throw new EtagMismatch();
      }
      throw e;
    }
    const arr = await resp.Body?.transformToByteArray();
    if (!arr)
      throw Error("Failed to read S3 response body");
    return {
      data: arr.buffer,
      etag: resp.ETag,
      expires: resp.Expires?.toISOString(),
      cacheControl: resp.CacheControl
    };
  }
};
var apiResp = (statusCode, body, isBase64Encoded = false, headers = {}) => {
  return {
    statusCode,
    body,
    headers,
    isBase64Encoded
  };
};
var handlerRaw = async (event, _context, tilePostprocess) => {
  let path;
  let isApiGateway = false;
  if (event.pathParameters) {
    isApiGateway = true;
    if (event.pathParameters.proxy) {
      path = `/${event.pathParameters.proxy}`;
    } else {
      return apiResp(500, "Proxy integration missing tile_path parameter");
    }
  } else {
    path = event.rawPath;
  }
  if (!path) {
    return apiResp(500, "Invalid event configuration");
  }
  const headers = {};
  if (process.env.CORS) {
    headers["Access-Control-Allow-Origin"] = process.env.CORS;
  }
  const { ok, name, tile, ext } = tile_path(path);
  if (!ok) {
    return apiResp(400, "Invalid tile URL", false, headers);
  }
  const source = new S3Source(name);
  const p = new PMTiles(source, CACHE, nativeDecompress);
  try {
    const header = await p.getHeader();
    if (!tile) {
      if (!(process.env.PUBLIC_HOSTNAME || event.headers["x-distribution-domain-name"])) {
        return apiResp(
          501,
          "PUBLIC_HOSTNAME must be set for TileJSON",
          false,
          headers
        );
      }
      headers["Content-Type"] = "application/json";
      const t = tileJSON(
        header,
        await p.getMetadata(),
        process.env.PUBLIC_HOSTNAME || event.headers["x-distribution-domain-name"] || "",
        name
      );
      return apiResp(200, JSON.stringify(t), false, headers);
    }
    if (tile[0] < header.minZoom || tile[0] > header.maxZoom) {
      return apiResp(404, "", false, headers);
    }
    for (const pair of [
      [1 /* Mvt */, "mvt"],
      [2 /* Png */, "png"],
      [3 /* Jpeg */, "jpg"],
      [4 /* Webp */, "webp"],
      [5 /* Avif */, "avif"]
    ]) {
      if (header.tileType === pair[0] && ext !== pair[1]) {
        if (header.tileType === 1 /* Mvt */ && ext === "pbf") {
          continue;
        }
        return apiResp(
          400,
          `Bad request: requested .${ext} but archive has type .${pair[1]}`,
          false,
          headers
        );
      }
    }
    const tileResult = await p.getZxy(tile[0], tile[1], tile[2]);
    if (tileResult) {
      switch (header.tileType) {
        case 1 /* Mvt */:
          headers["Content-Type"] = "application/vnd.mapbox-vector-tile";
          break;
        case 2 /* Png */:
          headers["Content-Type"] = "image/png";
          break;
        case 3 /* Jpeg */:
          headers["Content-Type"] = "image/jpeg";
          break;
        case 4 /* Webp */:
          headers["Content-Type"] = "image/webp";
          break;
        case 5 /* Avif */:
          headers["Content-Type"] = "image/avif";
          break;
      }
      let data = tileResult.data;
      if (tilePostprocess) {
        data = tilePostprocess(data, header.tileType);
      }
      headers["Cache-Control"] = process.env.CACHE_CONTROL || "public, max-age=86400";
      headers.ETag = `"${createHash("sha256").update(Buffer.from(data)).digest("hex")}"`;
      if (isApiGateway) {
        const recompressedData = zlib.gzipSync(data);
        headers["Content-Encoding"] = "gzip";
        return apiResp(
          200,
          Buffer.from(recompressedData).toString("base64"),
          true,
          headers
        );
      }
      return apiResp(200, Buffer.from(data).toString("base64"), true, headers);
    }
    return apiResp(204, "", false, headers);
  } catch (e) {
    if (e.name === "AccessDenied") {
      return apiResp(403, "Bucket access unauthorized", false, headers);
    }
    throw e;
  }
};
var handler = async (event, context) => {
  return await handlerRaw(event, context);
};
export {
  handler,
  handlerRaw
};
