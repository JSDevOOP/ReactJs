import React, { Component } from 'react';
import './resume.css';


class Resume extends Component {


    render() {
        return (
            <div className="Resume">

                <div id="cv" class="instaFade">
                    <div class="mainDetails">
                        <div id="headshot" class="quickFade"><div>
                            <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/24174565_500574920328041_4581880654909159705_n.jpg?_nc_cat=0&oh=75065f3e50888c0c900ff67e1fe3fa7d&oe=5B527986" width="100" height="150"></img>
                        </div>
                        </div>

                        <div id="name">
                            <h1 class="quickFade delayTwo">Pariwat Chaona</h1>
                            <h3 class="quickFade delayThree">Web Delveloper&Font-End.</h3>
                        </div>

                        <div id="contactDetails" class="quickFade delayFour">
                            <div>
                                <p><h3>Email:</h3><a href="mailto:pa.chaona@gmail.com" target="_blank">pa.chaona@gmail.com</a></p>
                                <p><h3>GitHub:</h3><a href="https://github.com/Pariwat11">https://github.com/Pariwat11</a></p>
                                <p><h3>Phone:</h3>084-4626-202</p>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div id="mainArea" class="quickFade delayFive">
                        <section>
                            <article>
                                <div class="sectionTitle">
                                    <h1>Personal Profile</h1>
                                </div>

                                <div class="sectionContent">
                                    <p>To use the professional knowledge to use in the work. Ensure efficient and effective operation of the company.</p>
                                </div>
                            </article>
                            <div class="clear"></div>
                        </section>


                        <section>
                            <div class="sectionTitle">
                                <h1>Work Experience</h1>
                            </div>

                            <div class="sectionContent">
                                <article>
                                    <h2>Job Title at Company</h2>
                                    <p class="subDetails">June 2017 - February 2018</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                </article>

                                <article>
                                    <h2>Administrative Officer at Boss Outsourcing Service Co., Ltd.</h2>
                                    <p class="subDetails">August 2014 - July 2015</p>
                                    <p>Key data and verify the accuracy of the documents to coordinate the document. Responsible for the work assigned by the Supervisor. And Acount Manager</p>
                                </article>

                                <article>
                                    <h2>Assistant manager at Thanapat Commercial Partnership Co., Ltd.</h2>
                                    <p class="subDetails">August 2004 - March 2006</p>
                                    <p>Responsibility About the product documentation, get the product key, order goods, take care of general responsibility. Assigned by the manager.</p>
                                </article>
                            </div>
                            <div class="clear"></div>
                        </section>


                        <section>
                            <div class="sectionTitle">
                                <h1>Key Skills</h1>
                            </div>

                            <div class="sectionContent">

                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>
                                <p class="subDetails">A Key Skill</p>

                            </div>
                            <div class="clear"></div>
                        </section>


                        <section>
                            <div class="sectionTitle">
                                <h1>Education</h1>
                            </div>

                            <div class="sectionContent">
                                <article>
                                    <h2>College/University</h2>
                                    <p class="subDetails">Qualification</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                </article>

                                <article>
                                    <h2>College/University</h2>
                                    <p class="subDetails">Qualification</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                </article>
                            </div>
                            <div class="clear"></div>
                        </section>

                    </div>
                </div>
            </div>

        );

    }
}

export default Resume;