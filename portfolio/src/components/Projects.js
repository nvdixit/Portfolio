import Navbar from "./NavigationBar/Navbar"
import Project from "./Project/Project"

function Projects() {
    const mysqlUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg';
    const springBootUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg';
    const reactUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg';
    const awsUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg';        
    const htmlUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
    const cssUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg';
    const javascriptUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    const pythonUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    const jupyterUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg'
    const scikitlearnUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg'
    const kaggleUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg'
    const swiftUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg'
    const mongoUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg'

    return (
        <main id="ProjectsPage">
            <Navbar/>

            <center><h1>Projects</h1></center>

            <p id="centerText">
                <center>
                    Programming and research projects I've used to help myself learn. 
                </center>
            </p>

            <p>
                <center>
                    <div id='projectContainer'>
                    
                        <div id='projectLeft'>
                            <Project projectName='AWS Change Management' description='A software system that manages changes to AWS environments'
                                    hasRepo={false} capstone={true}
                                    technicalSummary={['Worked with Cisco DevOps to create a cloud change process for Cisco developers to follow',
                                                        'Led a team of 5 CS seniors to build an AWS change management application',
                                                        'Used AWS CloudTrail, Simple Queue Service, Simple Notification Service, and EventBridge to track and filter cloud activity in an AWS environment',
                                                        'Built system that notifies appropriate points of contact upon unauthorized cloud change',
                                                        'Request: A request to modify the cloud envrionment in some way (create a new EC2 instance, delete an S3 bucket, etc.)'
                                    ]}
                                    stackImages={[mongoUrl, springBootUrl, reactUrl, awsUrl]}/>

                            <Project projectName="Tracksaction" description="A full stack app that organizes financial information" hasRepo={true} 
                                            repoUrl="https://github.com/nvdixit/Tracksaction"
                                            technicalSummary={[ "Hosted on AWS RDS, Elastic Beanstalk, and Amplify",
                                                                "Created relational database schema to manage credit cards and corresponding transactions",
                                                                "Implemented Maven to integrate MySQL JDBC and Spring Boot dependencies",
                                                                "Employed axios.js to send CRUD requests to Spring Boot/MySQL backend hosted on AWS"]}
                                                                
                                            stackImages={[mysqlUrl, springBootUrl, reactUrl, awsUrl]}/>

                            <Project projectName="Portfolio Website" description="My porfolio website" hasRepo={true}
                                            technicalSummary={["You're on it right now!",
                                                                "Implemented the React framework to create reusable and functional UI components",
                                                                "Gained proficiency in HTML/CSS/JavaScript",
                                                                "Used react-router library for multiple webpages",
                                                                "Implemented EmailJS library for Contact Form functionality"]}
                                            repoUrl="https://github.com/nvdixit/Portfolio"
                                            
                                            stackImages={[htmlUrl, cssUrl, javascriptUrl, reactUrl]}/>

                        </div>

                        <div id='projectRight'>
                            <Project projectName="OOMST" description="A research project on optimal online minimum spanning tree algorithms" hasRepo={false} 
                            technicalSummary={['Ideated novel mathematical formalism for constructing minimum spanning trees in an online fashion with cost mechanics', 
                                                'Discovered worst case time complexity and cost upper bound for all possible algorithms pertinent to the formalism',
                                                'Explored uniformly random average case time complexity and expected cost upper bounds']}
                                                
                                                stackImages={[]}/>

                            <Project projectName="Toxic Comments Classifier" description="An NLP model to classify abusive and cyberbullying internet comments" hasRepo={true}
                                            technicalSummary={["Aggregated training/testing corpora from mulitple Kaggle datasets", 
                                                                "Used nltk to preprocess data (lemmatization and removing stopwords)",
                                                                "Employed SentenceTransformers library for embeddings and sklearn Support Vector Machine as the model",
                                                                "Achieved 90% accuracy on testing data"]}
                                            repoUrl="https://github.com/nvdixit/toxicity_abuse_classifier"

                                            stackImages={[pythonUrl, jupyterUrl, scikitlearnUrl, kaggleUrl]}/>

                            <Project projectName="AllTime" description="A RESTful service about time" hasRepo={true}
                                            technicalSummary={["Implemented Flask to create a REST API that returns the time in every time zone on Earth",
                                                                "Created thorough documentation",
                                                                "Employed Flask-jsonify to return data packets in easy to use JSON format",
                                                                "Hosted on AWS Elastic Beanstalk"]} 
                                            repoUrl="https://github.com/nvdixit/AllTime.git"

                                            stackImages={[pythonUrl, awsUrl]}/>

                            <Project projectName="TechStocks" description="An iOS app that tracks company stock prices" hasRepo={true}
                                            repoUrl="https://github.com/nvdixit/TechStocks"
                                            technicalSummary={["Implemented CoreData to persist stocks", 
                                                                "Used Alamofire to make HTTP requests to IEXCloud & tickersearch APIs for stock data",
                                                                "Used SwiftyJSON to process data obtained from HTTP requests",
                                                                "Applied CocoaPods dependency manager"]}

                                            stackImages={[swiftUrl]}/>
                        </div>
                    </div>

                </center>
            </p>

        </main>
    )
}

export default Projects