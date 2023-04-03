
import React from 'react';
import { Button } from 'antd';
import { Icon } from '@ant-design/compatible';


export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = typeof item.children === 'string' && item.children.match(isImg)
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  if (item.name.indexOf('button1') === 0 && typeof item.children === 'object') {
    children = <Button type="link" iconOnly={true} ghost>
      <Icon type="Linkedin" style={{ fontSize: 34 }} />
  </Button>;
  }
  if (item.name.indexOf('button2') === 0 && typeof item.children === 'object') {
    children = <Button type="link" iconOnly={true} ghost>
      <Icon type="Github" style={{ fontSize: 34 }} />
  </Button>;
  }
  if (item.name.indexOf('button3') === 0 && typeof item.children === 'object') {
    children = <Button type="link" iconOnly={true} ghost>
      <Icon type="Medium" style={{ fontSize: 34 }} />
  </Button>;
  }
  if (item.name.indexOf('button4') === 0 && typeof item.children === 'object') {
    children = <Button type="link" iconOnly={true} ghost>
      <Icon type="Linkedin" style={{ fontSize: 34 }} />
  </Button>;
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
