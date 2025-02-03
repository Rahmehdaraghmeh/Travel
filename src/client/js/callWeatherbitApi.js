let weatherbitApi = async (geoData) => {
  const lat = geoData.lat;
  const lng = geoData.lng;
  const weatherbitApiKey = "47d10f268de94089a4b4c3b15b0a7d5e";
  const weatherbitApiReqURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApiKey}`;
  const res = await fetch(weatherbitApiReqURL);
  let result = {};
  try {
    result = await res.json();
  } catch (error) {
    console.log("error:", error);
  }
  return result;
};

export { weatherbitApi };
