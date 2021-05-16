import Link from "./Link"

function Intro() {
    return (          
      <main>
        <h1>
          <center>Nikhil Dixit</center>
        </h1>
        
        <p>
            <center>
                I'm an aspiring software developer studying computer science at North Carolina 
                State University.
                <Link url={"https://www.ncsu.edu"} hyperlinkText={"Go Pack!"}/>
            </center>
        </p>
           
        <p>
            <center>
                My Socials: 
            </center>

            <center>
                Coursework: CSC116 - Introduction to Computing - Java
                     CSC216 - Fundamentals of Software Engineering
                     CSC226 - Discrete Mathematics
                     CSC316 - Data Structures & Algorithms
                     CSC230 - C and Software Tools
             </center>
        </p>
      </main>
    )
}

export default Intro