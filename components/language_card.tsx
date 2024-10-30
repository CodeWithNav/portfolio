


type Props = {
    name: string,
    children: React.ReactNode
}

export default function LanguageCard(
    { name, children }: Props,
) {


    return <div className="p-2 rounded-md w-min flex flex-col items-center hover:scale-110 transition-all" >
        {children}
        <p className="">
            {name}
        </p>
    </div>

}