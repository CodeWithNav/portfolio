import { CSS3Icon, DartIcon, HTML5Icon, JavaIcon, JavaScriptIcon, KotlinIcon, MySQLIcon, TypeScriptIcon } from "developer-icons";

export interface Language {
    name: string;
    icon: React.ReactNode;
}


export const languages: Language[] = [
    {
        name: "Java",
        icon: <JavaIcon size={42} />,
    },
    {
        name: "Dart",
        icon: <DartIcon size={42} />,
    },
    {
        name: "Kotlin",
        icon: <KotlinIcon size={42} />,
    },
    {
        name: "TypeScript",
        icon: <TypeScriptIcon size={42} />,
    },
    {
        name: "SQL",
        icon: <MySQLIcon size={42} />,
    },
    {
        name: "JavaScript",
        icon: <JavaScriptIcon size={42} />,
    },
    {
        name: "HTML",
        icon: <HTML5Icon size={42} />,
    },
    {
        name: "CSS",
        icon: <CSS3Icon size={42} />,
    },


];