interface CardProp {
    title?:string,
    sub?:string,
    link?: string
    color_card?: string,
    color_title?:string,
    color_sub?:string
}
export default function CardModel({color_title="#0000",color_sub="#57C2A8",color_card="#ffff" ,title, sub, link ,  }:CardProp){
    return(
        <div className={` p-5 rounded-lg shadow-sm flex flex-col transition-all duration-300 hover:scale-[1.02] `} style={{backgroundColor: color_card}}>
            <div className={`font-bold text-[${color_title}]`}>{title}</div>
            <div className={`text-[${color_sub}]`}>{sub}</div>
            <strong></strong>
            <div className="flex flex-col justify-center shadow-sm rounded-xl overflow-hidden h-[500px] mt-2 hover:shadow-md ">
              <iframe
                className="h-full"
                title="EVE3D - Célula Procariota"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share

                src={link}
              ></iframe>
            </div>

          </div>
    )
}