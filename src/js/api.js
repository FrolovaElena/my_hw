const URL = "http://localhost:3000/notes";

export const get = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  });
};

export const save = note => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(note)
  };
  return fetch(URL, options).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  });
};

export const del = noteId => {
  const options = {
    method: "DELETE"
  };
  return fetch(`${URL}/${noteId}`, options).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  });
};
