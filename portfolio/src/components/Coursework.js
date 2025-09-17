import React from 'react'
import Navbar from './NavigationBar/Navbar'
import CourseAccordionWrapper from './CourseAccordionWrapper/CourseAccordionWrapper'

class Course {
    constructor(title, description) {
    this.title = title;
    this.description = description;
    }
}

function Coursework() {
    return(
        <main id="Coursework">
            <Navbar/>

            <center>
                <h1>Coursework</h1>
                <p id="centerText">
                    Classes I've taken
                </p>
            </center>

            <p>

            <div id='coursesContainerBox'>
            <CourseAccordionWrapper trigger="Artificial Intelligence & Machine Learning" 
            description={[new Course('CS577 - Natural Language Processing', 
                          ["Studied inner workings of logisitic regression, max-margin classification, neural networks, and perceptron",
                           "Reviewed word vector embedings and how to create them",
                            "Studied several NLP datasets and tools such as Word2Vec, Penn TreeBank, PropBank, and WordNet",
                            "Completed large, novel final project on unsupervised learning on Amazon product reviews"]),

                          new Course('CS573 - Data Mining', 
                            ["Studied inner workings of supervised machine learning algorithms and techniques", 
                                "Learned about logisitic regression, max-margin classification, neural networks, and perceptron",
                                "Reviewed convex optimization theory and learning as optimization", 
                                "Completed large, novel final project mining consumer behavior from multiple datasets"]), 

                          new Course('CS571 - Artificial Intelligence', 
                            ["Studied techniques of classical AI", "Explored searching, constraint satisfaction, and predicate logic", 
                                "Learned about probabilistic reasoning, reasoning over time, and reinforcement learning", 
                                "Conducted novel research project about search in multi-adversarial environments"]),

                          new Course('CSC495 - Natural Language Processing', 
                            ["Built multiple Jupyter Notebook projects to explore NLP concepts", 
                                "Learned about embedding schemes, ML models best for NLP, and most common NLP python frameworks",
                                "Studied syntax of English, CFGs, dependency parsing, and named entity recognition"]),

                          new Course('CSC411 - Introduction to Artificial Intelligence', 
                            ["Studied foundations and applicaitons of artificial intelligence", 
                                "Learned about search trees, decision making, planning, reasoning, heuristics, games, and linear programming", 
                                "Explored ML algorithms using Prolog and Weka"]),
                        ]
            }/>

            <CourseAccordionWrapper trigger="Algorithms & Complexity Theory"
            description={[
                new Course('CS584 - Computability & Complexity Theory',
                    ["Reviewed Turing Machines, decidability, recognizability, and the Halting Problem", 
                    "Studied several time and space complexity classes and their complete problems",
                    "Conducted novel research into optimal online minimum spanning tree procedures",
                    "Discovered new algorithm and lower bound for online MST"]),
                
                new Course('CS593AE - Algorithmic Economics',
                    ["Studied mathematical formalisms of social computing and economics", 
                    "Reviewed fair division cake cutting, fairness metrics, and associated algorithms",
                    "Learned to design tamper resistent auction mechanisms",
                    "Studied Nash Equilibira, cryptocurrency/blockchain, and approximate optimal randomized algorithms"]),

                new Course('CS580 - Design & Analysis of Algorithms',
                    ["Studied greedy algorithms, dynamic programming, and ammortization", 
                    "Reviewed several advanced problems such as union find and linear time k-selection", 
                    "Studied network flow, all pairs shortest path, and minimum spanning tree problems and algorithms", 
                    "Studied linear programming, randomized algorithms, and approximation algorithms for NP-Complete problems"]),

                new Course('CSC333 - Automata, Grammars, and Computability',
                    ["Learned about the theory of computation", "Studied Finite Automata, Context Free Grammars, and Turing Machines",
                    "Explored Regular and Context Free Languages", "Studied Turing Decidibility and Recognizability", 
                    "Learned about P vs. NP vs. NP-Completeness and the P = NP question"]),

                new Course('CSC316 - Data Structures & Algorithms', 
                    ["Reviewed comparison and non-comparison based sorting algorithms","Studied linked and congitious memory data structures",
                    "Implemented Lists, Stacks, Queues, Positional Lists, Maps, Binary Trees, Balanceable Binary Trees, Heaps, and Graphs",
                    "Studied HashMaps/Tables and Hashing algorithms + compression techniques",
                    "Learned to classify algorithm runtimes using Big-Oh notation"])
            ]}/>

            <CourseAccordionWrapper trigger='Formal Methods & Verification' description={[
                new Course('CS565 - Programming Languages', 
                    ["Studied formalisms and techniques to construct programming languages", 
                    "Learned about operational semantics, lambda calculus, and Hoare Logic",
                    "Verified correctness properties of simple language using Coq theorem prover"]),

                new Course('CS560 - Reasoning About Programs', 
                    ["Studied several automated program verification techniques", 
                    "Reviewed state-of-the-art SAT solving for formal verification",
                    "Conducted Bounded Model Checking on programs written in non-trivial course language", 
                    "Learned several formal logics useful for automated verification"]
                )]}
            />

            <CourseAccordionWrapper trigger='Security' description={[
                new Course('CS555 - Cryptography', 
                    ["Studied techniques and mathematical principles of encryption", "Studied Shamir Secret Sharing, one time pad, and one way functions",
                    "Learned foundations of RSA encryption", "Studied efficient algorithms for GCD and primality testing"]),

                new Course('CSC415 - Software Security',
                    ["Studied the most common vulnerabilites found in software and mitigration strategies", 
                    "Performed injection attacks, cross site scripting, and cross site request forgery on dummy application",
                    "Conducted thorough review of an open source software application using OWASP Top 10 and CWE-SANS databases"])

            ]}/>

            <CourseAccordionWrapper trigger='CS Fundamentals' description={[
                new Course('CS536 - Data Communication & Computer Networks', 
                ["Studied the five layers of the internet", "Learned about popular networking protocols in all five layers", 
                "Reviewed flow control, inter/intranetwork routing, and policy"]),

                new Course('CSC236 - Computer Organization & Assembly Language',
                ["Learned about the history of computer architecture and origins of x86", "Built several projects in Intel 8086 Assembler",
                "Explored ARM architecture through pair programming"]),

                new Course('CSC379 - Ethics in Computing',
                ["Studied major ethical issues and dilemmas surrounding computer science", 
                "Wrote case studies and discussed with classmates to analyze ethical behavior for computer scientists"]),

                new Course('CSC401 - Data Communicatioon & Computer Networks',
                ["Studied the history of the internet and telephone networks", "Learned about the 5 layers of the internet", 
                "Studied several networking protocols including HTTP, DNS, DHCP, TCP/UDP, IP, ALOHA, CSMA and more", 
                "Wrote several application layer protocols for various use cases (RDT broadcast, P2P file sharing)"]),

                new Course("CSC326 - Software Engineering", 
                ["Studied software design process, security, maintainence, UI/UX, and HCI", "Learned about accessibility, testing, and requirements", 
                "Implemented new functionality onto course legacy software project, iTrust2", 
                "Wrote thorough design documents, system test plans, and user guide"]),

                new Course("CSC246 - Operating Systems",
                ["Learned role and history of operating systems", "Wrote programs to experiement with processes and threads", 
                "Explored different CPU/Disk scheduling algorithms", "Studied synchronization problems and techniques for solving them",
                "Learned about mass storage, memory management, and virtualization"]),

                new Course("CSC230 - C and Software Tools", 
                ["Learned basics of C and C++ programming languages", "Memory management techniques and security",
                "Studied the C Standard Library and most common debugging/code coverage tools used when developing C programs"]),

                new Course("CSC226 - Discrete Mathematics", 
                ["Learned proofs, predicate calculus, and boolean algebra", "Reviewed counting, combinatorics, graph theory, and graph traversals",
                "Induction and Big-Oh, Big-Omega, and Big-Theta"]),

                new Course("CSC216 - Fundamentals of Software Engineering",
                ["Studied basic software engineering techniques", "Engaged in pair programming, used test driven development, and worked with version control", 
                "Built several large scale applications using Java",
                "Began learning about linked memory data structues & recursion"]),

                new Course("CSC116 - Introduction to Computing - Java", 
                ["Reviewed basics of Java programming language & OOP", "Performed system/unit testing on small applications"])
            ]} />
            </div>

            </p>

        </main>
    )
}

export default Coursework