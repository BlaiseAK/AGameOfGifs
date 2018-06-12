var apiKey = "Zz5rHijIBLCzOKNuIDNFF57DAtKMWCyI";
var gifId = "";
var arrOfGifs = ["Captain America", "Spiderman", "Captain Marvel", "Iron Man", "Hulk", "Deadpool"];

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#superHeroButtons").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
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
  }