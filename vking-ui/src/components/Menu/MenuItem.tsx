import React from 'react'
import classNames from 'classnames';

export interface IMenuItemProps {
    index?: number;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}
const MenuItem: React.FC<IMenuItemProps> = (props) => {
    let { className, style, children, disabled } = props;
    const classes = classNames('vking-menu', className, {
        'is-disabled': disabled
     })
    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}
export default MenuItem;
