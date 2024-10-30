import { SupabaseIcon, AppwriteIcon, PostgreSQLIcon, FirebaseIcon } from "developer-icons";
import { Language } from "./languages";

const size = 42;
export const dbClouds: Language[] = [

    {
        name: "Supabase",
        icon: <SupabaseIcon size={size} />
    },
    {
        name: 'Appwrite',
        icon: <AppwriteIcon size={size} />
    },
    {
        name: "PostgreSQL",
        icon: <PostgreSQLIcon size={size} />
    },

    {
        name: "Firebase",
        icon: <FirebaseIcon size={size} />
    },
];