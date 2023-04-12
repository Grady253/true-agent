const searchBtnEl = document.querySelector(".search-btn");
const citySearchEl = document.querySelector("#location");
const propDisplayEl = document.querySelector("#property-display");
const searchList = document.querySelector("ul");

const apiKey = "0c869b4faac810b2e55866781d64a8a6";

searchBtnEl.addEventListener("click", () => {
  const citySearch = citySearchEl.value;
  getPropertyApi(citySearch);
});

async function getPropertyApi(citySearch) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };

  await fetch(`https://realty-in-us.p.rapidapi.com/properties/detail?listing_id=${citySearch}&prop_status=for_sale`, options)
    .then(response => response.json())
    .then( response => {
      docFrag = document.createDocumentFragment();
      console.log(response);
      for( let i = 0; i < response.autocomplete[i].length; i++){
        const divEl = document.createElement('div');
        divEl.setAttribute("class", "box is-flex container");

        let template = `
        <article >
          <div class="content">
            <img alt='property photo' src=${response.autocomplete[i].photo}/>
              <h3>${response.autocomplete[i].price}</h3>
              <h4>${response.autocomplete[i].address}</h4>
          </div>
        </article>
        `;
        divEl.innerHTML = template;
        docFrag.append(divEl);
      };

    })
    .catch(err => console.error(err));


}
