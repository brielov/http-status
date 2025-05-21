/**
 * HTTP status codes as defined by RFC 9110.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
export enum HttpStatus {
  /**
   * Client should continue the request or ignore if already finished.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
   */
  Continue = 100,

  /**
   * Server is switching protocols as requested by client.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101}
   */
  SwitchingProtocols = 101,

  /**
   * Request received, no status available (WebDAV, deprecated).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102}
   */
  Processing = 102,

  /**
   * Allows preloading resources with Link header.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103}
   */
  EarlyHints = 103,

  /**
   * Request succeeded, result depends on HTTP method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
   */
  OK = 200,

  /**
   * Request succeeded, new resource created.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
   */
  Created = 201,

  /**
   * Request received but not acted upon, noncommittal.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202}
   */
  Accepted = 202,

  /**
   * Metadata from local or third-party copy, not origin server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203}
   */
  NonAuthoritativeInformation = 203,

  /**
   * No content to send, headers may be useful.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
   */
  NoContent = 204,

  /**
   * Tells user agent to reset the document.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205}
   */
  ResetContent = 205,

  /**
   * Response to a range request for part of a resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206}
   */
  PartialContent = 206,

  /**
   * Conveys information about multiple resources (WebDAV).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207}
   */
  MultiStatus = 207,

  /**
   * Avoids enumerating bindings in WebDAV collections.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208}
   */
  AlreadyReported = 208,

  /**
   * Result of instance-manipulations applied to resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226}
   */
  IMUsed = 226,

  /**
   * Multiple possible responses, client should choose one.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300}
   */
  MultipleChoices = 300,

  /**
   * Resource URL changed permanently, new URL given.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301}
   */
  MovedPermanently = 301,

  /**
   * Resource URI changed temporarily.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302}
   */
  Found = 302,

  /**
   * Directs client to get resource at another URI with GET.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303}
   */
  SeeOther = 303,

  /**
   * Response not modified, client can use cached version.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
   */
  NotModified = 304,

  /**
   * Response must be accessed by a proxy (deprecated).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305}
   */
  UseProxy = 305,

  /**
   * Redirect to another URI with same method as prior request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307}
   */
  TemporaryRedirect = 307,

  /**
   * Resource permanently at another URI, same method required.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308}
   */
  PermanentRedirect = 308,

  /**
   * Server cannot process due to client error.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
   */
  BadRequest = 400,

  /**
   * Client must authenticate to get response.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
   */
  Unauthorized = 401,

  /**
   * Reserved for digital payment systems, rarely used.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402}
   */
  PaymentRequired = 402,

  /**
   * Client lacks access rights, server refuses resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
   */
  Forbidden = 403,

  /**
   * Server cannot find requested resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
   */
  NotFound = 404,

  /**
   * Request method not supported by target resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   */
  MethodNotAllowed = 405,

  /**
   * No content matches user agent criteria.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406}
   */
  NotAcceptable = 406,

  /**
   * Authentication required by a proxy.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407}
   */
  ProxyAuthenticationRequired = 407,

  /**
   * Server timed out on idle connection.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408}
   */
  RequestTimeout = 408,

  /**
   * Request conflicts with current server state.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
   */
  Conflict = 409,

  /**
   * Requested content permanently deleted.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410}
   */
  Gone = 410,

  /**
   * Content-Length header required but not provided.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411}
   */
  LengthRequired = 411,

  /**
   * Client preconditions in headers not met.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412}
   */
  PreconditionFailed = 412,

  /**
   * Request body exceeds server limits.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413}
   */
  ContentTooLarge = 413,

  /**
   * Requested URI too long for server to interpret.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414}
   */
  URITooLong = 414,

  /**
   * Media format of request data not supported.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415}
   */
  UnsupportedMediaType = 415,

  /**
   * Requested range cannot be fulfilled.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416}
   */
  RangeNotSatisfiable = 416,

  /**
   * Expectation in Expect header cannot be met.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417}
   */
  ExpectationFailed = 417,

  /**
   * Server refuses to brew coffee with a teapot.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418}
   */
  ImATeapot = 418,

  /**
   * Request directed to server unable to respond.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421}
   */
  MisdirectedRequest = 421,

  /**
   * Request well-formed but has semantic errors (WebDAV).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422}
   */
  UnprocessableContent = 422,

  /**
   * Resource being accessed is locked (WebDAV).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423}
   */
  Locked = 423,

  /**
   * Request failed due to failure of a previous request (WebDAV).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424}
   */
  FailedDependency = 424,

  /**
   * Server unwilling to process potentially replayed request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425}
   */
  TooEarly = 425,

  /**
   * Server requires client to upgrade protocol.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426}
   */
  UpgradeRequired = 426,

  /**
   * Server requires conditional request to prevent conflicts.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428}
   */
  PreconditionRequired = 428,

  /**
   * Too many requests sent in a given time (rate limiting).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429}
   */
  TooManyRequests = 429,

  /**
   * Request headers too large for server to process.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431}
   */
  RequestHeaderFieldsTooLarge = 431,

  /**
   * Server encountered an unknown error.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
   */
  InternalServerError = 500,

  /**
   * Request method not supported by server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501}
   */
  NotImplemented = 501,

  /**
   * Server as gateway received invalid response.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502}
   */
  BadGateway = 502,

  /**
   * Server unavailable due to maintenance or overloading.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503}
   */
  ServiceUnavailable = 503,

  /**
   * Server as gateway timed out.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504}
   */
  GatewayTimeout = 504,

  /**
   * HTTP version in request not supported.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505}
   */
  HTTPVersionNotSupported = 505,

  /**
   * Content negotiation caused circular reference.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506}
   */
  VariantAlsoNegotiates = 506,

  /**
   * Server unable to store representation (WebDAV).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507}
   */
  InsufficientStorage = 507,

  /**
   * Infinite loop detected in request processing (WebDAV).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508}
   */
  LoopDetected = 508,

  /**
   * HTTP extension not supported for request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510}
   */
  NotExtended = 510,

  /**
   * Client needs to authenticate for network access.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511}
   */
  NetworkAuthenticationRequired = 511,
}

/**
 * Maps HTTP status codes to their status messages.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
const HttpStatusMessages: { [key in HttpStatus]: string } = {
  [HttpStatus.Continue]: "Continue",
  [HttpStatus.SwitchingProtocols]: "Switching Protocols",
  [HttpStatus.Processing]: "Processing",
  [HttpStatus.EarlyHints]: "Early Hints",
  [HttpStatus.OK]: "OK",
  [HttpStatus.Created]: "Created",
  [HttpStatus.Accepted]: "Accepted",
  [HttpStatus.NonAuthoritativeInformation]: "Non-Authoritative Information",
  [HttpStatus.NoContent]: "No Content",
  [HttpStatus.ResetContent]: "Reset Content",
  [HttpStatus.PartialContent]: "Partial Content",
  [HttpStatus.MultiStatus]: "Multi-Status",
  [HttpStatus.AlreadyReported]: "Already Reported",
  [HttpStatus.IMUsed]: "IM Used",
  [HttpStatus.MultipleChoices]: "Multiple Choices",
  [HttpStatus.MovedPermanently]: "Moved Permanently",
  [HttpStatus.Found]: "Found",
  [HttpStatus.SeeOther]: "See Other",
  [HttpStatus.NotModified]: "Not Modified",
  [HttpStatus.UseProxy]: "Use Proxy",
  [HttpStatus.TemporaryRedirect]: "Temporary Redirect",
  [HttpStatus.PermanentRedirect]: "Permanent Redirect",
  [HttpStatus.BadRequest]: "Bad Request",
  [HttpStatus.Unauthorized]: "Unauthorized",
  [HttpStatus.PaymentRequired]: "Payment Required",
  [HttpStatus.Forbidden]: "Forbidden",
  [HttpStatus.NotFound]: "Not Found",
  [HttpStatus.MethodNotAllowed]: "Method Not Allowed",
  [HttpStatus.NotAcceptable]: "Not Acceptable",
  [HttpStatus.ProxyAuthenticationRequired]: "Proxy Authentication Required",
  [HttpStatus.RequestTimeout]: "Request Timeout",
  [HttpStatus.Conflict]: "Conflict",
  [HttpStatus.Gone]: "Gone",
  [HttpStatus.LengthRequired]: "Length Required",
  [HttpStatus.PreconditionFailed]: "Precondition Failed",
  [HttpStatus.ContentTooLarge]: "Content Too Large",
  [HttpStatus.URITooLong]: "URI Too Long",
  [HttpStatus.UnsupportedMediaType]: "Unsupported Media Type",
  [HttpStatus.RangeNotSatisfiable]: "Range Not Satisfiable",
  [HttpStatus.ExpectationFailed]: "Expectation Failed",
  [HttpStatus.ImATeapot]: "I'm a teapot",
  [HttpStatus.MisdirectedRequest]: "Misdirected Request",
  [HttpStatus.UnprocessableContent]: "Unprocessable Content",
  [HttpStatus.Locked]: "Locked",
  [HttpStatus.FailedDependency]: "Failed Dependency",
  [HttpStatus.TooEarly]: "Too Early",
  [HttpStatus.UpgradeRequired]: "Upgrade Required",
  [HttpStatus.PreconditionRequired]: "Precondition Required",
  [HttpStatus.TooManyRequests]: "Too Many Requests",
  [HttpStatus.RequestHeaderFieldsTooLarge]: "Request Header Fields Too Large",
  [HttpStatus.InternalServerError]: "Internal Server Error",
  [HttpStatus.NotImplemented]: "Not Implemented",
  [HttpStatus.BadGateway]: "Bad Gateway",
  [HttpStatus.ServiceUnavailable]: "Service Unavailable",
  [HttpStatus.GatewayTimeout]: "Gateway Timeout",
  [HttpStatus.HTTPVersionNotSupported]: "HTTP Version Not Supported",
  [HttpStatus.VariantAlsoNegotiates]: "Variant Also Negotiates",
  [HttpStatus.InsufficientStorage]: "Insufficient Storage",
  [HttpStatus.LoopDetected]: "Loop Detected",
  [HttpStatus.NotExtended]: "Not Extended",
  [HttpStatus.NetworkAuthenticationRequired]: "Network Authentication Required",
};

/**
 * Maps HTTP status codes to their detailed descriptions.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
const HttpStatusDescriptions: { [key in HttpStatus]: string } = {
  [HttpStatus.Continue]:
    "Client should continue the request or ignore if already finished.",
  [HttpStatus.SwitchingProtocols]:
    "Server is switching protocols as requested by client.",
  [HttpStatus.Processing]:
    "Request received, no status available (WebDAV, deprecated).",
  [HttpStatus.EarlyHints]: "Allows preloading resources with Link header.",
  [HttpStatus.OK]: "Request succeeded, result depends on HTTP method.",
  [HttpStatus.Created]: "Request succeeded, new resource created.",
  [HttpStatus.Accepted]: "Request received but not acted upon, noncommittal.",
  [HttpStatus.NonAuthoritativeInformation]:
    "Metadata from local or third-party copy, not origin server.",
  [HttpStatus.NoContent]: "No content to send, headers may be useful.",
  [HttpStatus.ResetContent]: "Tells user agent to reset the document.",
  [HttpStatus.PartialContent]:
    "Response to a range request for part of a resource.",
  [HttpStatus.MultiStatus]:
    "Conveys information about multiple resources (WebDAV).",
  [HttpStatus.AlreadyReported]:
    "Avoids enumerating bindings in WebDAV collections.",
  [HttpStatus.IMUsed]: "Result of instance-manipulations applied to resource.",
  [HttpStatus.MultipleChoices]:
    "Multiple possible responses, client should choose one.",
  [HttpStatus.MovedPermanently]:
    "Resource URL changed permanently, new URL given.",
  [HttpStatus.Found]: "Resource URI changed temporarily.",
  [HttpStatus.SeeOther]:
    "Directs client to get resource at another URI with GET.",
  [HttpStatus.NotModified]:
    "Response not modified, client can use cached version.",
  [HttpStatus.UseProxy]: "Response must be accessed by a proxy (deprecated).",
  [HttpStatus.TemporaryRedirect]:
    "Redirect to another URI with same method as prior request.",
  [HttpStatus.PermanentRedirect]:
    "Resource permanently at another URI, same method required.",
  [HttpStatus.BadRequest]: "Server cannot process due to client error.",
  [HttpStatus.Unauthorized]: "Client must authenticate to get response.",
  [HttpStatus.PaymentRequired]:
    "Reserved for digital payment systems, rarely used.",
  [HttpStatus.Forbidden]:
    "Client lacks access rights, server refuses resource.",
  [HttpStatus.NotFound]: "Server cannot find requested resource.",
  [HttpStatus.MethodNotAllowed]:
    "Request method not supported by target resource.",
  [HttpStatus.NotAcceptable]: "No content matches user agent criteria.",
  [HttpStatus.ProxyAuthenticationRequired]:
    "Authentication required by a proxy.",
  [HttpStatus.RequestTimeout]: "Server timed out on idle connection.",
  [HttpStatus.Conflict]: "Request conflicts with current server state.",
  [HttpStatus.Gone]: "Requested content permanently deleted.",
  [HttpStatus.LengthRequired]:
    "Content-Length header required but not provided.",
  [HttpStatus.PreconditionFailed]: "Client preconditions in headers not met.",
  [HttpStatus.ContentTooLarge]: "Request body exceeds server limits.",
  [HttpStatus.URITooLong]: "Requested URI too long for server to interpret.",
  [HttpStatus.UnsupportedMediaType]:
    "Media format of request data not supported.",
  [HttpStatus.RangeNotSatisfiable]: "Requested range cannot be fulfilled.",
  [HttpStatus.ExpectationFailed]: "Expectation in Expect header cannot be met.",
  [HttpStatus.ImATeapot]: "Server refuses to brew coffee with a teapot.",
  [HttpStatus.MisdirectedRequest]:
    "Request directed to server unable to respond.",
  [HttpStatus.UnprocessableContent]:
    "Request well-formed but has semantic errors (WebDAV).",
  [HttpStatus.Locked]: "Resource being accessed is locked (WebDAV).",
  [HttpStatus.FailedDependency]:
    "Request failed due to failure of a previous request (WebDAV).",
  [HttpStatus.TooEarly]:
    "Server unwilling to process potentially replayed request.",
  [HttpStatus.UpgradeRequired]: "Server requires client to upgrade protocol.",
  [HttpStatus.PreconditionRequired]:
    "Server requires conditional request to prevent conflicts.",
  [HttpStatus.TooManyRequests]:
    "Too many requests sent in a given time (rate limiting).",
  [HttpStatus.RequestHeaderFieldsTooLarge]:
    "Request headers too large for server to process.",
  [HttpStatus.InternalServerError]: "Server encountered an unknown error.",
  [HttpStatus.NotImplemented]: "Request method not supported by server.",
  [HttpStatus.BadGateway]: "Server as gateway received invalid response.",
  [HttpStatus.ServiceUnavailable]:
    "Server unavailable due to maintenance or overloading.",
  [HttpStatus.GatewayTimeout]: "Server as gateway timed out.",
  [HttpStatus.HTTPVersionNotSupported]:
    "HTTP version in request not supported.",
  [HttpStatus.VariantAlsoNegotiates]:
    "Content negotiation caused circular reference.",
  [HttpStatus.InsufficientStorage]:
    "Server unable to store representation (WebDAV).",
  [HttpStatus.LoopDetected]:
    "Infinite loop detected in request processing (WebDAV).",
  [HttpStatus.NotExtended]: "HTTP extension not supported for request.",
  [HttpStatus.NetworkAuthenticationRequired]:
    "Client needs to authenticate for network access.",
};

/**
 * Returns the status text for a given HTTP status code.
 * @param statusCode - The HTTP status code from HttpStatus enum.
 * @returns The corresponding status text or 'Unknown Status' if not found.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
export function getStatusText(statusCode: HttpStatus): string {
  return HttpStatusMessages[statusCode] || "Unknown Status";
}

/**
 * Returns the description for a given HTTP status code.
 * @param statusCode - The HTTP status code from HttpStatus enum.
 * @returns The corresponding status description or 'Unknown Status' if not found.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
export function getStatusDescription(statusCode: HttpStatus): string {
  return HttpStatusDescriptions[statusCode] || "Unknown Status";
}

/**
 * Represents the classification of HTTP status codes as defined by RFC 9110.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
export type HttpStatusClass =
  | "Informational" // 100–199: Interim responses
  | "Success" // 200–299: Successful responses
  | "Redirection" // 300–399: Redirection messages
  | "ClientError" // 400–499: Client error responses
  | "ServerError" // 500–599: Server error responses
  | "Unknown"; // Non-standard or unrecognized status codes

/**
 * Determines the HTTP status code class.
 * @param statusCode - The HTTP status code.
 * @returns The status code class.
 */
export function getStatusClass(statusCode: HttpStatus): HttpStatusClass {
  if (statusCode >= 100 && statusCode <= 199) return "Informational";
  if (statusCode >= 200 && statusCode <= 299) return "Success";
  if (statusCode >= 300 && statusCode <= 399) return "Redirection";
  if (statusCode >= 400 && statusCode <= 499) return "ClientError";
  if (statusCode >= 500 && statusCode <= 599) return "ServerError";
  return "Unknown";
}

/**
 * Checks if a status code is valid.
 * @param statusCode - The HTTP status code.
 * @returns True if the status code is valid.
 */
export function isValidStatus(statusCode: number): statusCode is HttpStatus {
  return statusCode in HttpStatusMessages;
}

/**
 * Creates a Response with the given HTTP status code and ResponseInit options.
 * @param statusCode - The HTTP status code from HttpStatus enum.
 * @param init - ResponseInit options, excluding status and statusText.
 * @returns A Response object with the specified status and text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
export function createResponse(
  statusCode: HttpStatus,
  init?: Omit<ResponseInit, "status" | "statusText">,
): Response {
  const statusText = getStatusText(statusCode);
  return new Response(null, {
    ...init,
    status: statusCode,
    statusText,
  });
}

/**
 * Throws a Response with the given HTTP status code and ResponseInit options.
 * @param statusCode - The HTTP status code from HttpStatus enum.
 * @param init - ResponseInit options, excluding status and statusText.
 * @throws Response with the specified status and text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status}
 */
export function throwResponse(
  statusCode: HttpStatus,
  init?: Omit<ResponseInit, "status" | "statusText">,
): never {
  throw createResponse(statusCode, init);
}
