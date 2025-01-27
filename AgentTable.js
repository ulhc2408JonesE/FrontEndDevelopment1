const tableBody = document.getElementById("table-body")

const url = "http://99.79.77.144:3000/api/agents"

//FETCH REQUEST INSIDE OF A FUNCTION
const getAgentData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}
// -const getAgentData = async () => {

// -This line defines a constant variable getAgentData and assigns it an asynchronous arrow function.
// -The async keyword indicates that the function will operate asynchronously, allowing the use of await within it.
// -Asynchronous functions are essential for handling operations that take time to complete, such as fetching data from a server, without freezing the execution of the rest of the code.

// --const response = await fetch(url);

// --Here, the function uses the fetch API to send a request to the specified url.
// --The await keyword pauses the function execution until the fetch request completes and returns a response.
// --This means the code waits for the server to send back data before moving to the next line.
// --The fetch API is a modern way to make network requests and returns a promise that resolves to the response object representing the response to the request

// ---const data = await response.json();

// ---This line extracts the JSON content from the response object.
// ---The response.json() method reads the response stream to completion and parses it as JSON.
// ---Since this operation is asynchronous, await ensures that the function waits for the parsing to complete before assigning the result to data.
// ---This step is crucial because network responses might not be immediately available, and parsing ensures the data is in a usable format.

// ----console.log(data);

// ----This line outputs the parsed data to the console.
// ----It's useful for debugging purposes, allowing developers to verify that the correct data has been retrieved and parsed.
// ----By inspecting the console output, one can understand the structure and content of the fetched data.

// -----return data;

// -----The function returns the data object, making it available to whatever called the getAgentData function.
// -----This allows other parts of the code to utilize the fetched and parsed data as needed.
// -----Returning the data is essential for further processing or rendering in the application.




const makeTable = async (agentData) => {

    tableBody.innerHTML = ""

    let tableRows = ""

    //.innerHTML
    //ALLOWS YOU TO INSERT NEW HTML CODE USING JAVASCRIPT

    agentData.forEach((agent) => {

        const formattedFee = formatCurrencyUSD(agent.fee)

        const newTableRow = `
            <tr>
                <td>${agent.first_name}</td>
                <td>${agent.last_name}</td>
                <td>${agent.rating}</td>
                <td>${formattedFee}</td>
                <td>${agent.region}</td>
            </tr>
        `

        tableRows+=newTableRow
        
    })

    tableBody.innerHTML += tableRows

}

// - allAgentData.forEach: This goes through every item (agent) in the allAgentData list.
// - (agent) =>: For each agent, the code inside the curly braces { } is run.

//-- const newTableRow: Creates a new table row and stores it as text in a variable called newTableRow.
//-- Backticks : These are used for multi-line strings, making it easy to write the HTML for a table row.
//-- <tr> and </tr>: These define a new row in the table.
//-- <td> and </td>: These define cells in the row where data will go.
//-- ${agent.first_name}: Inserts the first_name of the current agent into the first cell. The ${} syntax pulls data from the agent object.

//--- tableRows +=: Adds the new row (stored in newTableRow) to the tableRows variable. Each agent's data gets added one after the other.

//---- tableBody.innerHTML: Refers to the inside content of the tableBody element in your HTML.
//---- += tableRows: Adds all the table rows (created earlier) to the table body so they appear on the webpage.

const makeStartingTable = async () =>{
    const allAgentData = await getAgentData()
    makeTable(allAgentData)
}

makeStartingTable()

 
const upArrow = document.getElementById("first-up-arrow")
const downArrow = document.getElementById("first-down-arrow")

upArrow.addEventListener("click", async () => {

    //call the function to get the agents data
    const allAgentData = await getAgentData();

    //sort that data alphabetically in ascending order by first name

    //Sort all the agent objects specifically using the first_name key
    //in ascending alphabetical order
    const sortedAgents = allAgentData.sort((a, b) => {
            if (a.first_name < b.first_name) return -1; // a comes before b
            if (a.first_name > b.first_name) return 1;  // a comes after b
            return 0; // a and b are equal
    })
    //send the sorted data to the makeTableFunction
    // Sorting by the "name" key in alphabetical order
    makeTable(sortedAgents)
  
})


downArrow.addEventListener("click", async () => {
    //call the function to get the agents data
    const allAgentData = await getAgentData();

    //sort that data alphabetically in ascending order by first name

    //Sort all the agent objects specifically using the first_name key
    //in ascending alphabetical order
    const sortedAgents = allAgentData.sort((a, b) => {
            if (a.first_name > b.first_name) return -1; // a comes before b
            if (a.first_name < b.first_name) return 1;  // a comes after b
            return 0; // a and b are equal
    });

    //send the sorted data to the makeTableFunction
    // Sorting by the "name" key in alphabetical order
    makeTable(sortedAgents)
})


function formatCurrencyUSD(value) {
    if (isNaN(value)) {
      throw new Error("Invalid number provided.");
    }
  
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }

  const LnameDown = document.getElementById("last-up-arrow")
  const LnameUp = document.getElementById("last-down-arrow")

  LnameUp.addEventListener("click", async () => {





    //call the function to get the agents data
    const allAgentData = await getAgentData();

    //sort that data alphabetically in ascending order by first name

    //Sort all the agent objects specifically using the first_name key
    //in ascending alphabetical order
    const sortedAgents = allAgentData.sort((a, b) => {
            if (a.last_name > b.last_name) return -1; // a comes before b
            if (a.last_name < b.last_name) return 1;  // a comes after b
            return 0; // a and b are equal
    })
    //send the sorted data to the makeTableFunction
    // Sorting by the "name" key in alphabetical order
    makeTable(sortedAgents)
  
});

LnameDown.addEventListener("click", async () => {

        //call the function to get the agents data
        const allAgentData = await getAgentData();

        //sort that data alphabetically in ascending order by first name
    
        //Sort all the agent objects specifically using the first_name key
        //in ascending alphabetical order
        const sortedAgents = allAgentData.sort((a, b) => {
                if (a.last_name < b.last_name) return -1; // a comes before b
                if (a.last_name > b.last_name) return 1;  // a comes after b
                return 0; // a and b are equal
        })
        //send the sorted data to the makeTableFunction
        // Sorting by the "name" key in alphabetical order
        makeTable(sortedAgents)
      
    });


// dropdown next to region so customer can choose region (north sound east or west region so it gets filtered)

// be sure to filter regions

// ... (rest of the LnameUp and LnameDown event listeners)

const regionDropdown = document.getElementById('regions');

regionDropdown.addEventListener('change', async () => {

    //call the function to get the agents data
    const allAgentData = await getAgentData();

    const selectedRegion = regionDropdown.value;

    //Add an if statement
    if(selectedRegion === "all"){
        makeTable(allAgentData)
        return;
    }


    // Filter the agents by region
    const filteredAgents = allAgentData.filter(agent => agent.region === selectedRegion); 

    // // Optionally: Sort the filtered agents (e.g., by last name ascending)
    // const sortedFilteredAgents = filteredAgents.sort((a, b) => {
    //     if (a.last_name < b.last_name) return -1;
    //     if (a.last_name > b.last_name) return 1;
    //     return 0;
    // });

    // Call the makeTable function with the filtered (and potentially sorted) agents
    makeTable(filteredAgents); 
});