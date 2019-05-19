// datepicker
$(function () {
    $(".datepicker").datepicker({ dateFormat: "yyyy-mm-dd" });
});

// start of code search

$("#searchMe").on("click", function (event) {
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


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + begin_date + end_date + apikey;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (obj) {
        console.clear();
        console.log(obj.response.meta.hits);

        maxloopSearch=Math.min(retrieve,obj.response.meta.hits);

        for (i = 0; i < maxloopSearch; i++) {
            console.log(obj.response.docs[i].headline.main);
            console.log(obj.response.docs[i].byline.original);   
            console.log(obj.response.docs[i].section_name);
            // console.log(obj.response.docs[i].subsection_name);
            console.log(obj.response.docs[i].pub_date);
            console.log(obj.response.docs[i].web_url);
        }

    });


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

// var queryURL = "https://omdbapi.com/?t=" + movieName + "&apikey=trilogy";

