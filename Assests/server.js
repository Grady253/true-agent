const searchBtnEl = document.querySelector(".search-btn");
const zipSearchEl = document.querySelector("#zipCode");
const stateSearchEl = document.querySelector("#state");
const propDisplayEl = document.querySelector(".property-display");
const searchList = document.querySelector("ul");

const apiKey = "44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd";

searchBtnEl.addEventListener("click", () => {
  const zipCode = zipSearchEl.value;
  getPropertyApi(zipCode);
});

async function getPropertyApi(zipCode) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
  };

  await fetch(
    `https://realty-in-us.p.rapidapi.com/agents/list?postal_code=${zipCode}&limit=10&types=agent`,
    options
  )
    .then((response) => response.json())
    .then((response) => displayData(response))
    .catch((err) => console.error(err));
}

function displayData(data) {
  console.log(data.agents);
  for (let i = 0; i < data.agents.length; i++) {
    let template = `
        <ul>
          <li>${data.agents.email}</li>
        </ul>
     `;
    document.body.innerHTML = template;
  }
}
