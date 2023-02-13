import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../redux/slices/authSlice'
import RedirectToDash from '../components/redirectToDash'
const Login = () => {
    const [login, setLogin] = useState(false);
    const [linker, setLinker] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authSlice);
    useEffect(()=>{
        setLinker(auth.session)
    }, [login])
  
    return (
         <>
            {linker && <RedirectToDash/>}
            {login ? <h1>Logged In Already</h1> : <h1>Login</h1> }
            <form onSubmit={ e => {
                    e.preventDefault();
                    dispatch(authenticate({
                        "username" : e.target.username.value,
                        "password" : e.target.password.value
                    }))
                    setLogin(true)
                }
            }>
                <div>
                    <input type="text" id="username" />
                </div>
                <div>
                    <input type="password" id="password" />
                </div>
                <button>Go</button>
            </form>
         </>
    )
}

export default Login