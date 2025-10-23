interface NaviProps {
    url1: string;
    url2: string;
}

export default function Navi({url1, url2}: NaviProps) {
    return(
        <div className="flex flex-row justify-between">
            <a className="bg-cyan-700 shadow-lg  w-25 text-center text-white" href={url1} >antes</a> 
            <a href={url2} className="bg-cyan-700 text-white shadow-lg  w-25 text-center ">siguiente</a>
        </div>

    )

}