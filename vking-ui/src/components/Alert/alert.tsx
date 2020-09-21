import React,{useState} from 'react'
import classNames from 'classnames';

interface AlertPorps {
    className?: string,
    title?: string,
    type?: string,
    open?: boolean,
    show?: boolean,
    children: React.ReactNode,
}
const Alert: React.FC<AlertPorps> = (props): any => {
    const { className, title, type, open, show, children } = props;
    const [opens, setOpen] = useState(open)
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
        [`alert-disable-block`]: opens,
    })
    return opens ? <div className={classes}>
        <div className="alert-content">
            {title && <h2>{title}</h2>}
            <span>{children}</span>
            {show && <span className='alert-on-of' onClick={() => setOpen(false)}>{'+'}</span>}
        </div>
    </div> : null
}
Alert.defaultProps = {
    open: false,
    show: true
}
export default Alert;
