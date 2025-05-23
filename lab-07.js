class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  
  try {
    throwGenericError();
  } catch (err) {
    console.log(`Caught error: ${err.name} - ${err.message}`);
  } finally {
    console.log("Finished handling generic error");
  }
  
  try {
    throwCustomError();
  } catch (err) {
    console.log(`Caught error: ${err.name} - ${err.message}`);
  } finally {
    console.log("Finished handling custom error");
  }
  