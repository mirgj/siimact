import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';
import Content from './Content';
import Quote from './Quote';
import Code from './Code';
import Paragraph from './Paragraph';
import Heading from './Heading';


class App extends Component {
  doSomething = (e) => {
    alert('click');
  };

  render() {
    return (
        <Content>
          <Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Quote>
          <Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Alert color='orange' close={this.doSomething}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Paragraph>This is a simple paragraph</Paragraph>
          <Paragraph>This is a simple paragraph with <Code text='some code' inline='true' /> inline</Paragraph>
          <Code text={`<Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Quote>
<Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
<Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
<Alert color='orange' close={this.doSomething}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>`} 
          />
          <Heading size='1'>Heading 1</Heading>
          <Heading size='2'>Heading 2</Heading>
          <Heading size='3'>Heading 3</Heading>
          <Heading size='4'>Heading 4</Heading>
          <Heading size='5'>Heading 5</Heading>
          <Heading size='6'>Heading 6</Heading>
        </Content>

    );
  }
}

export default App;
