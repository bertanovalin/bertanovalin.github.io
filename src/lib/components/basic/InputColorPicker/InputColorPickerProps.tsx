export interface InputColorPickerProps extends React.HTMLProps<HTMLInputElement> {
    name: string;
    value: string;
    filter?: string[];
}
