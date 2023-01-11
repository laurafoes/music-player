import PlayerControls from './PlayerControls'
import placeholder from '/src/assets/placeholder.png'

interface CardProps {
    type: 'primary' | 'secondary'
}

function SecondaryCard({ type }: CardProps) {
  return (
    <>
        <div className={`flex flex-col justify-between items-center ${ type === 'primary' ? 'h-[55%]' : 'h-[40%] mt-[10%] sm:mt-[6%]'} bg-cardColor rounded-xl p-6 xl:p-12 2xl:rounded-3xl transition-all hover:scale-105 hover:bg-hoverPlayerBg`}>
            <div className="flex justify-between">
                <img src={placeholder} className="w-3/12 h-auto rounded-lg"/>
                <div className='flex flex-col justify-center w-2/3'>
                    <h2 className="text-mediumSize font-primary font-bold leading-1 xl:text-titleSize">
                        Acorda devinho
                    </h2>
                    <p className="text-secondary leading-none">Banda Rocketseat</p>
                </div>
            </div>
            { type === 'secondary' ? <PlayerControls type='secondary' progressBar={false} /> : <PlayerControls type='secondary' progressBar={true} />}
        </div>
    </>
  )
}

export default SecondaryCard
