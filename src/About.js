import React, { Component } from 'react';
import { Carousel } from 'antd';

class About extends Component {
    render() {
        return (
            <div className="About">

                <p >
                    <h1 className="Colorf"> MY NAME IS : {this.props.match.params.name.toUpperCase()}</h1>
                </p>
                <Carousel autoplay>
                    <div><img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/26239270_519981201720746_8290204435811322832_n.jpg?_nc_cat=0&oh=4b8b88a396f10186a86db615d209637c&oe=5B960DC4" width="100%" height="100%"></img></div>
                    <div><img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/31498741_569121760140023_5090592790534946816_n.jpg?_nc_cat=0&oh=84ca08a9de3a666d49d415b038b14e86&oe=5B93988F" width="100%" height="100%"></img></div>
                    <div><img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/31693237_569121823473350_9193295733795586048_n.jpg?_nc_cat=0&oh=1ec0c29d9061e6091b97ac57968ea5a9&oe=5B66CB4D" width="100%" height="100%"></img></div>
                    <div><img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/31681789_569121736806692_6114042329910214656_n.jpg?_nc_cat=0&oh=9fcda4931810b7fd74b33ef146ed831f&oe=5B95749E" width="100%" height="100%"></img></div>


                </Carousel>
                , mountNode);

            </div>
        );
    }
}

export default About;