// datepicker
$(function() {
    $( ".datepicker" ).datepicker({ dateFormat: "yyyy-mm-dd" });
  }); 

// start of code
$("#searchMe").on("click", function (event) {
    searchTerm = $('#searchterm').val().trim();
    retrieve=$('#retrieve').val().trim();
    startYear= $('#startYear').val().trim();
    endYear= $('#endYear').val().trim();
    
    parameters = [searchTerm,retrieve,startYear,endYear]
    
    console.log(parameters);

});

searchTerm = $('#startYear').text();
console.log(searchTerm);

// var queryURL = "https://omdbapi.com/?t=" + movieName + "&apikey=trilogy";

