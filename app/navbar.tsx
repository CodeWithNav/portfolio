import Link from "next/link";

interface NavigationItem {
    title: string;
    link: string;
}


export default function NavBar() {

    const naviagation = [
        {
            title: "Home",
            link: "/#about"
        },
        {
            title: "LeetCode",
            link: "/#leetcode"
        },
        {
            title: "Skills",
            link: "/#skills"
        },
        {
            title: "Projects",
            link: "/#projects"
        },
        {
            title: "Work Experience",
            link: "/#experience"
        },
        {
            title: "Contact",
            link: "/#contact"
        }
    ]



    return <div className="w-full p-8">


        <div className="w-min flex flex-row gap-x-4">

            {
                naviagation.map((item: NavigationItem) => (
                    <Link href={item.link} key={item.title} className="text-nowrap">
                        {item.title}
                    </Link>
                ))
            }
        </div>


    </div>
}