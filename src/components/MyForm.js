import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      fruit: 'orange',
      message: ''
    }

    this.fruits = [
      {
        'name': 'Apple',
        'value': 'apple'
      },
      {
        'name': 'Banana',
        'value': 'banana'
      },
      {
        'name': 'Orange',
        'value': 'orange'
      },
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, fruit, message } = this.state;
    return (
      <form>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <span>{name}</span>
        </div>
        <div>
          <label>
            Fruit:
            <select name="fruit" value={fruit} onChange={this.handleChange}>
                {
                   this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
                }
            </select>
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
          <span>{message}</span>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    );
  };
}

export default MyForm;