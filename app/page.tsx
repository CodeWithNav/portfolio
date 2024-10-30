import ExperienceCard from "@/components/experience";
import LanguageCard from "@/components/language_card";
import ProjectCard from "@/components/project_card";
import { dbClouds } from "@/config/db_cloud";
import { experience } from "@/config/experience";
import { frameworks } from "@/config/framesworks";
import { languages } from "@/config/languages";
import { projects } from "@/config/projects";
import { AppwriteIcon, DartIcon, FlutterIcon, JavaIcon, JavaScriptIcon, SpringIcon, SupabaseIcon } from "developer-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-20">

      <section id="about" className="flex flex-col md:flex-row  w-full py-10 justify-between gap-10 items-center">
        <div className="flex flex-col ">
          <p className="text-4xl font-bold">
            Hi I'm Navpreet Singh
          </p>
          <p className="text-2xl">
            Software Engineer
          </p>
          <p className="pt-4 text-lg">
            Software engineer with 1+ years of experience, skilled in building high-quality applications and solving complex challenges. Top 1% Guardian on LeetCode, with expertise in Flutter, Next.js, and Java for developing robust, scalable systems. Passionate about continuous learning and innovative problem-solving.
          </p>
        </div>
        <Image src="/profile.jpg" height={400} width={400} alt="Profile" style={{
          borderRadius: '80px',
          backgroundColor: 'transparent',

        }} />

      </section>

      <section id="leetcode">
        <p className="text-3xl font-bold">
          Leetcode Stats
        </p>
        <hr />
        <div className="flex flex-col md:flex-row">
          <iframe src="https://leetcard.jacoblin.cool/navpreetsingh951818?theme=light&font=Faustina&ext=contest" width="100%" height="260" title="daily.dev" style={{
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}></iframe>
          <iframe src="https://leetcard.jacoblin.cool/navpreetsingh951818?theme=light&font=Faustina&ext=heatmap" width="100%" height="260" title="daily.dev" style={{
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}></iframe>
          <iframe src="https://leetcard.jacoblin.cool/navpreetsingh951818?theme=light&font=Faustina&ext=activity" width="100%" height="260" title="daily.dev" style={{
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}></iframe>


        </div>
      </section>

      <div className="mt-8" id="skills">
        <p className="text-3xl font-bold">
          Skills
        </p>
        <hr />
        <div>
          <p className="text-md font-bold">
            Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {
              languages.map((language) => (
                <LanguageCard key={language.name} name={language.name} >
                  {language.icon}
                </LanguageCard>
              ))
            }
          </div>

        </div>
        <div>
          <p className="text-md font-bold">
            Frameworks/Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {
              frameworks.map((language) => (
                <LanguageCard key={language.name} name={language.name} >
                  {language.icon}
                </LanguageCard>
              ))
            }
          </div>
        </div>
        <div>
          <p className="text-md font-bold">
            Databases/Cloud Services
          </p>
          <div className="flex flex-wrap gap-2">
            {
              dbClouds.map((language) => (
                <LanguageCard key={language.name} name={language.name} >
                  {language.icon}
                </LanguageCard>
              ))
            }
          </div>
        </div>
      </div>


      <div className="flex flex-col mt-4" id="projects">
        <p className="text-3xl font-bold">
          Projects
        </p>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {
            projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))
          }        </div>
      </div>

      <div className="flex flex-col mt-8" id="experience">
        <p className="text-3xl font-bold">
          Work Experience
        </p>
        <hr />
        <div className="flex flex-col mt-8">
          {
            experience.map((exp) => (
              <ExperienceCard key={exp.company} {...exp} />
            ))
          }
        </div>
      </div>

      <div className="mt-8" id="contact">
        <p className="text-3xl font-bold">
          Contact Info
        </p>
        <hr />
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold">
              Email
            </p>
            <p>
              navpreetsingh951818@gmail.com</p>

          </div>
        </div>
      </div>
    </div>
  );
}
