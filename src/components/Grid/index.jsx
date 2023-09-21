import classNames from "classnames";
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

import { Header } from "./components/Header";
import { Data } from "./components/Data";
import { Caption } from "./components/Caption";
import { Row } from "./components/Row";
import { Title } from "./components/Title";

export const Grid = ({ children, className }) => {
    return (
        <table className={classNames(styles.grid, className)}>
            {children}
        </table>
    );
};

Grid.Header = Header;
Grid.Title = Title;
Grid.Body = Row;
Grid.Row = Row;
Grid.Data = Data;
Grid.Caption = Caption;

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Grid.defaultProps = {
    className: '',
};
