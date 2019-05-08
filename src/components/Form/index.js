import React, { Component } from 'react';

import Input from './Input';
import Checkbox from './Checkbox';
import Textarea from './Textarea';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };

    this.handleSumit = this.handleSumit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <Input label="Name" />
          <Input label="Email" />
          <Checkbox options={['Yes', 'No', 'Maybe']} />
          <Textarea label="Comment" />
          <button>Save</button>
        </form>
      </div>
    );
  }

  handleChange() {}

  handleSumit() {}
}

export default Form;
