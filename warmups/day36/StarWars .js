$( document ).ready(function() {
    console.log( "ready!" );
      $.ajax({
        url: 'http://swapi.co/api/films/1/',
        type: 'GET',
        success: function (data) {
            console.log("data has been loaded");
               $("#output").html(data.opening_crawl);
            }

       });

});