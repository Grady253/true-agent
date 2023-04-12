const searchBtnEl = document.querySelector(".search-btn");
const zipSearchEl = document.querySelector("#zipCode");
const stateSearchEl = document.querySelector("#state");
const searchList = document.querySelector("ul");

const apiKey = "44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd";

searchBtnEl.addEventListener("click", () => {
  const zipCode = zipSearchEl.value;
  getAgentApi(zipCode);
});

async function getAgentApi(zipCode) {
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
  const propDisplayEl = document.querySelector(".property-display");
  for (let i = 0; i < data.agents.length; i++) {
    console.log(data.agents[i].full_name);
    let template = `
      <div>
        <p>${data.agents[i].full_name}</p>
      </div>
     `;
    propDisplayEl.innerHTML = template;
  };
};
