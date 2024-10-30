import { AppwriteIcon, FirebaseIcon, FlutterIcon, NextJsIcon, PostgreSQLIcon, ReactIcon, SpringIcon, SupabaseIcon, TailwindCSSIcon } from "developer-icons";
import { Language } from "./languages";

const size = 42;
export const frameworks: Language[] = [
    {
        name: "Flutter",
        icon: <FlutterIcon size={size} />
    },
    {
        name: "Spring",
        icon: <SpringIcon size={size} />
    },
    {
        name: "SpringBoot",
        icon: <SpringIcon size={size} />
    },

    {
        name: "TailwindCSS",
        icon: <TailwindCSSIcon size={size} />
    },


    {
        name: "Next.js",
        icon: <NextJsIcon size={size} />
    },
    {
        name: "React",
        icon: <ReactIcon size={size} />
    }
];