import PropTypes from 'prop-types';
import React from 'react';

import { Image } from './Image';
import { Description } from './Description';

const Section = ({ className, children, ...props }) => (
    <section className={className} {...props}>
        {children}
    </section>
);

Section.Image = Image;
Section.Description = Description;

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Section.defaultProps = {
    className: '',
};

export {
    Section,
};
