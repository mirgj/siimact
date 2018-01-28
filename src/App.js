import React from 'react';
import Alert from './Alert';
import Content from './Content';
import Quote from './Quote';
import Code from './Code';
import Paragraph from './Paragraph';
import Heading from './Heading';
import Link from './Link';
import Small from './Small';
import Tag from './Tag';
import Button from './Button';
import Spinner from './Spinner';
import Tip from './Tip';
import Table from './Table';
import TRow from './TRow';
import TCell from './TCell';


class App extends React.Component {
  doSomething = (e) => {
    alert('click');
  };

  render() {
    return (

      <Content>
        <Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Quote>
        <Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
        <Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
        <Alert color='magenta'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
        <Alert color='orange' onCloseClick={this.doSomething}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
        <Paragraph>This is a simple paragraph</Paragraph>
        <Paragraph>This is a simple paragraph with <Code text='some code' inline={true} /> inline</Paragraph>
        <Code text={`<Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Quote>
<Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
<Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
<Alert color='orange' close={this.doSomething}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>`} 
          />
        <Heading size={1}>Heading 1</Heading>
        <Heading size={2}>Heading 2</Heading>
        <Heading size={3}>Heading 3</Heading>
        <Heading size={4}>Heading 4</Heading>
        <Heading size={5}>Heading 5</Heading>
        <Heading size={6}>Heading 6</Heading>
        <Heading size={10}>Heading 10</Heading>
        <Paragraph>This is <Link href='https://google.com' target='_blank'>a link</Link> with a <Small>small text</Small></Paragraph>
        <Content>
          <Tag>Default</Tag>
          <Tag color='orange'>Orange</Tag>
          <Tag color='blue' htmlTag='div'>Blue</Tag>
          <Tag color='blue' htmlTag='p'>Blue</Tag>
          <Tag color='magenta' htmlTag='p'>Magenta</Tag>
        </Content>
        <Button>This is a button</Button>
        <Button color='green'>This is a button green</Button>
        <Button color='magenta'>This is a button magenta</Button>
        <Button color='red' disabled>This button is disabled</Button>
        <Button color='purple' onClick={this.doSomething}>This button have an action disabled</Button>
        <Content>
          <Spinner></Spinner>
          <Spinner color='red'></Spinner>
          <Spinner color='red' size='small'></Spinner>
          <Spinner color='red' size='large'></Spinner>
          <Spinner color='magenta' size='huge'></Spinner>
        </Content>
        <Content>
          <Tip>Plain tip</Tip>
          <Tip color='green'>Plain tip with color</Tip>
          <Tip color='red' type='heart'>A lovely message</Tip>
          <Tip color='orange' type='exclamation'>You should pay attention</Tip>
          <Tip color='blue' type='question'>What did you said</Tip>
          <Table 
            header={[
                <TCell key={1}>Header 1</TCell>,
                <TCell key={2}>Header 2</TCell>,
                <TCell key={3}>Header 3</TCell>]
            }
            rows={
              [<TRow key={1}>
                <TCell>Cell 1</TCell>
                <TCell>Cell 2</TCell>
                <TCell>Cell 3</TCell>
              </TRow>,
              <TRow key={2}>
                <TCell>Cell 4</TCell>
                <TCell>Cell 5</TCell>
                <TCell>Cell 6</TCell>
              </TRow>]
            }
          />
          <Table striped={true}
            header={[
                <TCell key={1}>Header 1</TCell>,
                <TCell key={2}>Header 2</TCell>,
                <TCell key={3}>Header 3</TCell>]
            }
            rows={
              [<TRow key={1}>
                <TCell>Cell 1</TCell>
                <TCell>Cell 2</TCell>
                <TCell>Cell 3</TCell>
              </TRow>,
              <TRow key={2}>
                <TCell>Cell 4</TCell>
                <TCell>Cell 5</TCell>
                <TCell>Cell 6</TCell>
              </TRow>,
              <TRow key={3}>
                <TCell>Cell 7</TCell>
                <TCell>Cell 8</TCell>
                <TCell>Cell 9</TCell>
              </TRow>]
            }
          />
          <Table striped={true} border={true}
            header={[
                <TCell key={1}>Header 1</TCell>,
                <TCell key={2}>Header 2</TCell>,
                <TCell key={3}>Header 3</TCell>]
            }
            rows={
              [<TRow key={1}>
                <TCell>Cell 1</TCell>
                <TCell>Cell 2</TCell>
                <TCell>Cell 3</TCell>
              </TRow>,
              <TRow key={2}>
                <TCell>Cell 4</TCell>
                <TCell>Cell 5</TCell>
                <TCell>Cell 6</TCell>
              </TRow>,
              <TRow key={3}>
                <TCell>Cell 7</TCell>
                <TCell>Cell 8</TCell>
                <TCell>Cell 9</TCell>
              </TRow>]
            }
          />
          <Table striped={true} border={true} hover={true}
            header={[
                <TCell key={1}>Header 1</TCell>,
                <TCell key={2}>Header 2</TCell>,
                <TCell key={3}>Header 3</TCell>]
            }
            rows={
              [<TRow key={1}>
                <TCell>Cell 1</TCell>
                <TCell>Cell 2</TCell>
                <TCell>Cell 3</TCell>
              </TRow>,
              <TRow key={2}>
                <TCell>Cell 4</TCell>
                <TCell>Cell 5</TCell>
                <TCell>Cell 6</TCell>
              </TRow>,
              <TRow key={3}>
                <TCell>Cell 7</TCell>
                <TCell>Cell 8</TCell>
                <TCell>Cell 9</TCell>
              </TRow>]
            }
          />
        </Content>
      </Content>

    );
  }
}

export default App;
