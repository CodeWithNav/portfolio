import { WorkExperience } from "@/config/experience";




export default function ExperienceCard(
    {
        company,
        position,
        start,
        end,
        description
    }: WorkExperience
) {

    return <div className="p-2 rounded-md w-full flex flex-col transition-all border-2 " >
        <div className="flex flex-row w-full justify-between">
            <p className="font-bold">
                {company}
            </p>
            <p className="text-sm">
                {start} - {end}
            </p>
        </div>
        <p className="text-sm">
            {position}
        </p>
        <ul className="list-disc pl-4">
            {description.map((desc, index) => <li key={index}>{desc}</li>)}
        </ul>
    </div>

}