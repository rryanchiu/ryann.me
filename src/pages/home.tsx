import Hello from "../components/hello.tsx";
import Avatar from "../components/avatar.tsx";
import SocialMedias from "../components/social-medias.tsx";
import Projects from "../components/projects.tsx";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import About from "../components/about.tsx";
import Roles from "../components/roles.tsx";

const Home = () => {

    return (
        <main className="px-6 py-[8vh] max-w-[76ch] m-auto dark:bg-dark dark:text-light">
            <Header/>
            <div className="flex items-start gap-6">
                <Avatar/>
                <Hello/>
            </div>
            <Roles/>
            <SocialMedias/>
            <About/>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default Home