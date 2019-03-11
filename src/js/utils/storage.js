const setItem = (key, value) => {
  try {
    const json = JSON.stringify(value);
    return localStorage.setItem(key, json);
  } catch (error) {
    console.log(error);
  }
};
export default setItem;
