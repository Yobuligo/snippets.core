import { FunctionParams } from "../../core/types/FunctionParams";
import { VoidHandler } from "../../core/types/VoidHandler";

/**
 * An implementation of this interface represents an event to register on or unregister from handlers
 * and to notify the registered handlers.
 */
export interface IEvent<THandler extends Function> {
  /**
   * Notifies all registered handlers.
   * The given {@link args} contains the properties which have to be provided to the handlers.
   */
  notify(...args: FunctionParams<THandler>): void;

  /**
   * Register the given {@link handler} on the event.
   * The returned {@link VoidHandler} can be called to unregister from the event.
   */
  onEvent(handler: THandler): VoidHandler;
}
