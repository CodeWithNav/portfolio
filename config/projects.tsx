import { DartIcon, FirebaseIcon, FlutterIcon, JavaIcon, JSONIcon, NextJsIcon, SpringIcon, TypeScriptIcon } from "developer-icons";
import React from "react";

export interface Project {
    name: string;
    description: string;
    url: string;
    source?: string;
    tools?: React.ReactElement[],
    image?: string;
}
const size = 23;

export const projects: Project[] = [
    {
        name: "Testimonial",
        image: "/projects/testimonial.png",
        description: `
This system is designed to help businesses effortlessly collect, manage, and display customer testimonials.Here’s a quick overview:

✨ Dynamic Testimonial Collection: Capture customer feedback with an intuitive and user - friendly form interface.

🛠 Product Details Integration: Link testimonials to specific products, providing potential customers with meaningful insights.

💡 Responsive Design with Next.js: Built using Next.js to ensure a seamless and fast experience across all devices, with a modern, responsive UI.

🔒 Secure and Scalable: Backend powered by Java and Spring Boot, adhering to industry - standard practices to ensure security and scalability.
`,
        url: "https://testimonialv1.netlify.app/",
        tools: [
            <JavaIcon size={size} />,
            <TypeScriptIcon size={size} />,
            <NextJsIcon size={size} />,
            <SpringIcon size={size} />,


        ],
        source: "https://gitlab.com/navpreetsingh951818/testimonial_front.git"
    },

    {
        name: "Attendance Manager",
        image: "/projects/am.png",
        description: `This attendance management system allows teachers and administrators to add subject details, add students to specific courses, take attendance, check attendance records, and view previous attendance records. Potential future features include automated reporting and analysis, while a student analysis function allows for detailed tracking of individual performance.
`,
        url: "https://bytes-34f5c.web.app/#/",
        tools: [
            <FlutterIcon size={size} />,
            <DartIcon size={size} />,
            <FirebaseIcon size={size} />,


        ],
        source: "https://github.com/CodeWithNav/bytes.git"
    },
    {
        name: "Country Data",
        image: "/projects/cd.png",
        description: `Developed the "Country Data" Flutter package, a comprehensive tool for retrieving detailed information about countries. This package provides developers with easy access to various country-related data, including names, states, cities, currencies, and currency. Achieved a score of 150/160, reflecting high quality and reliability. Garnered an 82% popularity rating globally, demonstrating widespread usage and positive reception.
`,
        url: "https://pub.dev/packages/country_data",
        tools: [
            <FlutterIcon size={size} />,

            <DartIcon size={size} />,

        ],
        source: "https://github.com/CodeWithNav/country_data"
    },

    {
        name: "Sorting Visualizer",
        image: "/projects/sv.png",
        description: `Web application designed to help college students and teachers visualize sorting algorithms. The tool provides interactive animations that illustrate the internal workings and step-by-step processes of various sorting algorithms, such as Quick Sort, Merge Sort, and Bubble Sort that increased user engagement by 40% among 200+ college students and educators.`,
        url: "https://algosvisualizer.web.app/#/",
        tools: [
            <FlutterIcon size={size} />,
            <DartIcon size={size} />,

        ],
    },
    {
        name: "GraphVi",
        image: "/projects/gv.png",
        description: `Graph data structures visualising tool`,
        url: "https://graphvi.web.app/#/",
        tools: [
            <FlutterIcon size={size} />,
            <DartIcon size={size} />,

        ],
    },

    {
        name: "Puzzle",
        image: "/projects/slide.png",
        description: `The Simple Puzzle Challenge is an interactive 15-tile sliding puzzle game developed as a web-based project. The game consists of a 4x4 grid with tiles numbered from 1 to 15 and one empty space. The objective is to arrange the tiles in sequential order by sliding them into the empty space. This classic puzzle tests the player's logical thinking and spatial awareness.`,
        url: "https://slide-daf48.web.app/#/",
        tools: [
            <FlutterIcon size={size} />,
            <DartIcon size={size} />,

        ],
    },

];