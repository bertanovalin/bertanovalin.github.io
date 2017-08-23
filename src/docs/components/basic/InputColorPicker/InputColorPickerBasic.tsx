import * as React from 'react';

import { InputColorPicker } from 'lib/components/basic/InputColorPicker';

export class InputColorPickerBasic extends React.Component<{}, {}> {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='black' label='Hitam' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='white' label='Putih' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='silver' label='Silver' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='gray' label='Abu-abu' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='gold' label='Emas' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='yellow' label='Kuning' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='green' label='Hijau' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='red' label='Merah' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='blue' label='Biru' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='orange' label='Orange' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='pink' label='Pink' />
                    </div>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='brown' label='Coklat' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <InputColorPicker name='Color' value='purple' label='Ungu' />
                    </div>
                </div>
            </div>
        );
    }
}
