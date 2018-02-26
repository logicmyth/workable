'use strict';

$(document).ready(function() {
    //Then assigns the event handler
    $(".submit").on('click', function() {
    getMovieList().done(movieListSuccess);
    });
  });
