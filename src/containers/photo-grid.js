/**
 * Created by tedshaffer on 5/1/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhotoGrid extends Component {

    photoSelected(event) {
        console.log("photo selected");
        // this.selectedPhoto = this.photosById[event.target.id];
        console.log("invoke onSelectPhoto");
        // this.props.onSelectPhoto(this.selectedPhoto);
    }


    render() {

        // if (this.props.photos) {
        //     console.log("photoGrid length is " + this.props.photos.length.toString());
        // }
        //
        // return (
        //     <div>pizza</div>
        // )

        let self = this;
        let photoNodes = this.props.photos.map(function(photo) {
            self.thumbUrl = "http://localhost:3000/photos/" + photo.thumbUrl.replace(" ", "%20");
            // self.photosById[photo.dbId] = photo;
            return (
                <li className="flex-item photoThumbsDiv" key={photo.dbId} >
                    <img id={photo.dbId} src={self.thumbUrl} className="thumbImg" width={photo.width}
                         height={photo.height} onClick={self.photoSelected.bind(self)} />
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
    // Whatever is returned will show up as props
    // inside of PhotoGrid
    return {
        photos: state.photos
    };
}

// Anything returned from this function will end up as props
// on the PhotoGrid container
// function mapDispatchToProps(dispatch) {
//     // Whenever selectBook is called, the result shoudl be passed
//     // to all of our reducers
//     // return bindActionCreators({ selectBook: selectBook }, dispatch);
//     return null;
// }

// Promote PhotoGrid from a component to a container - it needs to know
// about this new dispatch method, selectPhoto. Make it available
// as a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
export default connect(mapStateToProps)(PhotoGrid);
