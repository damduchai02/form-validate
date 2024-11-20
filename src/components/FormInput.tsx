import { ForwardedRef, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { Label } from './ui/label';
import { Input } from './ui/input';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  htmlFor?: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
};

const FormInput = forwardRef(
  (props: FormInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = 'text', htmlFor, label, error, ...other } = props;

    return (
      <div className='w-full'>
        {label && (
          <Label htmlFor={htmlFor || label} className='capitalize'>
            {label}
          </Label>
        )}
        <Input type={type} id={htmlFor || label} ref={ref} {...other} />
        {error && <p className='text-sm text-red-500'>{error.message}</p>}
      </div>
    );
  },
);

export default FormInput;
