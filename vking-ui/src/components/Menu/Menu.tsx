import React from 'react'
import classNames from 'classnames';
import MenuItem from './MenuItem';

type MenuMode = 'horizontal' | 'vertical'
export interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number) => void;
}
const Menu: React.FC<IMenuProps> = (props) => {
    let { className, mode, style, children, defaultIndex } = props;
    const classes = classNames('vking-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}
export default Menu;