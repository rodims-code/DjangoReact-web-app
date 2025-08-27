import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN , REFRESH_TOKEN} from "../constants";
import "../styles/From.css";


function From() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loanding, setLoading] = useState(false)

    const name = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e) =>{
        setLoading(true)
        e.preventDefault()

        try{
            const res = await api.post(Route, {username, password})
            if(method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            }else{
                alert("Registration successful! Please log in.")
                navigate("/login")
            }
        }catch(error){
            alert("An error occurred. Please try again.")
            setLoading(false)
            return
        }finally{
            setLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>{name}</h1>
            <input 
            className="form-input"
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
            />

                        <h1>{password}</h1>
            <input 
            className="form-input"
                type="text" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
        </form>
    )
}

export default From