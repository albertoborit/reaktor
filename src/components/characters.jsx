import { useParams } from "react-router-dom"


const Characters = () => {
    const {id} = useParams()
    return (
            <h1>{id}</h1>
        )
}

export default Characters