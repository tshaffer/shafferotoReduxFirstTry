/**
 * Created by tedshaffer on 5/1/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhotoDetail extends Component {
    render() {

        if (!this.props.photo) {
            return <div>Select a photo to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.photo.title}</div>
                <div>Thumb Url: {this.props.photo.thumbUrl}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        photo: state.activePhoto
    };
}

export default connect(mapStateToProps)(PhotoDetail);
