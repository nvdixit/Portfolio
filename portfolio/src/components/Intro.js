import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Course from "./Course/Course"
import Navbar from "./NavigationBar/Navbar"
import SkillList from "./SkillList/SkillList"

function Intro() {
  return (          
      <main>
        <Navbar/>

        <h1>
          <center>Nikhil Dixit</center>
        </h1>
        
        <p>
            <center>
                I'm an aspiring software developer studying computer science at North Carolina State University. Go Wolfpack!
                I started programming when I was 13 and have loved it ever since.
            </center>
        </p>

        <p>
          <center><h2>My Socials</h2></center>
          <pre />

          <center>
              <ExternalWebpageButton url={"https://github.com/nvdixit"} webpage={"GitHub"}/>
              <ExternalWebpageButton url={"https://www.linkedin.com/in/nikhil-dixit-420279159"} webpage={"Linkedin"}/>
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

                <SkillList orientation="left" listTitle="Languages" 
                skills={["Java", "python", "Swift", "HTML/CSS/JavaScript","C++", "C"]}/>
                
                <SkillList orientation="right" listTitle="Stacks/Technologies" 
                skills={["Eclipse, VSCode, PyCharm, Xcode", "Git/GitHub", "ReactJS", 
                "JUnit, Jenkins", "Jupyter", "Keras/Tensorflow", "ML/AI/NLP"]}/>
                <pre />

             </center>

        </p>
      </main>
    )
}

export default Intro