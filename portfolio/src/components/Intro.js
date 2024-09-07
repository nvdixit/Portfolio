import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Navbar from "./NavigationBar/Navbar"
import SkillList from "./SkillList/SkillList"
import Footer from './Footer/Footer'
import EmploymentBox from './EmploymentBox/EmploymentBox'
import CourseBox from "./CourseBox/CourseBox"
import CapstoneBox from "./CapstoneBox/CapstoneBox"

function Intro() {
  return (          
      <main>
        <Navbar/>

        <h1>
          <center>Nikhil Dixit</center>
        </h1>
      
        <p>
            <center>
                I'm a software engineer getting my master's in computer science at Purdue University. <br/> 
                I completed my bachelor's in computer science at NC State in 2023.
            </center>
        </p>

        <p>
          <center><h2>More About Me</h2></center>

          <center>
              <ExternalWebpageButton url={"https://github.com/nvdixit"} webpage={"GitHub"}/>
              <ExternalWebpageButton url={"https://www.linkedin.com/in/nikhil-dixit-420279159"} webpage={"Linkedin"}/>
          </center>

        </p>

        <p>
            <center>
                <h2>Internships</h2>
            </center>
            <pre />

            <center>
                <EmploymentBox companyName={'Fidelity Investments'} time={'Jun. 2024 - Aug. 2024'} 
                description={['Build tool that allows users to search for metadata across multiple datastores',
                              'Developed unsupervised machine learning algorithm to recommend individual datapoints to users',
                              'Modified existing application\'s user experience for seamless unsupervised learning integration',
                              'Automated data cleaning and verification for rapid ingestion into datastores']}/>

                <EmploymentBox companyName={'Fidelity Investments'} time={'Jun. 2023 - Aug. 2023'} 
                description={['Used machine learning to generate rapid analytics on vendor data to decrease cost/time of onboarding new vendors',
                              'Employed natural language processing techniques to correlate multi-vendor metadata together',
                              'Created LSTM neural network to predict the impact of natural and geopolitical events on markets/mutual funds']}/>

                <EmploymentBox companyName={'Fidelity Investments'} time={'Jun. 2022 - Aug. 2022'} 
                description={['Worked on two different teams to learn how to build enterprise grade software using Agile processes',
                              'Implemented multiple features on to first team\'s support website using ExpressJS',
                              'Designed and developed automation architecture and strategies for several financial reports on second team',
                              'Gained experience eliciting requirements from users and testing software']}/>

                <EmploymentBox companyName={"nCino"} time={"Oct. 2021 - Dec. 2021"}
                description={["Gained practical knowledge of Agile and Scrum development methodologies", 
                              "Attended daily stand-ups, sprint retros/reviews, and sprint plannings",
                              "Participated in whiteboarding sessions with senior developers"]}/>
            </center>
        </p>

        <p>
            <center>
                <pre/>
                <h2>Senior Design Capstone</h2> 
                <pre />
            </center>

            <center>
              <CapstoneBox />
            </center>
        </p>

        <p>
            <center>
                <pre/>
                <h2>Coursework</h2> 
                <pre />
            </center>

            <CourseBox/>
            <pre/>

              <center>
                <SkillList orientation="left" listTitle="Stacks/Technologies" 
                skills={["Eclipse, VSCode, PyCharm, Xcode", "Git/GitHub", "AWS Amplify, RDS, Route 53", "Elastic Beanstalk, CloudTrail", "EventBridge", "ReactJS", "Maven", 
                "Spring/Spring Boot", "MySQL", "Flask", "JUnit, Jenkins", "Prolog", "EmailJS", "Jupyter", "Keras/Tensorflow/PyTorch", "ML/AI/NLP", "AngularJS", 
                "Hibernate", "Mongo"]}/>

                <SkillList orientation="right" listTitle="Languages" 
                skills={["Java", "Python", "HTML/CSS/JavaScript", "SQL", "Swift", "C++", "C"]}/>
                <pre />
                
             </center>

        </p>
        <Footer/>
      </main>
    )
}

export default Intro