import classNames from "classnames";

import styles from './styles.module.scss';
import { Children } from "react";

export const Grid = ({ children, className }) => {
    return (
        <table className={classNames(styles.grid, className)}>
            {children}
        </table>
    );
};

const Header = ({ className, children }) => {
    const items = Children.toArray(children).filter((child) => child.type === Title);
    return (
        <theader className={classNames(styles.header, className)}>
            {items.map((item) => item)}
        </theader>
    );
};

const Title = ({ className, children }) => <th className={classNames(styles.th, className)}>{children}</th>;

const Body = ({ children }) => {
    const rows = Children.toArray(children).filter((child) => child.type === Row);
    return (
        <tbody>
            {rows.map(row => row)}
        </tbody>
    );
}

const Row = ({ className, children }) => {
    const data = Children.toArray(children).filter((child) => child.type === Data);
    return (
        <tr className="test">
            {data.map(td => td)}
        </tr>
    );
}

const Caption = ({ children }) => <caption>{children}</caption>;

const Data = ({ children, className }) => (
    <td className={className}>{children}</td>
);

Grid.Header = Header;
Grid.Title = Title;
Grid.Body = Body;
Grid.Row = Row;
Grid.Data = Data;
Grid.Caption = Caption;
