// get a list of meals that match the search results

    $('#button-addon2').click(function(){
        let searchInput = $('#search').val();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
       if(data.meals){
           data.meals.forEach(meal =>{
               $('.meal-results').append('<div class="col-lg-4 col-md-6 col-12 result">\
                <div class="card" style="width: 20rem;" data-id ="' + meal.idMeal + '")>\
                  <img src="' + meal.strMealThumb + '" class="card-img-top" alt="food img">\
                  <div class="card-body">\
                    <h5 class="card-title">' + meal.strMeal + '</h5>\
                    <a href="#" class="btn" id="get-recipe">Open Recipe</a>\
                  </div>\
                </div>\
              </div>')
           })           
       }else{
           $('.not-found').show();
       }
    });
    $('.meal-results').children().remove();
    $('.not-found').hide();
    });

    $('.close-btn').click(function(){
        $('.details').hide();
        $('#button-addon2').show();
    })
  
//Get recipe details 

    $('.meal-results').click(function(e){
        e.preventDefault();
        if($(e.target).hasClass('btn')){
            let item = e.target.parentElement.parentElement;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.dataset.id}`)
            .then(response => response.json())
            .then(data => {
                mealRecipeModal(data.meals)
            })
        }
    });

    // Create a Modal
    function mealRecipeModal(meal){
        meal = meal[0];
        $('.details').show();
        $('.details').append('<button type="button" class="close-btn"><i class="fa-solid fa-xmark"></i></button>\
      <h2>'+ meal.strMeal +'</h2>\
      <p>'+ meal.strCategory +'</p>\
      <div class="instructions">\
        <h4>Instruction:</h4>\
      <p>'+ meal.strInstructions +'</p>\
      <p></p>\
      </div>\
      <div class="recipe-link">\
        <a href="'+ meal.strYoutube +'" target="_blank">Watch Video</a>\
      </div>')
      
    }