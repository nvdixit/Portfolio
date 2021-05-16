import WebpageButton from "./WebpageButton/WebpageButton"
import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"

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
              <ExternalWebpageButton url={"https://github.com/nvdixit"}/>
              <ExternalWebpageButton url={"https://www.linkedin.com/in/nikhil-dixit-420279159"}/>
          </center>

        </p>

        <p>
            <center>
                Coursework <pre />
                CSC116 - Introduction to Computing - Java &emsp;
                CSC216 - Fundamentals of Software Engineering &emsp;
                CSC226 - Discrete Mathematics <pre />
                CSC316 - Data Structures & Algorithms &emsp;
                CSC230 - C and Software Tools <pre />
             </center>

            <center>
                <WebpageButton title={"Projects"} text={"Coding projets I've used to learn"} />
                <WebpageButton title={"My Hobbies"} text={"What I like to do for fun"} />
            </center>
        </p>
      </main>
    )
}

export default Intro