import PropTypes from 'prop-types';

const Description = ({ className, children, ...props }) => (
    <div className={className} {...props}>
        {children}
    </div>
);

Description.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Description.defaultProps = {
    className: '',
};

export {
    Description,
};
