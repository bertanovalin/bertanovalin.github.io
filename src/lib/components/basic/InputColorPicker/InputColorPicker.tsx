import * as React from 'react';

import * as classNames from 'classnames';
import './InputColorPicker.scss';
import { InputColorPickerProps } from './InputColorPickerProps';

export class InputColorPicker extends React.Component<InputColorPickerProps, {}> {

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (this.props.onChange) {
            return this.props.onChange(e);
        }
    }

    render() {
        let { ...props } = this.props;

        return (
            <div className='Input-Color-Picker'>
                <label className={classNames('Border')} >
                    <input {...props} className={`$hidden-xs-up ${props.name} ${props.value}`} type='radio' onChange={this.handleChange} />
                    <span className={classNames(props.value, 'Color')}/>
                    <span>{props.label}</span>
                </label>
            </div>
        );
    }
}
