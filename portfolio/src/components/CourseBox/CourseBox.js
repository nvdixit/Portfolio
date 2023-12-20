import React from 'react'
import { useRef } from 'react';
import useScrollOnDrag from 'react-scroll-ondrag';
import Course from '../Course/Course'
import "./CourseBox.css"

const CourseBox = (props) => {
    const ref = useRef();
    const { events } = useScrollOnDrag(ref);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div>
            <div id="courseBox" {...events} ref={ref}>
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
                                "Studied several networking protocols including HTTP, DNS, DHCP, TCP/UDP, IP, ALOHA, CSMA and more", 
                                "Wrote several application layer protocols for various use cases (RDT broadcast, P2P file sharing)"]}/>

                <Course courseDesignation="CSC411" courseName="Introduction to Artificial Intelligence"
                description={["Studied foundations and applicaitons of artificial intelligence", 
                                "Learned about search trees, decision making, planning, reasoning, heuristics, games, and linear programming", 
                                "Explored ML algorithms using Prolog and Weka"]}/>
                        
                <Course courseDesignation="CSC379" courseName="Ethics in Computing"
                description={["Studied major ethical issues and dilemmas surrounding computer science", 
                                "Wrote case studies and discussed with classmates to analyze ethical behavior for computer scientists"]}/>    
                
                <Course courseDesignation="CSC415" courseName="Software Security"
                description={["Studied the most common vulnerabilites found in software and mitigration strategies", 
                                "Performed injection attacks, cross site scripting, and cross site request forgery on dummy application",
                                "Conducted thorough review of an open source software application using OWASP Top 10 and CWE-SANS databases"]}/> 

                <Course courseDesignation="CSC495" courseName="Natural Language Processing"
                description={["Built multiple Jupyter Notebook projects to explore NLP concepts", 
                                "Learned about embedding schemes, ML models best for NLP, and most common NLP python frameworks",
                                "Studied syntax of English, CFGs, dependency parsing, and named entity recognition"]}/>    
                
                <Course courseDesignation="CSC236" courseName="Computer Organization and Assembly Language"
                description={["Learned about the history of computer architecture and origins of x86", "Built several projects in Intel 8086 Assembler",
                                "Explored ARM architecture through pair programming"]}/> 
                
                <Course courseDesignation="CS 580" courseName="Design and Analysis of Algorithms"
                description={["Studied greedy algorithms, dynamic programming, and ammortization", 
                                "Reviewed several advanced problems such as union find and linear time k-selection", 
                                "Studied network flow, all pairs shortest path, and minimum spanning tree problems and algorithms", 
                                "Studied linear programming, randomized algorithms, and approximation algorithms for NP-Complete problems"]}/> 
                
                <Course courseDesignation="CS 555" courseName="Cryptography"
                description={["Studied techniques and mathematical principles of encryption", "Studied Shamir Secret Sharing, one time pad, and one way functions",
                                "Learned foundations of RSA encryption", "Studied efficient algorithms for GCD and primality testing"]}/> 
                
                <Course courseDesignation="CS 571" courseName="Artificial Intelligence"
                description={["Studied techniques of classical AI", "Explored searching, constraint satisfaction, and predicate logic", 
                                "Learned about probabilistic reasoning, reasoning over time, and reinforcement learning", 
                                "Conducted novel research project about search in multi-adversarial environments"]}/> 
            </div>

            <br></br>

            <div>
                <center>
                    <button id="leftButton" onClick={() => scroll(-500)}><center>←</center></button>
                    &nbsp;&nbsp;
                    <button id="rightButton" onClick={() => scroll(500)}><center>→</center></button>
                </center>
            </div>
        </div>
    )
}

export default CourseBox