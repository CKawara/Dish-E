// const searchMeal = document.getElementById('button-addon2');
// searchMeal.addEventListener('click', getMeal);



    $('#button-addon2').click(function(){
        let searchInput = $('#search').val();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
       if(data.meals){
           data.meals.forEach(meal =>{
               $('.meal-results').append('<div class="col-lg-4 col-md-6 col-12 results">\
                <div class="card" style="width: 20rem;" data-id ="' + meal.idMeal + '")>\
                  <img src="' + meal.strMealThumb + '" class="card-img-top" alt="food img">\
                  <div class="card-body">\
                    <h5 class="card-title">' + meal.strMeal + '</h5>\
                    <a href="#" class="btn">Open Recipe</a>\
                  </div>\
                </div>\
              </div>')
           })
       }else{
           $('.meal-results').append("not found")
       }
    })
    })
    