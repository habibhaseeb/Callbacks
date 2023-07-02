// A function that takes a callback as a parameter

function fetchData(url, callback) {
    
    // Simulating an asynchronous operation
    
    setTimeout(() => {
      const data = { id: 1, name: "Habibullah" };
      callback(data);
    }, 2000);
  }
  
  // Callback function to handle the fetched data
  function processData(data) {
    console.log("Processing data:", data);
  }
  
  // Calling the fetchData function with the processData callback
  fetchData("some_link", processData);
  
  console.log("Fetching data..."); // This will be printed before the data is processed
  