import Skills from "@/Components/Skills/Skills";

export const metadata = {
    title: "Skills | YourSiteName",
    description: "A list of technologies and skills I work with.",
};


const page = () => {
    return (
        <div>
            <Skills />
        </div>
    );
};

export default page;