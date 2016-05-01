import React from 'react';
import {Component} from 'react';

import PhotoGrid from '../containers/photo-grid';
import PhotoDetail from '../containers/photo_detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <PhotoGrid />
                <PhotoDetail />
            </div>
        );
    }
}
