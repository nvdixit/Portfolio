import React from 'react'
import Navbar from './NavigationBar/Navbar'
import Collapsible from 'react-collapsible';
import Course from './Course/Course'

function Coursework() {
    return(
        <main id='Coursework'>
            <Navbar/>

            <center>
                <h1>Coursework</h1>
                <p id='centerText'>
                    Classes I've taken
                </p>
            </center>

            <p>

            <div id='topicsContainer'>

                <Collapsible trigger='Artificial Intelligence & Machine Learning'>
                    <div id='topicInside'>
                        <div id='left'>
                            <Course number='CS577' name='Natural Language Processing' 
                            description={['Studied inner workings of logisitic regression, max-margin classification, neural networks, and perceptron',
                                        'Reviewed word vector embedings and how to create them',
                                        'Studied several NLP datasets and tools such as Word2Vec, Penn TreeBank, PropBank, and WordNet',
                                        'Completed large, novel final project on unsupervised learning on Amazon product reviews']}/>

                            <Course number='CS571' name='Artificial Intelligence'
                            description={['Studied techniques of classical AI', 'Explored searching, constraint satisfaction, and predicate logic', 
                                        'Learned about probabilistic reasoning, reasoning over time, and reinforcement learning', 
                                        'Conducted novel research project about search in multi-adversarial environments']}/>

                            <Course number='CSC495' name='Natural Language Processing' 
                            description={['Built multiple Jupyter Notebook projects to explore NLP concepts', 
                                        'Learned about embedding schemes, ML models best for NLP, and most common NLP python frameworks',
                                        'Studied syntax of English, CFGs, dependency parsing, and named entity recognition']}/>
                        </div>

                        <div id='right'>
                            <Course number='CS573' name='Data Mining' 
                            description={['Studied inner workings of supervised machine learning algorithms and techniques', 
                                        'Learned about logisitic regression, max-margin classification, neural networks, and perceptron',
                                        'Reviewed convex optimization theory and learning as optimization', 
                                        'Completed large, novel final project mining consumer behavior from multiple datasets']}/>

                            <Course number='CSC411' name='Introduction to Artificial Intelligence' 
                            description={['Studied foundations and applicaitons of artificial intelligence', 
                                        'Learned about search trees, decision making, planning, reasoning, heuristics, games, and linear programming', 
                                        'Explored ML algorithms using Prolog and Weka']}/>
                        </div>
                    </div>
                </Collapsible>

                <Collapsible trigger='Algorithms & Complexity Theory'>
                    <div id='topicInside'>
                        <div id='left'>
                            <Course number='CS584' name='Computability & Complexity Theory'
                            description={['Reviewed Turing Machines, decidability, recognizability, and the Halting Problem', 
                                        'Studied several time and space complexity classes and their complete problems',
                                        'Conducted novel research into optimal online minimum spanning tree procedures',
                                        'Discovered new algorithm and lower bound for online MST']}/>

                            <Course number='CS580' name='Design & Analysis of Algorithms'
                            description={['Studied greedy algorithms, dynamic programming, and ammortization', 
                                        'Reviewed several advanced problems such as union find and linear time k-selection', 
                                        'Studied network flow, all pairs shortest path, and minimum spanning tree problems and algorithms', 
                                        'Studied linear programming, randomized algorithms, and approximation algorithms for NP-Complete problems']}/>

                            <Course number='CSC316' name='Data Structures & Algorithms'
                            description={['Reviewed comparison and non-comparison based sorting algorithms','Studied linked and congitious memory data structures',
                                        'Implemented Lists, Stacks, Queues, Positional Lists, Maps, Binary Trees, Balanceable Binary Trees, Heaps, and Graphs',
                                        'Studied HashMaps/Tables and Hashing algorithms + compression techniques',
                                        'Learned to classify algorithm runtimes using Big-Oh notation']}/>
                        </div>

                        <div id='right'>
                            <Course number='CS593AE' name='Algorithmic Economics'
                            description={['Studied mathematical formalisms of social computing and economics', 
                                        'Reviewed fair division cake cutting, fairness metrics, and associated algorithms',
                                        'Learned to design tamper resistent auction mechanisms',
                                        'Studied Nash Equilibira, cryptocurrency/blockchain, and approximate optimal randomized algorithms']}/>

                            <Course number='CSC333' name='Automata, Grammars, and Computability'
                            description={['Learned about the theory of computation', 'Studied Finite Automata, Context Free Grammars, and Turing Machines',
                                        'Explored Regular and Context Free Languages', 'Studied Turing Decidibility and Recognizability', 
                                        'Learned about P vs. NP vs. NP-Completeness and the P = NP question']}/>
                        </div>
                    </div>
                </Collapsible>

                <Collapsible trigger='Formal Methods & Verification'>
                    <div id='topicInside'>
                        <div id='left'>
                            <Course number='CS565' name='Programming Languages'
                            description={['Studied formalisms and techniques to construct programming languages', 
                                        'Learned about operational semantics, lambda calculus, and Hoare Logic',
                                        'Verified correctness properties of simple language using Coq theorem prover']}/>
                        </div>

                        <div id='right'>
                            <Course number='CS560' name='Reasoning About Programs'
                            description={['Studied several automated program verification techniques', 
                                        'Reviewed state-of-the-art SAT solving for formal verification',
                                        'Conducted Bounded Model Checking on programs written in non-trivial course language', 
                                        'Learned several formal logics useful for automated verification']}/>
                        </div>
                    </div>
                </Collapsible>

                <Collapsible trigger='Security'>
                    <div id='topicInside'>
                        <div id='left'>
                            <Course number='CS555' name='Cryptography'
                            description={['Studied techniques and mathematical principles of encryption', 
                                        'Studied Shamir Secret Sharing, one time pad, and one way functions',
                                        'Learned foundations of RSA encryption', 'Studied efficient algorithms for GCD and primality testing']}/>
                        </div>

                        <div id='right'>
                            <Course number='CSC415' name='Software Security'
                            description={['Studied the most common vulnerabilites found in software and mitigration strategies', 
                                        'Performed injection attacks, cross site scripting, and cross site request forgery on dummy application',
                                        'Conducted thorough review of an open source software application using OWASP Top 10 and CWE-SANS databases']}/>
                        </div>
                    </div>
                </Collapsible>

                <Collapsible trigger='CS Fundamentals'>
                    <div id='topicInside'>
                        <div id='left'>
                            <Course number='CS536' name='Data Communication & Computer Networks'
                            description={['Studied the five layers of the internet', 'Learned about popular networking protocols in all five layers', 
                            'Reviewed flow control, inter/intranetwork routing, and policy']}/>

                            <Course number='CSC236' name='Computer Organization & Assembly Language'
                            description={['Learned about the history of computer architecture and origins of x86', 'Built several projects in Intel 8086 Assembler',
                            'Explored ARM architecture through pair programming']}/>

                            <Course number='CSC379' name='Ethics in Computing'
                            description={['Studied major ethical issues and dilemmas surrounding computer science', 
                            'Wrote case studies and discussed with classmates to analyze ethical behavior for computer scientists']}/>

                            <Course number='CSC401' name='Data Communication & Computer Networks'
                            description={['Studied the history of the internet and telephone networks', 'Learned about the 5 layers of the internet', 
                            'Studied several networking protocols including HTTP, DNS, DHCP, TCP/UDP, IP, ALOHA, CSMA and more', 
                            'Wrote several application layer protocols for various use cases (RDT broadcast, P2P file sharing)']}/>

                            <Course number='CSC326' name='Software Engineering'
                            description={['Studied software design process, security, maintainence, UI/UX, and HCI', 'Learned about accessibility, testing, and requirements', 
                            'Implemented new functionality onto course legacy software project, iTrust2', 
                            'Wrote thorough design documents, system test plans, and user guide']}/>
                        </div>

                        <div id='right'>
                            <Course number='CSC246' name='Operating Systems'
                            description={['Learned role and history of operating systems', 'Wrote programs to experiement with processes and threads', 
                            'Explored different CPU/Disk scheduling algorithms', 'Studied synchronization problems and techniques for solving them',
                            'Learned about mass storage, memory management, and virtualization']}/>

                            <Course number='CSC230' name='C and Software Tools'
                            description={['Learned basics of C and C++ programming languages', 'Memory management techniques and security',
                            'Studied the C Standard Library and most common debugging/code coverage tools used when developing C programs']}/>

                            <Course number='CSC226' name='Discrete Mathematics' 
                            description={['Learned proofs, predicate calculus, and boolean algebra', 'Reviewed counting, combinatorics, graph theory, and graph traversals',
                            'Induction and Big-Oh, Big-Omega, and Big-Theta']}/>

                            <Course number='CSC216' name='Fundamentals of Software Engineering'
                            description={['Studied basic software engineering techniques', 'Engaged in pair programming, used test driven development, and worked with version control', 
                            'Built several large scale applications using Java',
                            'Began learning about linked memory data structues & recursion']}/>

                            <Course number='CSC116' name='Introduction to Computing - Java'
                            description={['Reviewed basics of Java programming language & OOP', 'Performed system/unit testing on small applications']}/>
                        </div>
                    </div>
                </Collapsible>

            </div>
            </p>

        </main>
    )
}

export default Coursework