import React from 'react';
import './index.css';
import { Tabs } from 'antd';
import ContentContainer from '../../components/contentContainer';

const TabPane = Tabs.TabPane;

const Nested = () => (
  <ContentContainer context="content1" pure>
  {({ name }) => <div>
      <h2>Content from service B</h2> 
      <Tabs defaultActiveKey="1" >
        <TabPane tab="B-1 Tab" key="1">
          <p>Hi</p>
          <p className="displayName">{name}</p>
          <p>This service B-1 calling your name</p>
        </TabPane>
        <TabPane tab="B-2 Tab" key="2">
          <p>Hi</p>
          <p className="displayName">{name}</p>
          <p>This service B-2 calling your name</p>
        </TabPane>
      </Tabs>
    </div>}
  </ContentContainer>
);

export default Nested;
