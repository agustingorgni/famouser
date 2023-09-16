import PropTypes from 'prop-types';

const Image = ({ className, children, ...props }) => (
    <div className={className} {...props}>
        {children}
    </div>
);

Image.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Image.defaultProps = {
    className: '',
};

export {
    Image,
};
