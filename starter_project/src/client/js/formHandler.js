// Replace checkForName with a function that checks the URL
import { urlCheck } from "./urlChecker.js";

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = "http://localhost:8000/api";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

const results = document.getElementById("results");

async function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const formText = document.getElementById("url").value;

  // Check if the URL is valid
  if (!urlCheck(formText)) {alert("Please enter a valid URL")
    return;
  };

  
  const { polarity, subjectivity } = await sendData(formText);
  results.innerHTML = `
    <p><b>Polarity:</b> ${polarity}</p>
    <p><b>Subjectivity:</b> ${subjectivity}</p>
  `;
}

// Function to send data to the server
export async function sendData(url) {
  try {
    const response = await fetch(serverURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ url }),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
// Export the handleSubmit function
export { handleSubmit };
