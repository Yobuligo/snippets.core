/**
 * An instance of this interface represents any kind of error 
 * having a *createdAt* timestamp, a *message* and an optional *type* which refers to an error class name.
 */
export interface IError {
  createdAt: Date;
  message: string;
  type?: string;
}
