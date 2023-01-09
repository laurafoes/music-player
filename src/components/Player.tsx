import { TbPlayerTrackPrev, TbPlayerPlay, TbPlayerTrackNext } from 'react-icons/tb'

interface PlayerProps {
    type: 'primary' | 'secondary',
    progressBar: boolean
}

function Player({ type, progressBar }: PlayerProps ) {
  return (
    <>
        <div className={`w-[100%] h-[100%] flex ${ type === 'secondary' ? 'px-12 pt-8 py-2 sm:pb-0 justify-around' : 'justify-between py-2'}`}>
            <TbPlayerTrackPrev stroke="white" fill="white" size={25} className='transition transition-300 hover:fill-playerBg hover:stroke-none hover:scale-125' />
            <TbPlayerPlay stroke="white" fill="white" size={25} className='transition transition-300 hover:fill-playerBg hover:stroke-none hover:scale-125' />
            <TbPlayerTrackNext stroke="white" fill="white" size={25} className='transition transition-300 hover:fill-playerBg hover:stroke-none hover:scale-125' />
        </div>
        { progressBar ? 
            <div className='w-[100%]'>
                <div className="bg-playerBg h-[6px] rounded-full">
                    <div className="bg-white h-[6px] w-[85%] rounded-full"></div>
                </div>
                <div className="flex text-playerBg justify-between pt-2 text-smallSize xl:text-timeSize">
                    <p>03:20</p>
                    <p>00:12</p>
                </div>
            </div>
            : null
        }
    </>
  );
}

export default Player;
