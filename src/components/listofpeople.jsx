import { Link } from "react-router-dom"

const ListOfPeople = (props) => {
    const {data, param} = props
    return(
        <div>
             {data.detail ? <h3>{data.detail}</h3> : Object.values(data).length>1
                ? 
            <Link to={{pathname:`/characters/${param}`}}>
                <h2 key={data.url}>{data.name} {data.birth_year}</h2>
            </Link>
                : 
             <h3>{data.message}</h3>}
        </div>
    )
}

export default ListOfPeople