 const fetchCharacters = async (searchParam) => {
        const response = await fetch(`https://swapi.dev/api/people/${searchParam}`)
         const json = await response.json()
        return json
    }
export default fetchCharacters