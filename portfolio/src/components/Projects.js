import Footer from "./Footer/Footer"
import Navbar from "./NavigationBar/Navbar"
import ProjectButton from "./ProjectButton/ProjectButton"

function Projects() {
    return (
        <main id="ProjectsPage">
            <Navbar/>

            <center><h1>Projects</h1></center>

            <p>
                <center>
                    Programming projects I've used to help myself learn. 
                </center>
            </p>

            <p>
                <center>
                    <ProjectButton projectName="Tracksaction" description="Full stack app that organizes financial information" hasRepo={true} 
                                    language="HTML/CSS/JS, Java, SQL" repoUrl="https://github.com/nvdixit/Tracksaction"
                                    technicalSummary={["Built with MySQL, Spring Boot, and ReactJS",
                                                        "Hosted on AWS RDS, Elastic Beanstalk, and Amplify",
                                                        "Created relational database schema to manage credit cards and corresponding transactions",
                                                        "Implemented Maven to integrate MySQL JDBC and Spring Boot dependencies",
                                                        "Employed axios.js to send CRUD requests to Spring Boot/MySQL backend hosted on AWS"]}/>

                    <ProjectButton projectName="Portfolio Website" description="My porfolio website" hasRepo={true} language="HTML/CSS/JavaScript"
                                    technicalSummary={["You're on it right now!",
                                                        "Implemented React framework to create reusable and functional UI components (like this popup box)",
                                                        "Gained proficiency in HTML/CSS/JavaScript",
                                                        "Used react-router library for multiple webpages",
                                                        "Implemented EmailJS library for Contact Form functionality"]}
                                    repoUrl="https://github.com/nvdixit/Portfolio"/>

                    <ProjectButton projectName="AllTime" description="A RESTful service about time" hasRepo={true} language="Python"
                                    technicalSummary={["Implemented Flask to create a REST API that returns the time in every time zone on Earth",
                                                        "Created thorough documentation",
                                                        "Employed Flask-jsonify to return data packets in easy to use JSON format",
                                                        "Hosted on AWS Elastic Beanstalk"]} 
                                    repoUrl="https://github.com/nvdixit/AllTime.git"/>

                    <ProjectButton projectName="TechStocks" description="iOS app that tracks company stock prices" hasRepo={true} language="Swift"
                                    repoUrl="https://github.com/nvdixit/TechStocks"
                                    technicalSummary={["Implemented CoreData to persist stocks", 
                                                        "Used Alamofire to make HTTP requests to IEXCloud & tickersearch APIs for stock data",
                                                        "Used SwiftyJSON to process data obtained from HTTP requests",
                                                        "Applied CocoaPods dependency manager"]}/>

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