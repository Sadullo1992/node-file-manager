export class InvalidInputError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "InvalidInputError";
  }
}
