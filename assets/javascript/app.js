var topics = ["Captain America", "Spiderman", "Captain Marvel", "Iron Man", "Hulk", "Deadpool"];

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    $("#superHeroButtons").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each super in the array.
      var a = $("<button>");
      // Adding a class
      a.addClass("supers");
      // Adding a data-attribute with a value of the super at index i
      a.attr("data-name", topics[i]);
      // Providing the button's text with a value of the super at index i
      a.text(topics[i]);
      // Adding the button to the HTML
      $("#superHeroButtons").append(a);
    }
  };

  $("#add-super").on("click", function(event) {
    event.preventDefault();

    var hero = $("#super-input").val().trim();

    topics.push(hero);

    renderButtons();

  }),

  $(document).on("click", ".supers", renderButtons);

  renderButtons();

$(document).on("click", ".supers" ,function() {

  var superName = $(this).data("name");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  superName + "&api_key=Zz5rHijIBLCzOKNuIDNFF57DAtKMWCyI&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET",
  })
  
    .then(function(response){

      
    console.log(response.data)

    var results = response.data;

    // Looping over every result item
    for (var i = 0; i < results.length; i++) {

      // Only taking action if the photo has an appropriate rating
      if (results[i].rating !== "r") {
        // Creating a div with the class "item"
        var gifDiv = $("<div class='item'>");

        // Storing the result item's rating
        var rating = results[i].rating;

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + rating);

        // Creating an image tag
        var personImage = $("<img>");

        // Giving the image tag an src attribute of a proprty pulled off the
        // result item
        personImage.attr("src", results[i].images.original_still.url);
        // fixed_height is the one used to show the actioned
        // how this will work...we will have 2 more variables/data-still & data-animate- from there we will lock in the path name of each then have the click be if/else statement to differ between still and animate.
        personImage.attr("data-state", "still");
        personImage.attr("data-still", results[i].images.original_still.url);
        personImage.attr("data-animate", results[i].images.fixed_height.url);
        personImage.addClass("gif");


        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        gifDiv.append(p);
        gifDiv.append(personImage);

        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifsAssemble").prepend(gifDiv);
      }
    }



  })

});

$(document).on("click", ".gif", function() {

var state = $(this).attr("data-state");

if (state === "still") {
  $(this).attr("src", $(this).attr("data-animate"));
  $(this).attr("data-state", "animate");
} else {
  $(this).attr("src", $(this).attr("data-still"));
  $(this).attr("data-state", "still");
}

});