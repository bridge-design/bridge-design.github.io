import React from 'react';
import styled from 'styled-components';

import { Container } from '../../src/components/Container';
import { Site } from '../../src/components/Site';

const seo = {
  title: 'New index page',
};

export default (props) => (
  <Site seo={seo} {...props}>
    blah blah
  </Site>
)