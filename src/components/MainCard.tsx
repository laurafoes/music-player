import Player from './Player';
import placeholder from '/src/assets/placeholder.png'
// solicitar pelo app
// cliente ugf
//   sem login
//   na hora solicitar, selecionar opcao de outra unimed

// unidade rua antonio dib mussi, 351 centro




function MainCard() {
  return (
    <div className="row-span-2 col-span-3 h-[500px] sm:h-auto bg-cardColor rounded-xl p-6 xl:p-12 2xl:rounded-3xl transition-all hover:scale-105 hover:bg-hoverPlayerBg">
      <div className="flex flex-col justify-between items-start h-[75%] lg:pb-10 xl:pb-12 2xl:pb-0">
        <img src={placeholder} className="w-[100%] h-auto rounded-lg" />
        <div>
          <h2 className="text-mediumSize font-primary font-bold leading-1 xl:text-titleSize">
            Acorda devinho
          </h2>
          <p className="text-secondary leading-none">Banda Rocketseat</p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly mt-4 sm:mt-0 sm:h-[15%] bg-cardColor rounded-xl lg:h-[20%] xl:h-[15%] xl:mt-6 2xl:mt-12">
        <Player type='primary' progressBar={true} />
      </div>
    </div>
  );
}

export default MainCard;
