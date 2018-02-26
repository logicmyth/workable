'use strict';

const movieListSuccess = function (data) {
  console.log("movieListSuccess");
  console.log(data);
  $('.results').html(data);
}
