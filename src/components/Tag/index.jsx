import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Tag = ({ children }) => <span className={styles.tag}>{children}</span>;

Tag.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    Tag,
};
