import React from 'react';
import './index.css';
import { Input } from 'antd';
import ContentContainer from '../../components/contentContainer';

const Home = () => (
  <ContentContainer context="content1" pure>
    {({ onType, name, count }) => <div> 
      <h1 className="title1">Welcome</h1>
      <p className="title2">{name}</p>
      <p className="titleText">This is your homepage served by service A</p> 
      <div className="inputField">
        <p>Name</p>
        <Input 
        id="inputName"
        value={name}
        onChange={onType}
        maxlength="50"/>
        <p className="textCounter">{count}/50</p>
      </div>
    </div>}
  </ContentContainer>
);

export default Home;