import PropTypes from 'prop-types';
import React from 'react';

const ExternalLink = ({ href, target, children }) => (
    <a href={href} target={target} rel="noopener noreferrer">{children}</a>
);

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    children: PropTypes.string.isRequired,
};

ExternalLink.defaultProps = {
    target: '_blank',
};

export {
    ExternalLink,
}
