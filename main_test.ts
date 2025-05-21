import { assertEquals } from "jsr:@std/assert";
import {
  createResponse,
  getStatusClass,
  getStatusDescription,
  getStatusText,
  HttpStatus,
  isValidStatus,
  throwResponse,
} from "./main.ts";

Deno.test("HttpStatus enum contains correct values", () => {
  assertEquals(HttpStatus.OK, 200);
  assertEquals(HttpStatus.NotFound, 404);
  assertEquals(HttpStatus.ImATeapot, 418);
  assertEquals(HttpStatus.InternalServerError, 500);
});

Deno.test("getStatusText returns correct text for valid status", () => {
  assertEquals(getStatusText(HttpStatus.OK), "OK");
  assertEquals(getStatusText(HttpStatus.ImATeapot), "I'm a teapot");
});

Deno.test("getStatusText returns 'Unknown Status' for invalid status", () => {
  assertEquals(getStatusText(999 as HttpStatus), "Unknown Status");
});

Deno.test("getStatusDescription returns correct description for valid status", () => {
  assertEquals(
    getStatusDescription(HttpStatus.OK),
    "Request succeeded, result depends on HTTP method.",
  );
  assertEquals(
    getStatusDescription(HttpStatus.ImATeapot),
    "Server refuses to brew coffee with a teapot.",
  );
});

Deno.test("getStatusDescription returns 'Unknown Status' for invalid status", () => {
  assertEquals(getStatusDescription(999 as HttpStatus), "Unknown Status");
});

Deno.test("getStatusClass returns correct class for status codes", () => {
  assertEquals(getStatusClass(HttpStatus.Continue), "Informational");
  assertEquals(getStatusClass(HttpStatus.OK), "Success");
  assertEquals(getStatusClass(HttpStatus.MovedPermanently), "Redirection");
  assertEquals(getStatusClass(HttpStatus.NotFound), "ClientError");
  assertEquals(getStatusClass(HttpStatus.InternalServerError), "ServerError");
  assertEquals(getStatusClass(999 as HttpStatus), "Unknown");
});

Deno.test("isValidStatus correctly identifies valid and invalid status codes", () => {
  assertEquals(isValidStatus(HttpStatus.OK), true);
  assertEquals(isValidStatus(HttpStatus.ImATeapot), true);
  assertEquals(isValidStatus(999), false);
});

Deno.test("createResponse returns Response with correct status and text", () => {
  const response = createResponse(HttpStatus.OK, {
    headers: { "Content-Type": "text/plain" },
  });
  assertEquals(response.status, 200);
  assertEquals(response.statusText, "OK");
  assertEquals(response.headers.get("Content-Type"), "text/plain");
});

Deno.test("createResponse includes custom headers", () => {
  const response = createResponse(HttpStatus.NotFound, {
    headers: { "X-Custom": "test" },
  });
  assertEquals(response.status, 404);
  assertEquals(response.statusText, "Not Found");
  assertEquals(response.headers.get("X-Custom"), "test");
});

Deno.test("throwResponse throws Response with correct status and text", () => {
  try {
    throwResponse(HttpStatus.NotFound, { headers: { "X-Custom": "test" } });
  } catch (thrown) {
    assertEquals(
      thrown instanceof Response,
      true,
      "Thrown value is not a Response",
    );
    assertEquals((thrown as Response).status, 404);
    assertEquals((thrown as Response).statusText, "Not Found");
    assertEquals((thrown as Response).headers.get("X-Custom"), "test");
  }
});

Deno.test("throwResponse includes custom headers for ImATeapot", () => {
  try {
    throwResponse(HttpStatus.ImATeapot, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (thrown) {
    assertEquals(
      thrown instanceof Response,
      true,
      "Thrown value is not a Response",
    );
    assertEquals((thrown as Response).status, 418);
    assertEquals((thrown as Response).statusText, "I'm a teapot");
    assertEquals(
      (thrown as Response).headers.get("Content-Type"),
      "text/plain",
    );
  }
});
