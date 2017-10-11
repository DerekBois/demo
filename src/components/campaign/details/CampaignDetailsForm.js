import React from 'react';
// import PropTypes from 'prop-types';
import InputField from '../../common/form/InputField';
import TextareaField from '../../common/form/TextareaField';
import FileField from '../../common/form/FileField';

const CampaignDetailsForm = ({campaign, onChange, uploadPreviews, onSubmit, saving, errors}) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            <div className="content">
                <div>
                    <div className="fields-section">
                        <h5>Basic Details</h5>
                        <p>These are the general set up fields for your campaign</p>
                        <hr />
                        <InputField 
                            name="title"
                            label="Title"
                            value={campaign.title}
                            onChange={onChange}
                            error={errors.title}
                        />
                        <InputField 
                            name="description"
                            label="Description"
                            value={campaign.description}
                            onChange={onChange}
                            error={errors.description}
                        />
                        {errors.form && <p>{errors.form}</p>}
                        <button type="submit" name="submit" className="btn inactive">Update</button>
                    </div>
                    <div className="fields-section">
                        <h5>Tracking Settings</h5>
                        <p>Here you can enter your hashtag for tracking your campaign, as well as the link that you'd like to advertise</p>
                        <hr />
                        <InputField 
                            name="hashtag"
                            label="Hashtag"
                            value={campaign.hashtag}
                            onChange={onChange}
                            error={errors.hashtag}
                        />
                        <InputField 
                            name="targetUrl"
                            label="Target Url"
                            value={campaign.targetUrl}
                            onChange={onChange}
                            error={errors.targetUrl}
                        />
                        {errors.form && <p>{errors.form}</p>}
                        <button type="submit" name="submit" className="btn inactive">Update</button>
                    </div>
                </div>
                <div>
                    <div className="fields-section">
                        <h5>Copy</h5>
                        <p>You can store your content that you create in this area.</p>
                        <hr />
                        <TextareaField 
                            name="copy"
                            label="Copy"
                            value={campaign.copy}
                            onChange={onChange}
                            error={errors.copy}
                        />
                        {errors.form && <p>{errors.form}</p>}
                        <button type="submit" name="submit" className="btn inactive">Update</button>
                    </div>
                    <div className="fields-section">
                        <h5>Images</h5>
                        <p>Upload as many as 10 images to store for your content.</p>
                        <hr />
                        <div className="images">
                            {/* campaign.images.map((image, i) => {
                                return <img key={i} src={image} />
                            }) */}
                        </div>
                        <FileField 
                            name="images"
                            onChange={onChange}
                            previews={uploadPreviews}
                            multiple
                        />
                        {errors.form && <p>{errors.form}</p>}
                        <button type="submit" name="submit" className="btn inactive">Upload</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
// CampaignDetailsForm.propTypes = {
//     campaign: PropTypes.object.isRequired,
//     onChange: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     saving: PropTypes.bool.isRequired,
//     errors: PropTypes.object
// };
export default CampaignDetailsForm;