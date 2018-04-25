import React, { Component } from 'react';
import { Carousel } from 'antd';

class About extends Component {
    render() {
        return (
            <div className="About">

                <p >
                    <h1 className="Colorf"> MY NAME IS : {this.props.match.params.name.toUpperCase()}</h1>

                    <div>
                        <p>
                            <iframe src="https://drive.google.com/file/d/1bOmR03eimRjD7FqYR9kzt60QGbFWh9pl/preview" align="lelft" width="600" height="480"></iframe>
                            <iframe src="https://drive.google.com/file/d/1wAhIa6UOI28KANYHOdVvWXSypGGluXND/preview" align="right" width="640" height="480"></iframe>
                        </p>
                    </div>

                    <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/28276840_538805583171641_6975689705590219477_n.jpg?_nc_cat=0&oh=a065cbfc1d370325d563d1293cec6c47&oe=5B5088F8" width="100%" height="100%"></img>

                </p>
                <Carousel autoplay>
                    <div><img src="http://static.asiawebdirect.com/m/.imaging/1356x904/website/bangkok/portals/bangkok-com/homepage/magazine/5-amazing-views-restaurants/allParagraphs/awdPortTop10Set/top10Set/01/image.jpg" width="100%" height="100%"></img></div>
                    <div><img src="http://gluedata.com/wp-content/uploads/2018/01/Support-banner.png" width="100%" height="100%"></img></div>
                    <div><img src="http://gluedata.com/wp-content/uploads/2018/01/Support-banner.png" width="100%" height="100%"></img></div>
                    <div><img src="http://gluedata.com/wp-content/uploads/2018/01/Support-banner.png" width="100%" height="100%"></img></div>


                </Carousel>
                , mountNode);

            </div>
        );
    }
}

export default About;