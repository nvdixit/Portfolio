import ExternalWebpageButton from  "./ExternalWebpageButton/ExternalWebpageButton"
import Navbar from "./NavigationBar/Navbar"
import CapstoneBox from "./CapstoneBox/CapstoneBox"
import Accordion from "./Accordion/Accordion"
import ToolLogoBox from "./ToolLogoBox/ToolLogoBox"

function Intro() {
  return (
      <main id="Intro">
        <Navbar/>

        <h1>
          <center>Nikhil Dixit</center>
        </h1>

        <p id="centerText">
            <center>
                I'm a Data Engineer at Fidelity Investments. I got my master's in computer science at<br/>Purdue University in 2025
                and my bachelor's in computer science at NC State in 2023.
            </center>
        </p>

        <p id="centerText">
          <center><h2>More About Me</h2></center>

          <center>
              <ExternalWebpageButton url={"https://github.com/nvdixit"} webpage={"GitHub"}/>
              <ExternalWebpageButton url={"https://www.linkedin.com/in/nikhil-dixit-420279159"} webpage={"Linkedin"}/>
          </center>

        </p>

        <p>
            <center id="centerText">
                <h2>Experience</h2>
            </center>
            <pre />
        
            <center>
            <div id="ExperienceBox">
            <Accordion trigger='Data Engineering Intern - Fidelity Investments' company='Fidelity Investments' time='Jun. 2024 - Aug. 2024'
            description={['Built tool that allows users to search for metadata across multiple datastores',
                          'Developed unsupervised machine learning algorithm to recommend individual datapoints to users',
                          'Modified existing application\'s user experience for seamless unsupervised learning integration',
                          'Automated data cleaning and verification for rapid ingestion into datastores']}/>
          

            <Accordion trigger='ML/NLP Engineering Intern - Fidelity Investments' company='Fidelity Investments' time='Jun. 2023 - Aug. 2023'
            description={['Used machine learning to generate rapid analytics on vendor data to decrease cost/time of onboarding new vendors',
                          'Employed natural language processing techniques to correlate multi-vendor metadata together',
                          'Created LSTM neural network to predict the impact of natural and geopolitical events on markets/mutual funds']}
            />

            <Accordion trigger='Full Stack Engineering Intern - Fidelity Investments' company='Fidelity Investments' time='Jun. 2022 - Aug. 2022'
            description={['Worked on two different teams to learn how to build enterprise grade software using Agile processes',
                          'Implemented multiple features on to first team\'s support website using ExpressJS',
                          'Designed and developed automation architecture and strategies for several financial reports on second team',
                          'Gained experience eliciting requirements from users and testing software']}
            />

            <Accordion trigger='Software Engineering Intern - nCino' company='Fidelity Investments' time='Oct. 2021 - Dec. 2021'
            description={["Gained practical knowledge of Agile and Scrum development methodologies", 
                          "Attended daily stand-ups, sprint retros/reviews, and sprint plannings",
                          "Participated in whiteboarding sessions with senior developers"]}
            />
            </div>
            </center>

        </p>

        <p id="centerText">
            <center>
                <pre/>
                <h2>Senior Design Capstone</h2> 
                <pre />
            </center>

            <center>
              <CapstoneBox />
            </center>
        </p>

        <p id="centerText">
            <center>
                <h2>What I've Worked With</h2>
                
                <ToolLogoBox />              
            </center>

        </p>
 
      </main>
    )
}

export default Intro