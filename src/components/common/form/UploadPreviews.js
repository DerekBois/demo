import React from 'react';
import PropTypes from 'prop-types';

const UploadPreviews = ({images}) => {
    if (!images.length) {
        return <div></div>;
    }
    return (
        <div className="image-upload-previews">
            {images.map((image, i) => {
                return (
                    <img key={i} src={image} alt="[ X ]"/>
                );
            })}
        </div>
    );
}
UploadPreviews.propTypes = {
    images: PropTypes.array.isRequired
};
export default UploadPreviews;