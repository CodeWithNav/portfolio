import { Project } from "@/config/projects";
import { GitHubDarkIcon, GitHubLightIcon } from "developer-icons";
import Image from "next/image";

export default function ProjectCard({ name, description, url, tools, source, image }: Project) {
    return (
        <div className=" shadow-md rounded-lg p-4 transition-all border-white border-2 ">
            <div
                className="flex flex-row  justify-between gap-2   "
            > <p className="text-xl font-bold w-min text-nowrap mb-2">{name}</p>

                <div className="flex gap-2">
                    {
                        url && <a href={url} target="_blank" rel="noreferrer noopener" >
                            Live
                        </a>
                    }

                    {
                        source && <a href={source} target="_blank" rel="noreferrer noopener">
                            <GitHubLightIcon size={24} className="dark:hidden" />
                            <GitHubDarkIcon size={24} className="hidden dark:block" />
                        </a>
                    }
                </div>

            </div>

            {image && <Image src={image} alt="project" width={300} height={200} className="rounded-lg h-[200px] w-full" />
            }
            <p className="text-md text-ellipsis h-[100px] overflow-y-scroll my-2">{description}</p>
            {tools && tools.length > 0 && <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {tool}
                    </div>
                ))}
            </div>
            }
        </div>
    );
}