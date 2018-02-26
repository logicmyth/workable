var getMovieList = (channelTargeted) => {
  return new Promise((resolve, reject) => {
  //console.log(channelTargeted);
    return $.ajax({
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c&language=en-US&region=greece',
      method: 'GET',
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};
