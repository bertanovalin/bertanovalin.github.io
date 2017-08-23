import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputColorPickerBasic } from './InputColorPickerBasic';

export class InputColorPickerPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputColorPickerBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputColorPickerBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
