const searchBtnEl = document.querySelector('.search-btn');
const citySearchEl = document.querySelector('#location');

searchBtnEl.addEventListener('click', () => {
    const citySearch = citySearchEl.value;
    console.log(citySearch);
    getPropertyApi(citySearch);
    postPropertyApi();
});


function getPropertyApi(citySearch){
  const location = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  fetch(`https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${citySearch}&limit=30`, location)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

};


function postPropertyApi(){
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    body: '{"limit":20,"offset":0,"postal_code":"90004","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}'
  };
  
  fetch('https://realty-in-us.p.rapidapi.com/properties/v3/list', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
