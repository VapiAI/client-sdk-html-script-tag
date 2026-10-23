import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import test from "node:test";
import { defaultListeners } from "./listeners.js";

function setup() {
  const vapi = new EventEmitter();
  let starts = 0;
  let stops = 0;
  let click;
  let state = "idle";
  vapi.start = () => { starts++; };
  vapi.stop = () => { stops++; };
  const button = {
    addEventListener: (_, listener) => { click = listener; },
    classList: { add() {}, remove() {} },
  };
  defaultListeners(vapi, button, "assistant", undefined, undefined, (_, next) => {
    state = next;
  });
  return { vapi, click: () => click(), state: () => state, starts: () => starts, stops: () => stops };
}

test("starts, becomes active, and resets when the call ends", () => {
  const widget = setup();
  widget.click();
  assert.equal(widget.state(), "loading");
  assert.equal(widget.starts(), 1);
  widget.vapi.emit("call-start");
  assert.equal(widget.state(), "active");
  widget.vapi.emit("call-end");
  assert.equal(widget.state(), "idle");
  widget.click();
  assert.equal(widget.starts(), 2);
});

for (const name of ["NotAllowedError", "NotFoundError", "NotReadableError"]) {
  test(`resets after microphone-preflight-${name} and allows retry`, () => {
    const widget = setup();
    widget.click();
    widget.vapi.emit("call-start-failed", { stage: "microphone-preflight" });
    widget.vapi.emit("error", { type: `microphone-preflight-${name}` });
    assert.equal(widget.state(), "idle");
    widget.click();
    assert.equal(widget.starts(), 2);
    assert.equal(widget.stops(), 0);
  });
}

test("handles an error without a preceding call-start-failed event", () => {
  const widget = setup();
  widget.click();
  widget.vapi.emit("error", {});
  assert.equal(widget.state(), "idle");
  widget.click();
  assert.equal(widget.starts(), 2);
});

test("can stop while microphone permission is pending", () => {
  const widget = setup();
  widget.click();
  widget.click();
  assert.equal(widget.stops(), 1);
  widget.vapi.emit("error", { type: "microphone-preflight-AbortError" });
  assert.equal(widget.state(), "idle");
});
