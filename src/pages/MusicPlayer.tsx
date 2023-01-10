import PageContainer from '../components/PageContainer'
import MainCard from '../components/MainCard'
import SecondaryCard from '../components/SecondaryCard'

function MusicPlayer() {
  return (
    <PageContainer loginPage={false}>
      <section className="w-[85%] h-auto sm:h-[60%] grid grid-cols-1 gap-8 max-w-[930px] lg:max-h-[660px] md:grid-cols-7 md:grid-rows-1 md:h-[50%] md:gap-y-0 lg:h-[65%] lg:w-[65%] xl:h-[75%] lg:gap-y-0">
       <MainCard />
        <div className="flex flex-col row-span-1 col-span-3 md:col-span-4">
          <SecondaryCard type='primary' />
          <SecondaryCard type='secondary' />
        </div>
      </section>
    </PageContainer>
  )
}

export default MusicPlayer
