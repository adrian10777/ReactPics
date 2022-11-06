import React from 'react';
import './ImageList.css'

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
       this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10)

        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard

/**
 *React refs (substitute for JS document.queryselector)
 gives access to a single DOM element rendered by a component

 we define constructor(), call function inside constructor to create ref, and assign it as instance
 variable on our class, we can assign references to state of component but not required
 to do so, because these refs dont change over time and we are not calling setState with ref
 we only put data in state when expected to change over time
 
 once ref is assigned to instance variables 
 on our class, we then go down to render method 
 and pass that ref to some particular jsx 
 element as a prop


 */