import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ExternalLink = ({ href, target, children }) => {
    return (
        <a className={styles.link} href={href} target={target} rel="noopener noreferrer">{children}</a>
    );
};

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
