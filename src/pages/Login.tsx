import PageContainer from '../components/PageContainer'
import { FaSpotify } from 'react-icons/fa'

function Login() {
  return (
    <PageContainer>
      <section className="w-[85%] h-auto sm:h-[60%] max-w-[930px] lg:max-h-[660px] md:h-[50%] lg:h-[65%] lg:w-[65%] xl:h-[75%] rounded-xl bg-gradient-to-tr from-active to-spotify rounded-x flex justify-center items-center">
        <div className='w-auto h-auto flex flex-col justify-center items-start'>
            <div className='w-full h-40 flex items-center'>
                <FaSpotify size={60} />
                <p className='text-titleSize w-1/2 pl-8'>começe a ouvir música hoje mesmo</p>
            </div>
            <button className='border border-white rounded-full px-12 py-2 bg-white bg-opacity-0 transition-all hover:scale-110 hover:bg-opacity-10'>
                Login com o Spotify
            </button>
        </div>
      </section>
    </PageContainer>
  )
}

export default Login
