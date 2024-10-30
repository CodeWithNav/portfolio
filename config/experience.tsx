
export interface WorkExperience {
    company: string;
    position: string;
    start: string;
    end: string;
    description: string[];
}


export const experience: WorkExperience[] = [
    {
        "company": "Mohesu",
        "position": "Software Developer",
        "start": "May, 2023",
        "end": "Present",
        description: [
            "Build and Deploy scalable ecommerce platform, enhancing user engagement and increasing sales by 50% through improved user interfaces and optimized performance.",
            "Designed and implemented a comprehensive research management system for the Society of Anaesthesiology Clinical Pharmacology, streamlining data collection and analysis processes.",
            "Created a tool for generating Flutter freezed classes, reducing development time by 30% by automating boilerplate code generation.",
            "Build a request-based SQL query generator, reducing developer workload by 40% through the automation of complex query creation and improved database interaction efficiency.",
            "Integrate Razorpay and HDFC Bank payment systems, enabling secure and reliable transaction processing for various applications.",

            "Collaborated with cross-functional teams to gather requirements, design innovative solutions, and deliver high-quality software products on time and within scope.",

            "Utilized RESTful APIs and integrated third-party services to extend application functionality and enhance system interoperability."
        ],
    },
];