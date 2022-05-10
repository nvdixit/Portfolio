import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Navbar from "./NavigationBar/Navbar"
import SkillList from "./SkillList/SkillList"
import Footer from './Footer/Footer'
import EmploymentBox from './EmploymentBox/EmploymentBox'
import CourseBox from "./CourseBox/CourseBox"

function Intro() {
  return (          
      <main>
        <Navbar/>

        <h1>
          <center>Nikhil Dixit</center>
        </h1>
        
        <p>
            <center>
                I'm a software engineer studying computer science at North Carolina State University.
            </center>
        </p>

        <p>
          <center><h2>My Socials</h2></center>

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
                <EmploymentBox companyName={"nCino"} time={"Oct. 2021 - Dec. 2021"}
                description={["Gained practical knowledge of Agile and Scrum development methodologies", 
                              "Attended daily stand-ups, sprint retros/reviews, and sprint plannings"]}/>
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
                skills={["Eclipse, VSCode, PyCharm, Xcode", "Git/GitHub", "AWS Amplify/RDS/Route 53/Elastic Beanstalk", "ReactJS", "Maven", "Spring/Spring Boot",
                "MySQL", "Flask", "JUnit, Jenkins", "Prolog", "EmailJS", "Jupyter", "Keras/Tensorflow/PyTorch", "ML/AI/NLP", "AngularJS", "Hibernate"]}/>

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