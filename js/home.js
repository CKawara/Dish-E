const searchMeal = document.getElementById('button-addon2');
searchMeal.addEventListener('click', getMeal);


function getMeal(){
    let searchInput = document.getElementById('search').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}