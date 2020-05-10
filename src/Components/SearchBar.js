import React from 'react';
import  {Input}  from '@chakra-ui/core';



class SearchBar extends React.Component {
    // functon to check input change
    // uncontrolled
    // onInputChange(event) {
    //     console.log(event.target.value); }

    // controlled

    state = { term: '' };

    // arrow function for binding this
    onFormSubmit = event => {
        // prevent submition
        event.preventDefault()
        // send data to parent using prop
        this.props.onAppsubmit(this.state.term);
    };

    render() {
        return (
            <div  className="ui segment " style = {{ border : '0px' , backgroundColor : 'transparent', color : 'white'}}>
                <form onSubmit={this.onFormSubmit} >
                    <label htmlFor="text"> Search </label>
                    <Input id="text" type="text" mt = '0px'
                        placeholder  = "Search Here"
                        value={this.state.term}
                        mt="2px"
                        border="soild 1px gray "
                        height=" 20px" onChange={(e) => this.setState({ term: e.target.value })} />
                </form>




            </div>
        );
    }
}

export default SearchBar;