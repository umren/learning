import pf from "petfinder-client";

const petfinder = pf({
  key: "3d10b9fb7d0a2a1525fbe788cd94d74a",
  secret: "ee59fbe44ea543f65877b4f7ca72c62a"
});

export default function getBreeds() {
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();

    if (animal) {
      petfinder.breed
        .list({ animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            dispatch({ type: "SET_BREEDS", payload: data.petfinder });
          } else {
            this.setState({ breeds: [] });
            dispatch({ type: "SET_BREEDS", payload: [] });
          }
        })
        .catch(console.error);
    } else {
      dispatch({ type: "SET_BREEDS", payload: [] });
    }
  };
}
