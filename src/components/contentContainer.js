import React from 'react';
import { Container } from "constate";

//Context
const ContentContainer = props => (
  <Container
  initialState={{ name: '', count: 0 }}
  actions={{ onType: (event) => ({ name: event.target.value, count: event.target.value.length }) }}
  {...props}
  />
);

export default ContentContainer;