import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';
import Spinner from './Spinner'



class App extends React.Component {

    state = { images: [], isload: true, isclicked: false };
    //  get data from children backward
    onSearchSubmit = async item => {
        this.setState({ isclicked: true, isload: true });
        // get req
        Unsplash.get("/search/photos", {
            params: { query: item, orientation: 'landscape', per_page: 20, page: 1 },
        }).then(res => this.setState({
            images: res.data.results,
            isload: false,
            isclicked: false
        })).catch(err => console.log(err));
    };

    render() {

        if (this.state.isclicked && this.state.isload) {
            return <Spinner style = {{backgroundColor : '#302F4D'}} />;

        }
        else return (

    <div style = {{backgroundColor : '#0D1317' , height:'100vh',
    overflow:'auto'}}>
        <div class="ui menu" style = {{backgroundColor : '#302F4D'}}>
            <div class="header item primary" style = {{color : 'white'}} >
                    Image Gallery
            </div>



            </div>
        <div className="ui container" style={{ marginTop: '30px', border: 'none' }}>
                {/* function call to get data from children */}
                <h1><SearchBar onAppsubmit={this.onSearchSubmit} /></h1>
                <ImageList images={this.state.images} />
        </div>
    </div>

        );

    }

}


export default App;