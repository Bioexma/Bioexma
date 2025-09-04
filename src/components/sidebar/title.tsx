interface Title {
    color?: string,
    title: string,
    sub?: string,
    video?: string,
    img?: string
}

export default function TitleCard({ color = "", title, sub, video, img }: Title) {

    return (<>
        <div className={`grid sm:grid-cols-1 ${video|| img ? "md:grid-cols-2": "h-64"   }  gap-4`}>
            <div className={`font-semibold flex flex-col  rounded-2xl p-6 justify-center shadow-md text-center`} style={{backgroundColor:color}}>
                <h1 className="sm:text-3xl md:text-5xl font-bold mb-4 text-gray-800">{title}</h1>
                <h2 className="md:text-2xl text-gray-700">{sub}</h2>
            </div>
            {video ?

                <div className="flex justify-center shadow-lg rounded-xl overflow-hidden">
                    <iframe
                        className="h-[300px] w-full md:h-[400px]"
                        src={video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                : ""}
        </div>

    </>)
}