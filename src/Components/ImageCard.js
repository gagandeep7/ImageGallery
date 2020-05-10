import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
        super(props)

        this.state = { span  : 0    }

        this.ImageRef = React.createRef()
    }

    componentDidMount()
    {
        this.ImageRef.current.addEventListener('load' , this.SetSpan)
    }

    SetSpan = () => {
           const height =  this.ImageRef.current.clientHeight
           const span =  Math.ceil (  height / 10 ) // same as auto rows denominator
            this.setState({span}) // destruct span
        }


render() {
    const {description, urls } = this.props.image;
    return (
        <div style = {{gridRowEnd : `span ${this.state.span}` }}>
            <img ref = {this.ImageRef} alt={description} src={urls.small}
            />
        </div>
    );
}
}


export default ImageCard;