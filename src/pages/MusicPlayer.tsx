import PageContainer from '../components/PageContainer'
import MainCard from '../components/MainCard'
import SecondaryCard from '../components/SecondaryCard'
import Search from '../components/Search'
import { useSelector } from 'react-redux';
import { addToken, useToken } from '../redux/sliceToken';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MusicPlayer() {
  const token = useSelector(useToken);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem("token")
    dispatch(addToken(''))
    navigate('/')
}

  return (
    <PageContainer loginPage={false}>
      <Search />
      <section className="w-[85%] h-auto sm:h-[60%] grid grid-cols-1 gap-8 max-w-[930px] lg:max-h-[660px] md:grid-cols-7 md:grid-rows-1 md:h-[50%] md:gap-y-0 lg:h-[65%] lg:w-[65%] xl:h-[75%] lg:gap-y-0">
       <MainCard />
        <div className="flex flex-col row-span-1 col-span-3 md:col-span-4">
          <SecondaryCard type='primary' />
          <SecondaryCard type='secondary' />
        </div>
      </section>
      { token !== '' ? <div className='mt-8'><Button onClick={logout}>Logout</Button>
      </div> : null}
    </PageContainer>
  )
}

export default MusicPlayer
