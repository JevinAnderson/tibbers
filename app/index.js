import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import Application from './application';

const node = document.getElementById('main-application-node');

render(<Application />, node);
