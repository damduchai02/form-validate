import { ForwardedRef, forwardRef } from 'react';
import { Input } from './ui/input';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type OptionInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  optionIndex: number;
  placeholder?: string;
  error?: Merge<
    FieldError,
    (Merge<FieldError, FieldErrorsImpl<{ value: string }>> | undefined)[]
  >;
  children?: React.ReactNode;
};

const OptionInput = forwardRef(
  (props: OptionInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      type = 'text',
      optionIndex,
      placeholder,
      error,
      children,
      ...other
    } = props;

    return (
      <div className='mt-2'>
        <div className='flex items-center space-x-2'>
          <Input type={type} ref={ref} {...other} placeholder={placeholder} />
          {children}
        </div>
        {error && (
          <p className='text-sm text-red-500'>
            {error[optionIndex]?.value?.message}
          </p>
        )}
      </div>
    );
  }
);

export default OptionInput;
