import React from 'react';
import PropTypes from 'prop-types';
import {channels} from '../../../constants';

const PixelCode = ({slug, hsid}) => {
    let shareUrl = `//${location.host}/campaigns/${slug ? slug+'/' : ''}`;

    if (!hsid && !slug) {
        return <div>Something went wrong...</div>;
    }
    hsid && (shareUrl = `${shareUrl}?hsid=${channels.PIXEL+hsid}`);

    return (
        <div className="pixel-code">
            <code>
                &lt;<span className="code-red">script</span>&gt;<br />
                &#40;<span className="code-blue">function</span>(<span className="code-orange">d</span>,
                <span className="code-orange">s</span>,<span className="code-orange">t</span>,
                <span className="code-orange">i</span>,<span className="code-orange">c</span>)&#123; i=d.
                <span className="code-blue">createElement</span>(<span className="code-yellow">
                'iframe'</span>); c=d.currentScript.<span className="code-blue">parentNode</span>; i.src=location.protocol
                <span className="code-red">+</span>s; i.style.cssText=t; c.nodeName<span className="code-red">
                !=</span><span className="code-yellow">'HEAD'</span><span className="code-red"> && </span>
                c.<span className="code-blue">appendChild</span>(i);}) (<span className="code-blue">document
                </span>, <span className="code-yellow">'{shareUrl}'</span>,<span className="code-yellow">
                'position:fixed; left:-101px; width:1px; height:1px;</span>';<br />
                &lt;<span className="code-red">script</span>&gt;
            </code>
        </div>
    );
};
PixelCode.propTypes = {
    slug: PropTypes.string,
    hsid: PropTypes.string
}
export default PixelCode;