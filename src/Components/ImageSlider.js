import React, { Component } from "react";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_7327.jpg",
        "https://images.dog.ceo/breeds/poodle-standard/n02113799_2325.jpg",
        "https://images.dog.ceo/breeds/hound-blood/n02088466_6834.jpg",
        "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_6129.jpg",
        "https://images.dog.ceo/breeds/poodle-standard/n02113799_5975.jpg",
      ],
      index: 0,
    };
  }

  handleNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  handlePrevious = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    const image = (
      <div>
        <img
          src={this.state.images[this.state.index]}
          alt="cocker-spaniel"
          style={{ height: 300, width: 300 }}
        />
      </div>
    );
    return (
      <div>
        {image}
        <button onClick={this.handleNext}>Next</button>
        <button onClick={this.handlePrevious}>Previous</button>
      </div>
    );
  }
}

export default ImageSlider;
