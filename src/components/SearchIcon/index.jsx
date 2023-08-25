import PropTypes from 'prop-types';

const SearchIcon = ({ width, height }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" fill="#323232" />
            <path d="M17 17L21 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#323232" strokeWidth="2" />
        </svg>
    )
};

SearchIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

SearchIcon.defaultProps = {
    width: 100,
    height: 100,
};

export default SearchIcon;