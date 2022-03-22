// const searchMeal = document.getElementById('button-addon2');
// searchMeal.addEventListener('click', getMeal);



    $('#button-addon2').click(function(){
        let searchInput = $('#search').val();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    })
    