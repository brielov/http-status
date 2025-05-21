# @brielov/http-status

A TypeScript library for HTTP status codes, messages, and descriptions, with utilities for creating and throwing HTTP Responses.

## Installation

Install via JSR using Deno, Bun, or npm:

```bash
deno add jsr:@brielov/http-status
npx jsr add @brielov/http-status
yarn dlx jsr add @brielov/http-status
pnpm dlx jsr add @brielov/http-status
bunx jsr add @brielov/http-status
```

## Usage

```typescript
import { HttpStatus, getStatusText, getStatusDescription, getStatusClass, isValidStatus, createResponse, throwResponse } from '@brielov/http-status';

// Get status text
console.log(getStatusText(HttpStatus.OK)); // "OK"

// Get status description
console.log(getStatusDescription(HttpStatus.NotFound)); // "Server cannot find requested resource."

// Check status class
console.log(getStatusClass(HttpStatus.ImATeapot)); // "ClientError"

// Validate status code
console.log(isValidStatus(HttpStatus.OK)); // true
console.log(isValidStatus(999)); // false

// Create a Response
const response = createResponse(HttpStatus.NotFound, { headers: { "X-Custom": "test" } });
console.log(response.status); // 404
console.log(response.statusText); // "Not Found"

// Throw a Response
try {
  throwResponse(HttpStatus.ImATeapot);
} catch (res) {
  console.log(res.status); // 418
  console.log(res.statusText); // "I'm a teapot"
}
```

## Features

- `HttpStatus`: Enum of HTTP status codes (100–599) per RFC 9110.
- `getStatusText`: Retrieves status text for a given code.
- `getStatusDescription`: Retrieves detailed description for a code.
- `getStatusClass`: Classifies codes (Informational, Success, Redirection, ClientError, ServerError).
- `isValidStatus`: Checks if a status code is valid.
- `createResponse`: Creates a `Response` with status and custom init options.
- `throwResponse`: Throws a `Response` with status and custom init options.

## API Reference

See [JSR documentation](https://jsr.io/@brielov/http-status/doc) for detailed API.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Source

Hosted on [JSR](https://jsr.io/@brielov/http-status) and [GitHub](https://github.com/brielov/http-status).
