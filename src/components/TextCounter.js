import React, { Component } from 'react';

class TextCounter extends Component {
  static defaultProps = {
    limit: 15
  };

  constructor(props) {
    super(props);
    
    this.state = {
      totalChars: 0,
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    const inputElement = event.target;
    const text = inputElement.value;

    if(text.length <= this.props.limit) {
      this.setState({
        totalChars: text.length,
        text
      });
    }
  };

  render() {
    const { totalChars, text } = this.state;
    const { limit } = this.props;
    return (
      <>
        <h1>Meu Contador</h1>
        <textarea onChange={this.handleChange} value={text} />
        <div>
          <strong>Total:</strong> { totalChars } / { limit }
        </div>
      </>
    );
  };
}

export default TextCounter;