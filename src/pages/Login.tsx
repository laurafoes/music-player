import { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
import { FaSpotify } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { addToken, useToken } from '../redux/sliceToken'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Login() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
    const REDIRECT_URI = 'http://localhost:5173'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    const [ newToken, setNewToken ] = useState<string>("")

    const token = useSelector(useToken)
    const dispatch = useDispatch()

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if(!token && hash) {
            let authToken = hash.substring(1).split("&").find(element => element.startsWith("access_token"))?.split("=")[1]
            console.log(authToken)

            if(authToken !== undefined) {
                window.location.hash = ""
                window.localStorage.setItem("token", authToken)
                setNewToken(authToken)
            }
        } else { 
            token ? setNewToken(token) : null }
        dispatch(addToken(newToken))
    }, [newToken])
    
    const logout = () => {
        setNewToken("")
        window.localStorage.removeItem("token")
        dispatch(addToken(''))
    }

  return (
    <PageContainer loginPage={true}>
      <section className="w-[85%] h-auto py-24 px-6 sm:h-[60%] max-w-[930px] lg:max-h-[660px] md:h-[50%] lg:h-[65%] lg:w-[65%] xl:h-[75%] rounded-xl bg-gradient-to-tr from-active to-spotify rounded-x flex justify-center items-center">
        <div className='w-auto h-auto flex flex-col justify-center items-start'>
            <div className='w-full h-auto sm:h-40 flex items-center'>
                <FaSpotify size={60} />
                <p className='text-titleSize w-1/2 pl-8'>começe a ouvir música hoje mesmo</p>
            </div>
            { newToken === '' ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    <Button>
                        Login com o Spotify
                    </Button>
                </a>
                : <><Link to='/player' className='text-bodySize pt-4 pb-8 transition-all hover:scale-110 hover:text-black md:text-titleSize'>Clique aqui para comecar a ouvir</Link><Button onClick={logout}>Log out</Button></>
            }
        </div>
      </section>
    </PageContainer>
  )
}

export default Login
