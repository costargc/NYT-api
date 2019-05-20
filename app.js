$(document).ready(function(){

// datepicker
$(function () {
    $(".datepicker").datepicker({ dateFormat: "yyyy-mm-dd" });
});

// start of code search

$("#searchMe").on("click", function (event) {
// $("#myform").on("submit", function (event) {

    // document.getElementById("myform").submit();

    searchTerm = $('#searchterm').val().trim();
    retrieve = $('#retrieve').val().trim();
    startYear = $('#startYear').val().trim();
    endYear = $('#endYear').val().trim();

    begin_date = "&begin_date=" + formatDate(startYear);
    end_date = "&end_date=" + formatDate(endYear);

    if (startYear == "") { begin_date = "" };
    if (endYear == "") { end_date = "" };


    apikey = "&api-key=" + 'bZL8pCAJYWgrasysArSqDvPTSs5MQpEd';

    parameters = [searchTerm, retrieve, startYear, endYear];

    if (searchTerm !== "") {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + begin_date + end_date + apikey;

        console.log(queryURL);



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (obj) {
            console.clear();
            console.log(obj.response.meta.hits);

            maxloopSearch = Math.min(retrieve, obj.response.meta.hits);

            for (i = 0; i < maxloopSearch; i++) {

                console.log(obj.response.docs[i].headline.main); //title_art
                console.log(obj.response.docs[i].byline.original); // by_art
                console.log(obj.response.docs[i].section_name); //sec_art
                // console.log(obj.response.docs[i].subsection_name);
                console.log(obj.response.docs[i].pub_date); // date_art
                console.log(obj.response.docs[i].web_url); // link_art

                // create a div and append it to id="mainform"!... for every div create many spans with class results and append to div created.
                //     <div class=" mb-1">
                //         <span class='results' id='title_art'>Title: Bill Targeting Wind Energy Line...</span>
                //         <span class='results' id='by_art'>By: The Associated Press</span>
                //         <span class='results' id='sec_art'>Section: U.S.</span>
                //         <span class='results' id='date_art'>Date: 2019-05-09T15:28:10+0000</span>
                //         <span class='results' id='link_art'><a href="www.nytimes.com">www.nytimes.com</a></span>
                //     </div>

            }

        });
    }


});


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
}

});