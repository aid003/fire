const getMainPageInfo = async (url, options = {}) => {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }

  const data = await response.json();
  return data;
};

export default getMainPageInfo;
