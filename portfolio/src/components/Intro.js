import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Course from "./Course/Course"
import Navbar from "./NavigationBar/Navbar"
import SkillList from "./SkillList/SkillList"
import Footer from './Footer/Footer'
import EmploymentBox from './EmploymentBox/EmploymentBox'

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
                <Course courseDesignation="CSC116" courseName="Introduction to Computing - Java" 
                description={["Reviewed basics of Java programming language & OOP", "Performed system/unit testing on small applications"]}/>

                <Course courseDesignation="CSC216" courseName="Fundamentals of Software Engineering" 
                description={["Studied basic software engineering techniques", "Engaged in pair programming, used test driven development, and worked with version control", 
                              "Built several large scale applications using Java",
                              "Began learning about linked memory data structues & recursion"]}/>

                <Course  courseDesignation="CSC226"courseName="Discrete Mathematics" 
                description={["Learned proofs, predicate calculus, and boolean algebra", "Reviewed counting, combinatorics, graph theory, and graph traversals",
                              "Induction and Big-Oh, Big-Omega, and Big-Theta"]}/>

                <Course courseDesignation="CSC316" courseName="Data Structures & Algorithms" 
                description={["Reviewed comparison and non-comparison based sorting algorithms","Studied linked and congitious memory data structures",
                              "Implemented Lists, Stacks, Queues, Positional Lists, Maps, Binary Trees, Balanceable Binary Trees, Heaps, and Graphs",
                              "Studied HashMaps/Tables and Hashing algorithms + compression techniques",
                              "Learned to classify algorithm runtimes using Big-Oh notation"]}/>

                <Course courseDesignation="CSC230" courseName="C and Software Tools" 
                description={["Learned basics of C and C++ programming languages", "Memory management techniques and security",
                              "Studied the C Standard Library and most common debugging/code coverage tools used when developing C programs"]}/>

                <Course courseDesignation="CSC246" courseName="Operating Systems"
                description={["Learned role and history of operating systems", "Wrote programs to experiement with processes and threads", 
                              "Explored different CPU/Disk scheduling algorithms", "Studied synchronization problems and techniques for solving them",
                              "Learned about mass storage, memory management, and virtualization"]}/>
                
                <Course courseDesignation="CSC333" courseName="Automata, Grammars, and Computability"
                description={["Learned about the theory of computation", "Studied Finite Automata, Context Free Grammars, and Turing Machines",
                              "Explored Regular and Context Free Languages", "Studied Turing Decidibility and Recognizability", 
                              "Learned about P vs. NP vs. NP-Completeness and the P = NP question"]}/>

                <Course courseDesignation="CSC326" courseName="Software Engineering" 
                description={["Studied software design process, security, maintainence, UI/UX, and HCI", "Learned about accessibility, testing, and requirements", 
                              "Implemented new functionality onto course legacy software project, iTrust2", 
                              "Wrote thorough design documents, system test plans, and user guide"]}/>

                <Course courseDesignation="CSC401" courseName="Data and Computer Communication Networks"
                description={["Studied the history of the internet and telephone networks", "Learned about the 5 layers of the internet", 
                              "Studied several networking protocols including HTTP, DNS, DHCP, TCP/UDP, IP, ALOHA, CSMA and more"]}/>

                <Course courseDesignation="CSC411" courseName="Introduction to Artificial Intelligence"
                description={["Studied foundations and applicaitons of artificial intelligence", 
                              "Learned about search trees, decision making, planning, reasoning, heuristics, games, and linear programming", 
                              "Explored ML algorithms using Prolog and Weka"]}/>
                
                <Course courseDesignation="CSC379" courseName="Ethics in Computing"
                description={["Studied major ethical issues and dilemmas surrounding computer science", 
                              "Wrote case studies and discussed with classmates to analyze ethical behavior for computer scientists"]}/>
                <pre/>

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