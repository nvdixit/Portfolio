import WebpageButton from "./WebpageButton/WebpageButton"
import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Course from "./Course/Course"

function Intro() {
    return (          
      <main>
        <h1>
          <center>Nikhil Dixit</center>
        </h1>
        
        <p>
            <center>
                I'm an aspiring software developer studying computer science at North Carolina State University. Go Wolfpack!
                I started programming when I was 13 and have loved it ever since. Now, I'm familiar with Java, Python, Swift, and C. 
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
                <Course courseName="CSC116 - Introduction to Computing - Java" description={["Learned basics of Java programming language & OOP", "asdfadsf"]}/>
                <Course courseName="CSC216 - Fundamentals of Software Engineering"/>
                <Course courseName="CSC226 - Discrete Mathematics"/>
                <Course courseName="CSC316 - Data Structures & Algorithms"/>
                <Course courseName="CSC230 - C and Software Tools"/>
                <pre />

             </center>

            <center>
                <WebpageButton title={"Projects"}/>
                <WebpageButton title={"Hobbies"}/>
                <WebpageButton title={"Contact"}/>
            </center>
        </p>
      </main>
    )
}

export default Intro