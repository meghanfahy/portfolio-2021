import React from 'react';
import cath from '../components/imgs/cath-reporting-tool.jpg';
import second from '../components/imgs/second-opinion.jpg';
import film from '../components/imgs/filmpages.jpg';
import playlist from '../components/imgs/playlist-makers.jpg';
import hats from '../components/imgs/better-hats.jpg';
import coffee from '../components/imgs/coffee-crawler.jpg';
import newsletters from '../components/imgs/boston-newsletters.jpg';




export const Work = () =>
            <div>
                <div className="container">
                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title">
                            Cath reporting tool
                        </h1>
                        <p className="short-description">
                            Cath reporting tool designs for Boston Children's Hospital
                        </p>
                        <p className="long-description">
                            A redesign of the Boston Children's Hospital cath reporting tool website
                            used by doctors to look up/fill out patient information.
                        </p>
                        <p className="view-project">
                            View cath reporting tool
                        </p>
                    </div>
                    <div className="images">
                        <img className="image" src={cath} alt="cath-reporting-img"></img>
                    </div>
                </div>

                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title">
                            Second Opinion
     </h1>
                        <p className="short-description">
                            Second Opinion designs for Boston Children's Hospital
     </p>
                        <p className="long-description">
                            A new design based off of the Second Opinion mobile application for web/tablet size
                            so patients can get a doctor's second opinion.
     </p>
                        <p className="view-project">
                            View second opinion
     </p>
                    </div>
                    <div className="images">
                        <img className="image" src={second} alt="second-opinion-img"></img>
                    </div>
                </div>

                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title-boston">
                            Boston.com Newsletters
     </h1>
                        <p className="short-description">
                            Newsletter landing page for Boston.com
     </p>
                        <p className="long-description">
                            A landing page for Boston.com where users can subscribe to a number of newsletters
                            Boston.com offers.
     </p>
                        <p className="view-project">
                        <span><a className="work-links" href ={'https://www.boston.com/newsletters'} target="_blank">View Boston.com newsletters</a></span> 
     </p>
                    </div>
                    <div className="images">
                        <img className="image-boston" src={newsletters} alt="boston-img"></img>
                    </div>
                </div>

                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title">
                            Filmpages
     </h1>
                        <p className="short-description">
                            React web application
     </p>
                        <p className="long-description">
                            A service that uses a remote database where users can look up what time movies
                            are playing at a movie theater they have selected.

     </p>
                        <p className="view-project">
                        <span><a className="work-links" href ={'https://cs4550-sp20-filmpages-final.herokuapp.com'} target="_blank" >View filmpages</a></span> 
     </p>
                    </div>
                    <div className="images">
                        <img className="image" src={film} alt="filmpages-img"></img>
                    </div>
                </div>

                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title">
                            Playlist Makers
                        </h1>
                        <p className="short-description">
                            Responsive prototype
                        </p>
                        <p className="long-description">
                            A website where users can get a personal playlist curated for them based off 
                            of their mood.
                        </p>
                        <p className="view-project">
                            View playlist makers
                        </p>
                    </div>
                    <div className="images">
                        <img className="image" src={playlist} alt="playlist-makers-img"></img>
                    </div>
                </div>

                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title">
                            Coffee Crawler
     </h1>
                        <p className="short-description">
                            Mobile app designs
     </p>
                        <p className="long-description">
                            A mobile app where coffee fans can look up their favorite coffee place and see how
                            crowded it is.
     </p>
                        <p className="view-project">
                            View coffee crawler
     </p>
                    </div>
                    <div className="images">
                        <img className="image" src={coffee} alt="coffee-crawler-img"></img>
                    </div>
                </div>

                <div className="project-overview">
                    <div className="text col-6">
                        <h1 className="title">
                            Better Hats
     </h1>
                        <p className="short-description">
                            Responsive designs
     </p>
                        <p className="long-description">
                            A website where users can buy hats and design their own custom hats.
     </p>
                        <p className="view-project">
                            View better hats
     </p>
                    </div>
                    <div className="images">
                        <img className="image" src={hats} alt="better-hats-img"></img>
                    </div>
                </div>

                

                
                </div>
            </div>

 