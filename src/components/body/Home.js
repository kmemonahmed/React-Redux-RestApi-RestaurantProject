import React, {Component} from 'react';
import Loading from './loading'

class Home extends Component {
    render() {
        document.title="Emon Restaurant";
        return (
                <div className="row align-items-center justify-content-center" style={{backgroundImage:"url(/assets/images/3cake.jpg)",
                 width: '100vw',
                 height: '100vh',
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                 opacity: "0.5"
                 }}>
                        <h1 className="col font-weight-bold" style={{
                            backgroundColor: 'white',
                            color:'black',
                            maxWidth: 'fit-content'
                        }}>
                            Welcome to Emon Restaurant
                         </h1>

                </div>

        )
    }
}

export default Home