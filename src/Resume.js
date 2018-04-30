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
                            <h3 class="quickFade delayThree">Web Delveloper&Front-End Programmer&IT Administrator</h3>
                        </div>

                        <div id="contactDetails" class="quickFade delayFour">
                            <div><br></br>
                                <p><h3> Address:</h3> 738 Phatthanakan Rd.Suanluang,Suanluang,Bangkok 10250
                            <h3>Email:</h3><a href="mailto:pa.chaona@gmail.com" target="_blank">pa.chaona@gmail.com</a>
                                    <h3>GitHub:</h3><a href="https://github.com/Pariwat11">https://github.com/Pariwat11</a>
                                    <h3>Phone:</h3>084-4626-202
                                </p>

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
                                    <p>Date of birth:11th June 1991,Nationality:Thai-Race: Thai-Religion:Buddhism,Marital status:Single</p>
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
                                    <h2>IT Administrator at It Gadget Co.,Ltd.</h2>
                                    <p class="subDetails">June 2017 - February 2018</p>
                                    <p>Repairing IT equipment and replacing parts.Accurately following diagrams and written instructions to repair a fault or set up a system.Maintaining records of software licenses.</p>
                                </article>

                                <article>
                                    <h2>Administrative Officer at Boss Outsourcing Service Co., Ltd.</h2>
                                    <p class="subDetails">August 2014 - July 2015</p>
                                    <p>Key data and verify the accuracy of the documents to coordinate the document. Responsible for the work assigned by the Supervisor. And Account Manager.</p>
                                </article>

                                <article>
                                    <h2>Assistant Manager at Thanapat Commercial Partnership Co., Ltd.</h2>
                                    <p class="subDetails">August 2009 - March 2014</p>
                                    <p>Responsibility About the product documentation, get the product key, order goods, take care of general responsibility. Assigned by the Manager.</p>
                                </article>
                            </div>
                            <div class="clear"></div>
                        </section>


                        <section>
                            <div class="sectionTitle">
                                <h1>Key Skills</h1>
                            </div>

                            <div class="sectionContent">

                                <p class="subDetails"> IT maintenance</p>
                                <p class="subDetails"> Troubleshooting</p>
                                <p class="subDetails"> Hardware faults</p>
                                <p class="subDetails"> IT infrastructure</p>
                                <p class="subDetails"> Programming:Html,Css,Javascript,Php,Mysql,Java,C#,React,Bootstrap</p>
                                <p class="subDetails"> Network:Lan,Router,WindowsServer,ConfigIPaddress</p>
                                <p class="subDetails"> Typing: Thai 40 words / minute English 38 words / minute</p>
                                <p class="subDetails"> Communication:Good command of spoken and written English.</p>
                                <p class="subDetails"> Computer Programs:MicrosoftOffice,Adobe</p>
                            </div>
                            <div class="clear"></div>
                        </section>


                        <section>
                            <div class="sectionTitle">
                                <h1>Education</h1>
                            </div>

                            <div class="sectionContent">
                                <article>
                                    <h2>Rajamangala University of Technology Krungthep</h2>
                                    <p class="subDetails">Qualification</p>
                                    <p>Bachelor of Business Administration (Information Systems)
GPA:2.84</p>
                                </article>

                                <article>
                                    <h2>Bangpakong Industrial and Community Education College</h2>
                                    <p class="subDetails">Qualification</p>
                                    <p>Diploma of Business Administration, Business Computer Office Technology
GPA:3.45</p>
                                </article>
                            </div>
                            <div class="clear"></div>
                        </section>

                        <section>
                            <div class="sectionTitle">
                                <h1>Reference</h1>
                            </div>

                            <div class="sectionContent">
                                <article>
                                    <h2>Mr.Warut Yimyoo</h2>
                                    <p class="subDetails">Customer Supports</p>
                                    <p>Planforfit Co., Ltd.
                                       Phone:085-2403-885,Email:nutrecon@gmail.com
                                    </p>

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