/**
 * Created by tedshaffer on 5/1/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPhoto } from '../actions/index';
import { bindActionCreators } from 'redux';

class PhotoGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            selectedPhoto: {}
        };
        this.photosById = {};
    }

    photoSelected(event) {
        console.log("photo selected");
        // this.selectedPhoto = this.photosById[event.target.id];
        console.log("invoke onSelectPhoto");
        // this.props.onSelectPhoto(this.selectedPhoto);
    }

    render() {

        let self = this;
        let photoNodes = this.props.photos.map(function(photo) {
            self.thumbUrl = "http://localhost:3000/photos/" + photo.thumbUrl.replace(" ", "%20");
            // self.photosById[photo.dbId] = photo;
            return (
                <li
                    className="flex-item photoThumbsDiv"
                    key={photo.dbId}
                >
                    <img id={photo.dbId} src={self.thumbUrl} className="thumbImg" width={photo.width}
                         height={photo.height}
                         onClick={() => self.props.selectPhoto(photo)}
                    />
                </li>
            );
        });

        return (
            <div className="photosDiv">
                <ul className="flex-container wrap">
                    {photoNodes}
                </ul>
            </div>
        );

    }

}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of PhotoGrid
    return {
        photos: state.photos
    };
}

// Anything returned from this function will end up as props on the PhotoGrid container
function mapDispatchToProps(dispatch) {
    // Whenever selectPhoto is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectPhoto: selectPhoto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
