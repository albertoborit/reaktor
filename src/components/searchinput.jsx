import { useEffect, useState } from "react"
import useCharacterList from "../customHooks/useCharacterList"
import ListOfPeople from "./listofpeople"
const Search = ({years, names}) => {

    const [searchParam, setSearchParam] = useState("1")
    const [year, setYear] = useState(" ")
    const [name, setName] = useState(" ")
    // const [list, setList] = useState(" ")
    const list = useCharacterList(searchParam, year, name)
    console.log(list)
    return (
       <div>
            <form>
                <label>Years</label>
                <select onChange={(e)=>{
                    setYear(e.target.value)
                }}>
                     <option></option>
                    {years ?
                    years.map(year=>{
                        return <option key={year}>{year}</option>
                    }) : ""}
                </select>
                <br />

                <label>Names</label>
                 <select onChange={(e)=>{
                     setName(e.target.value)
                    }}>
                        <option></option>
                    {names ?
                    names.map(name=>{
                        return <option key={name}>{name}</option>
                    }) : ""}
                </select>
                <br />
                
                <input type="number" value={searchParam} onChange={e=>{setSearchParam(e.target.value)}}/>
            </form>
            <ListOfPeople data={list} param={searchParam}/>
       </div>
    )
}

export default Search