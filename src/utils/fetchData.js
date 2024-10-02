export const options = {
  method: "GET",
  headers: {},
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return JSON.parse(JSON.stringify(data));
};
