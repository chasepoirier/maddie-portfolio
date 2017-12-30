import React, { Component } from 'react';
import $ from 'jquery';
import Footer from "./Footer";
import '../css/resume.css';
import PDF from '../resume_madisonyocum.pdf'

import { TweenMax, Elastic } from 'gsap';

import { setToBlack, hideArrow } from '../js/helpers';


class Resume extends Component {    

	componentDidMount() {

        hideArrow();
        setToBlack();
        TweenMax.fromTo($('.resume.main-content'), .7, 
                { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1),},
                { transform: 'translateY(0px)', opacity: 1, delay:.4,ease: Elastic.easeOut.config(0.25, 1),});
    }   

  render() {
    return (
        <div className="resume main-content">
            <div className="resume-content-container">
                <div className="main-container">
                    <div className="objective"><div className="job">Interaction Designer & Entrepreneur</div>Focusing on product design and entrepreneurship. Currently, I am searching for an internship for the upcoming summer of 2018 and any other design, product and startup opportunities.
                </div>
                    <div className="right">
                    <a className="button" target="blank" download="resume_madisonyocum.pdf" href={PDF}>Download Resume</a>
                    <a className="view" href="https://www.linkedin.com/in/madison-yocum/" target="blank">Or view my LinkedIn Page</a>
                    </div>
                </div>
                <div className="main-line"></div>
                <div className="work-title">Work Experience</div>
                <div className="container">
                    <div className="work">
                        <a className="company" target="blank" href="https://www.flickr.com/">Flickr / YAHOO</a>
                        <div className="info">Design Intern   |   San Francisco, CA   |   Summer 2017</div>
                        <div className="description">Worked in collaboration with the design and development teams on various Flickr products. Responsible for the redesign of Flickr's Chrome Tab and iMessage Extensions by creating product concepts and research, user flows, wireframes, and visual designs for features of the experiences.</div>
                    </div>
                    <div className="work">
                        <a className="company" target="blank" href="https://www.readme.io/">ReadMe</a>
                        <div className="info">Product Designer   |   San Francisco, CA   |   Winter 2018</div>
                        <div className="description">Scheduled to work in March of 2018 as a product and interaction designer at ReadMe, a company based in downtown San Francisco. Will be working with the developers, product managers, and designers to further innovate on the products of ReadMe. Also, learning the strategies of running a functional business and product creation processes.</div>
                    </div>
                    <div className="work">
                        <a className="company" target="blank" href="http://rippleplatform.io/">Ripple</a>
                        <div className="info">Co-Founder & CDO   |   Nov. 2016 - Present</div>
                        <div className="description">Ripple is an online platform and community where freelancers can obtain a consistent income by collaborating with other freelancers and creating virtual agencies. As a co-founder, I work to continuously refine our business concept and model, manage and lead other team members, and pitch our business to potential investors, and conduct user research. Also, I am responsible for creating the overall product design and development. I ensure problems have effective solutions that satisfy users needs, and design the user interface and experience while creating an overall brand.</div>
                    </div>
                    <div className="work">
                        <a className="company" target="blank" href="http://www.udio-ventures.com/index.html">Udio Ventures</a>
                        <div className="info">Co-Founer & Product Lead   |   Oct. 2017 - Present </div>
                        <div className="description">Currently an in progress startup idea and company, Udio, a product design and venture production studio that focuses on innovative and new startups furthering their product, and creates effective solutions based on user and product advancement.</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container">
                    <div className="skills">
                        <div className="title">Skills</div>
                        <div className="words">
                            <div className="column">
                                <div className="word">UX/UI Design</div>
                                <div className="word">Visual Design</div>
                                <div className="word">Illustration</div>
                                <div className="word">Motion Graphics</div>
                            </div>
                            <div className="column">
                                <div className="word">Prototyping / Iteration</div>
                                <div className="word">Wireframing</div>
                                <div className="word">Entrepreneurship</div>
                                <div className="word">Project Management</div>
                            </div>
                        </div>
                    </div>
                    <div className="programs">
                        <div className="title">Programs & Languages</div>
                        <div className="words">
                            <div className="word">
                                <div className="word">Adobe Suite (PS, AI, AE, XD)</div>
                                <div className="word">Sketch</div>
                                <div className="word">Cinema 4D</div>
                                <div className="word">HTML / CSS </div>
                                <div className="word">Javascript / Brackets</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>                
                <div className="container">
                    <div className="awards">
                        <div className="title">Awards & Leadership</div>
                        <div className="words">
                            <div className="word">Adobe Design Awards - <strong>Semifinalist 2x</strong></div>
                            <div className="word">RIT College Activities Board  - <strong>Creative Director</strong></div>
                            <div className="word">Eureka! Design Blitz  - <strong>Student Designer</strong></div>
                            <div className="word">RIT IGME Department - <strong>Teaching Assistant</strong></div>
                                <div className="word">New Media Club - <strong>Mentor</strong></div>
                        </div>
                    </div>
                    <div className="education">
                        <div className="title">Education</div>
                        <div className="words">
                            <div className="word"><strong>Rochester Institute of Technology</strong></div>
                            <div className="word">BFA New Media Design / 3.5 GPA / May 2019</div>
                            <div className="word">Minor in Marketing</div>
                            <div className="word">Minor in Advertising & Public Relations</div>
                        </div>
                    </div>
                </div>
                {/*<div className="line"></div>*/}
                </div>
            <Footer />
        </div>
    );
  }
}

export default Resume;

