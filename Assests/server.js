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
    let divEl = document.createElement("div");
    console.log(data.agents[i]);
    console.log(data.agents[i].full_name,data.agents[i].email );
    let template = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${data.agents[i].full_name}</h5>
        <p class="card-text">Agent Rating:${data.agents[i].agent_rating}</p>
        <a href="mailto:${data.agents[i].email}" class="btn btn-primary">Contact Me</a>
      </div>
    </div>
     `;
     divEl.innerHTML = template;
    propDisplayEl.append(divEl);
  };
}
