import concidenceSearch from "./coincidence"
import fetchCharacters from './fetchCharacters'
const getArrayList = async (searchParam, year, name) => {
            const response = await fetchCharacters(searchParam)
            if(!response.detail){
                return concidenceSearch(response, [year, name]) ? response :  {message:"No coincidences"}
            }
            return response
}

export default getArrayList