'use strict';

var getMovieList = () => {
  //console.log("getMovieList");
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c&language=en-US&region=GR&append_to_response=credits',//&original_title
      method: 'GET',
      success: (response) => {
        //console.log(response + "successResponse!");
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    }).then(function(data){
      console.log(data);
      var jsonArray = [];
      for (var i=0; i < data.results.length; i++) {
        //console.log('forloop');
        jsonArray.push(data.results[i].title + data.results[i].original_title + data.results[i].overview);
      };
      //JSON.stringify(jsonArray);
      //console.log(jsonArray +"hi");
      $('.results').html(jsonArray);
      return specificMovie;
    }).then(function(specificMovie){
      return $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + specificMovie + '/credits?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c',//&original_title
        method: 'GET',
        success: (response) => {
          console.log(response + "successResponse!");
          resolve(response);
        },
        error: (error) => {
          reject(error);
        },
        return data;
      })
  }).then(function(data){
    var postData = function (data) {
  // return new Promise ((resolve, reject) => {
  return $.ajax({
    url: 'http://localhost:3000' + "/movies",
    method: 'POST',
    data: data,
      // success: (response) => {
      // resolve(response);
      // },
      // error: (error) => {
      //   reject(error);
      // },
      });
    // });
  };
}).then(function(){
  var directors = [];
  var getDirectors = function (data){
      data.credits.crew.forEach(function(entry){
    if (entry.job === 'Director') {
      directors.push(entry.name);
    }
      });
      var directorData = getDirectors();
    };
  });
});
};
