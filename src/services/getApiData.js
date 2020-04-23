const getApiData = () => {
  return fetch('https://rickandmortyapi.com/api/character/?results=20')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          // episode:
          status: character.status,
        };
      });
    });
};

export default getApiData;
