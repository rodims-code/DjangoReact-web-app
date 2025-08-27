import From from "../components/From"



function Login(){
    return(
        <From method="login" route="/api/token/"/>
    )
}

export default Login