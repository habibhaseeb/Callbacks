// A function that performs an operation and calls a callback function
function performOperation(value, callback) {
    const result = value * 2;
    callback(result);
  }
  
  // Callback function to handle the result
  function handleResult(result) {
    console.log("Result:", result);
  }
  
  // Calling the performOperation function with the handleResult callback
  performOperation(5, handleResult);
  
  console.log("Performing operation..."); // This will be printed before the result is handled
  