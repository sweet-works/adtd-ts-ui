import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, {ButtonSize, ButtonType, ButtonProps} from './button';
// 
const defaultProps = {
    onClick: jest.fn()
}
const disabledProps: ButtonProps = {
    onClick: jest.fn(),
    disabled: true,
}
const testProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Larg,
    className: 'klass',
}
describe('test Button commponent', () => {
    it('should render the correct defult button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element?.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
    it('默认值', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element?.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn-primary klass');
    })
    it('link button', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href='http://baidu.com'>Link</Button>);
        const element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument();
        expect(element?.tagName).toEqual('A');
        expect(element).toHaveClass('btn btn-link');
    })
    it('disabled button', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    })
})