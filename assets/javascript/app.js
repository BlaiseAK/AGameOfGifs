var gifId = "";
var arrOfGifs = ["Captain America", "Spiderman", "Captain Marvel", "Iron Man", "Hulk", "Deadpool"];

$(".super").on("click", function() {
  var superName = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  superName + "&api_key=Zz5rHijIBLCzOKNuIDNFF57DAtKMWCyI&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(response){
    console.log(response)

  })

});

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    $("#superHeroButtons").empty();

    // Looping through the array of movies
    for (var i = 0; i < arrOfGifs.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      var a = $("<button>");
      // Adding a class
      a.addClass("supers");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", arrOfGifs[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(arrOfGifs[i]);
      // Adding the button to the HTML
      $("#superHeroButtons").append(a);
    }
  };

  $("#add-super").on("click", function(event) {
    event.preventDefault();

    var hero = $("#super-input").val().trim();

    arrOfGifs.push(hero);

    renderButtons();

  }),

  $(document).on("click", ".supers", alertSuperName);

  renderButtons();