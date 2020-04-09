import React from "react";
import "./Portfolio.css"

function Portfolio() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-1 col-md-2">

                    </div>
                    <div className="col-10 col-md-8 portfolio">

                        <div className="row">
                            <div className="col-12">
                                <h2 id="port">
                                    Portfolio
                                </h2>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-md-6 ">

                                <div className="card">
                                    <a href="{https://kingkira23.github.io/homework3/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/682780532840595476/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Password Generator</h4>
                                        <p className="card-text">My first attempt at makeing a password generator with what I know</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="card">
                                    <a href="https://kingkira23.github.io/homework4/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/682780918615900273/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Javascript Quiz</h4>
                                        <p className="card-text">My first attempt at makeing a quiz using javascript. quiz is currentlly incomplete.
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="row content">

                            <div className="col-md-6">

                                <div className="card">
                                    <a href="https://kingkira23.github.io/homework5/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/682781427254689842/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Work day scheduler</h4>
                                        <p className="card-text">My first attempt at a work day scheduler. it is currentlly incomplete and is still
                                        being worked on.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="card">
                                    <a href="https://kingkira23.github.io/homework6/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/682781877706162258/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Weather Dashboard</h4>
                                        <p className="card-text">My first attempt at making a weather dashboard. currentlly incomplete and is still
                                        being worked on.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="row content">

                            <div className="col-md-6">

                                <div className="card">
                                    <a href="https://kingkira23.github.io/project-1/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/692916154305347624/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Cocktails</h4>
                                        <p className="card-text">This was the frist Project</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">

                                <div className="card">
                                    <a href="https://mighty-journey-05291.herokuapp.com/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/692918364129198150/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Art Bud</h4>
                                        <p className="card-text">This was the Second Project</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row content">

                            <div className="col-md-6">

                                <div className="card" >
                                    <a href="https://arcane-reaches-20802.herokuapp.com/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/692919122358435841/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Fitness Tracker</h4>
                                        <p className="card-text">app to track your excercises still needs work</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="card">
                                    <a href="https://quiet-crag-08812.herokuapp.com/" target="_blank"><img
                                        src="https://cdn.discordapp.com/attachments/676185528483184661/692919948359499826/unknown.png"
                                        className="card-img-top" alt="..." /></a>
                                    <div className="card-body bg-dark">
                                        <h4>Note Taker</h4>
                                        <p className="card-text">For keeping track of notes</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-1 col-md-2">

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
