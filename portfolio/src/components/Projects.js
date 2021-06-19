import Footer from "./Footer/Footer"
import Navbar from "./NavigationBar/Navbar"
import ProjectButton from "./ProjectButton/ProjectButton"

function Projects() {
    return (
        <main id="ProjectsPage">
            <Navbar oneLink="/" oneName="Home" twoLink="/Hobbies" twoName="Hobbies" threeLink="/Contact" threeName="Contact"/>

            <center><h1>Projects</h1></center>

            <p>
                <center>
                    Programming projects I've used to help myself learn. 
                </center>
            </p>

            <p>
                <center>
                    <ProjectButton projectName="TechStocks" description="iOS app that tracks company stock prices" hasRepo={true} language="Swift"
                                    repoUrl="https://github.com/nvdixit/TechStocks"
                                    technicalSummary={["Implemented CoreData to persist stocks", 
                                                        "Used Alamofire to make HTTP requests to IEXCloud & tickersearch APIs for stock data",
                                                        "Used SwiftyJSON to process data obtained from HTTP requests",
                                                        "Applied CocoaPods dependency manager"]}/>

                    <ProjectButton projectName="Portfolio Website" description="My porfolio website" hasRepo={true} language="HTML/CSS/JavaScript"
                                    technicalSummary={["You're on it right now!",
                                                        "Implemented React framework to create resusable and functional UI components (like this popup box)",
                                                        "Gained profeiciency in HTML/CSS/JavaScript",
                                                        "Used react-router library for multiple webpages",
                                                        "Implemented EmailJS library for Contact Form functionality"]}
                                    repoUrl="https://github.com/nvdixit/Portfolio"/>

                    <ProjectButton projectName="PackScheduler" description="A college course registration & management system" hasRepo={false} language="Java"
                                    technicalSummary={["Used Java properties class to create login functionality",
                                                        "Built finite state machine to clean read-in raw data",
                                                        "Created several custom exceptions to track errors within the system",
                                                        "Applied hashing to encrypt user passwords"]}/>
                </center>
            </p>

            <Footer/>
        </main>
    )
}

export default Projects