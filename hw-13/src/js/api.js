const URL = "http://localhost:3000/notes";

export const get = async () => {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch (error) {
    throw new Error(`Error while fetching: ${response.statusText}`);
  }
};

export const save = async note => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(note)
  };
  try {
    const response = await fetch(URL, options);
    return response.json();
  } catch (error) {
    throw new Error(`Error while fetching: ${response.statusText}`);
  }
};

export const del = async noteId => {
  const options = {
    method: "DELETE"
  };
  try {
    const response = await fetch(`${URL}/${noteId}`, options);
    return response.json();
  } catch (error) {
    throw new Error(`Error while fetching: ${response.statusText}`);
  }
};
