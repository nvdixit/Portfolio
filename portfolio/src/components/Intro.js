import {
  Link
} from "react-router-dom"

import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Course from "./Course/Course"

function Intro() {
  return (          
      <main>
        <ul id="navbar">
            <li id="navitem"><Link to={"/Projects"} style={{ textDecoration: 'none', color:"inherit" }}>Projects</Link></li>
            <li id="navitem"><Link to={"/Hobbies"} style={{ textDecoration: 'none', color:"inherit" }}>Hobbies</Link></li>
            <li id="navitem"><Link to={"/Contact"} style={{ textDecoration: 'none', color:"inherit"}}>Contact</Link></li>
        </ul>
        
        <h1>
          <center>Nikhil Dixit</center>
        </h1>
        
        <p>
            <center>
                I'm an aspiring software developer studying computer science at North Carolina State University. Go Wolfpack!
                I started programming when I was 13 and have loved it ever since. Now, I'm familiar with Java, Python, Swift, C++, and C. 
            </center>
        </p>

        <p>
          <center>My Socials</center>
          <pre />

          <center>
              <ExternalWebpageButton url={"https://github.com/nvdixit"} webpage={"GitHub"}/>
              <ExternalWebpageButton url={"https://www.linkedin.com/in/nikhil-dixit-420279159"} webpage={"Linkedin"}/>
          </center>

        </p>

        <p>
            <center>
                Coursework <pre />
                <Course courseName="CSC116 - Introduction to Computing - Java" description={["Reviewed basics of Java programming language & OOP", 
                                                                                             "Performed system/unit testing on applications"]}/>
                <Course courseName="CSC216 - Fundamentals of Software Engineering"/>
                <Course courseName="CSC226 - Discrete Mathematics"/>
                <Course courseName="CSC316 - Data Structures & Algorithms"/>
                <Course courseName="CSC230 - C and Software Tools"/>
                <pre />

             </center>

        </p>
      </main>
    )
}

export default Intro