import { useParams } from "react-router-dom"

export const Abc = () => {

    const params = useParams()
    
    console.log(params)
    return(
        <h1>ABC</h1>
    )
}