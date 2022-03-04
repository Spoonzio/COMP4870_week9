import React from 'react';
import toons from '../data/toons';

import { Link } from 'react-router-dom';

import ToonList from '../components/ToonList';


const ToonListPage = () => (
    <React.Fragment>
        <ToonList /> 
    </React.Fragment>
);
export default ToonListPage;