import React from 'react';
import Chats from '../Chats/index';

import LeftSite from './left'
import RightSite from './right'


import './index.css'

const MainLayout = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="left col-md-8">
                    <LeftSite  props={props} />
                </div>
                <div className="righ col-md-4">
                    <RightSite chats={Chats} props={props} />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;