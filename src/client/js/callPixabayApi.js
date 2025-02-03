let pixabayApi = async (cityName) => {
  const pixabayApiKey = "48550117-494bcb3e3d342cdf1510de1fb";
  const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`;
  const res = await fetch(pixabayApiReqURL);
  let result = {};
  try {
    result = await res.json();
  } catch (error) {
    console.log("error:", error);
  }
  return result;
};

export { pixabayApi };
