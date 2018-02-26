'use strict';

var getMovieList = () => {
  console.log("getMovieList");
  return new Promise((resolve, reject) => {
  //console.log(channelTargeted);
    return $.ajax({
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c&language=en-US&region=GRC',
      method: 'GET',
      success: (response) => {
        console.log(response + "successResponse!");
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};
