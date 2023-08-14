
interface EventProps{
    name:string;
    icon:string;
}

export const Event=({name,icon}:EventProps)=>{
    return(
      <div className="flex flex-col items-center justify-center">
        <img src={icon} alt={name} className="rounded-full"/>
        <p>{name}</p>
      </div>
    )
}