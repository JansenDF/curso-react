import { useEffect } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"

export const Abc = () => {

    const params = useParams()
    const location = useLocation()
    const history = useHistory()
    
    console.log(params)
    console.log(location)
    console.log(history)

    useEffect(()=>{
        setTimeout(function(){
            history.push("/")
        },[5000])
    },[history])
    return(
        <h1>ABC</h1>
    )
}