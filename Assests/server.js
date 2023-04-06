const searchBtnEl = document.querySelector('.search-btn');
const citySearchEl = document.querySelector('#location');
const searchList = document.querySelector('ul');

const apiKey = '0c869b4faac810b2e55866781d64a8a6';


searchBtnEl.addEventListener('click', () => {
    const citySearch = citySearchEl.value;
    getPropertyApi(citySearch);
});


async function getPropertyApi(){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '44a9dd568emshc2dbe79a2be69f1p1adfdejsnec1e21b078cd',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  await fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=20&sort=relevance', options)
    .then(response => response.json())
    .then( response => { 
      console.log(response);
      for( let i = 0; i < response.listings[i].prop_type.length; i++){
        const listItem = document.createElement('Li');
        listItem.textContent = response.listings[i].prop_type;
        searchList.appendChild(listItem);
      };
    })
    .catch(err => console.error(err));

};

