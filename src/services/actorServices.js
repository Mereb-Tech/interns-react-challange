// function to get actors
export async function getActors(page) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `https://swapi.py4e.com/api/people/?page=${page}`,
    requestOptions
  );

  if (!response.ok) {
    const error = await response.json(); // Access the error message from the response body
    throw new Error(error.message);
  }
  const listing = await response.json();

  return listing;
}

// function to get an actor
export async function getActor(state) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${state}`, requestOptions);
  if (!response.ok) {
    const error = await response.json(); // Access the error message from the response body
    throw new Error(error.message);
  }
  const listing = await response.json();

  return listing;
}

// function to get the films of an actor
export async function getActorFilms(url) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${url}`, requestOptions);
  if (!response.ok) {
    const error = await response.json(); // Access the error message from the response body
    throw new Error(error.message);
  }
  const listing = await response.json();

  return listing;
}
