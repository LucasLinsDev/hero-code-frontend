
interface HeaderProps{
    title:string;
    subtitle:string;
}

export const HeaderSection=({title,subtitle}:HeaderProps)=>{
    return(
        <div className="p-5 text-blue">
            <p className="text-2xl font-medium">{title}</p>
            <p className="text-b ase font-light">{subtitle}</p>
        </div>
    )
}