const searchBtnEl = document.querySelector('.search-btn');
const citySearchEl = document.querySelector('#location');

searchBtnEl.addEventListener('click', () => {
    const citySearch = citySearchEl.value;
    console.log(citySearch);
    getPropertyApi(citySearch);
});


function getPropertyApi(citySearch){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=100&sort=relevance', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

};

