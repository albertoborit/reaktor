import { useEffect, useState } from "react"
import getArrayList from "../functions/getArrayList"
const useCharacterList = (searchParam, year, name) => {
    const [list, setList] = useState([])
     useEffect(()=>{
      const init = async ()=>{
        const response = await getArrayList(searchParam, year, name)
        setList(response)
      }
      init()
    }, [searchParam, year, name])
    return list
}
export default useCharacterList