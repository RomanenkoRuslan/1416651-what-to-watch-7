export const adaptDataToClient = (data) => {
  const adaptedData = Object.assign(
    {},
    data,
    {
      isFavorite: data.is_favorite,
      backgroundColor: data.background_color,
      backgroundImage: data.background_image,
      posterImage: data.poster_image,
      previewImage: data.preview_image,
      previewVideoLink: data.preview_video_link,
      runTime: data.run_time,
      scoresCount: data.scores_count,
      videoLink: data.video_link,
    },
  );

  delete adaptedData.background_color;
  delete adaptedData.background_image;
  delete adaptedData.is_favorite;
  delete adaptedData.poster_image;
  delete adaptedData.preview_video_link;
  delete adaptedData.run_time;
  delete adaptedData.scores_count;
  delete adaptedData.video_link;


  return adaptedData;
};
