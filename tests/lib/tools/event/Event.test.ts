import { expect } from "chai";
import { Event } from "../../../../src/lib/tools/event/Event";

describe("Event", () => {
  it("Registers handler without notifying it", () => {
    let called = false;
    new Event().onEvent(() => (called = true));
    expect(called).false;
  });

  it("Notifies handler", () => {
    let called = false;
    const event = new Event();
    event.onEvent(() => (called = true));
    event.notify();
    expect(called).true;
  });

  it("Notifies all registered handlers", () => {
    let firstCalled = false;
    let secondCalled = false;
    const event = new Event();
    event.onEvent(() => (firstCalled = true));
    event.onEvent(() => (secondCalled = true));
    event.notify();
    expect(firstCalled).true;
    expect(secondCalled).true;
  });

  it("Notifies handlers with parameters", () => {
    let value = 0;
    const expected = 123;
    const event = new Event<(newValue: number) => void>();
    event.onEvent((newValue) => (value = newValue));
    event.notify(expected);
    expect(value).equal(expected);
  });

  it("Notifies multiple times registered handler", () => {
    let called = 0;
    const event = new Event();
    const handler = () => called++;
    event.onEvent(handler);
    event.onEvent(handler);
    event.notify();
    expect(called).equal(2);
  });

  it("Stops notification when unregister from event", () => {
    let firstCalled = false;
    let secondCalled = false;
    const event = new Event();
    const unregisterHandler = event.onEvent(() => (firstCalled = true));
    event.onEvent(() => (secondCalled = true));
    unregisterHandler();
    event.notify();
    expect(firstCalled).false;
    expect(secondCalled).true;
  });
});
