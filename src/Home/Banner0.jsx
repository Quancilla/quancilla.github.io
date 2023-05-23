import React from 'react';
import { Button, Form, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;

    // Define the layout for the form
    const layout = {
      wrapperCol: { span: 24 },
    };

    // Define styles for the form item and input
    const formItemStyle = {
      backgroundColor: '#75dfee', // Set the background color with 50% opacity
      width: '50%',
      opacity: 0.5,
      margin: 'auto auto', // Center the form
    };

    const inputStyle = {
      backgroundColor: 'black', // Set the background color with 50% opacity
      color: '#75dfee', // Replace with your desired color
      fontSize: '12px', // Adjust the font size as needed
    };

    // Define style for the button
    const buttonStyle = {
      boxshadow: '9px 9px 9px rgba(0, 0, 0, 0.35)',
      border: '1px solid #fff',
      color: '#fff',
      background: 'transparent',
      fontSize: '11px',
      height: '25px',
      transition: 'background .45s ease-out, box-shadow .45s ease-out',
      width: '18%',
      '&:hover': {
        color: '#fff',
        borderColor: '#fff',
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 10px rgba(50, 250, 255, 0.75)',
      },
      '&:focus': {
        color: '#fff',
        borderColor: '#fff',
      },
      '&.queue-anim-leaving': {
        width: 'auto',
      },
    };

    // Function to handle form submission
    const onFinish = async (values) => {
      console.log('Received values:', values);
  
      const formData = new FormData();
      formData.append('entry.Email', values.email); // Replace 'entry.1234567890' with the actual form field entry name from Google Forms
  
      try {
        await fetch('https://docs.google.com/forms/d/e/1FAIpQLScqAhLY34ryiJVfnLrVl1pqRtjoijXmrZA7PoTMNkcy6m-Ykg/viewform?usp=sf_link', {
          method: 'POST',
          body: formData,
        });
  
        // Success: Perform any additional actions here
        console.log('Form submitted successfully!');
      } catch (error) {
        // Error handling: Display error message or perform necessary actions
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={250}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' &&
            dataSource.title.children.match(isImg) ? (
              <img src={dataSource.title.children} width="100%" alt="img" />
            ) : (
              dataSource.title.children
            )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Form {...layout} onFinish={onFinish}>
            {/* Add the Form component */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
              style={formItemStyle} // Apply the style to the form item
              validateStatus="" // Remove the default error status
              help="" // Remove the default error message
            >
              <Input
                placeholder="Email"
                style={inputStyle} // Apply the style to the input
              />
              {/* Add the Input component for the email field */}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={buttonStyle} // Apply the style to the button
              >
                {dataSource.button.children}
              </Button>
            </Form.Item>
          </Form>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=30',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
