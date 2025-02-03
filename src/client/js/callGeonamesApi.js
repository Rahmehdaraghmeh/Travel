const geonamesApi = async (geoURL, cityName, apiKey) => {
  try {
    const res = await fetch(geoURL + cityName + apiKey);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("error", error);
    return null; 
  }
};

export { geonamesApi };
