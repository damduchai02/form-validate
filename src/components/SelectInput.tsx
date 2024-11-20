import { Control, Controller } from 'react-hook-form';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { type OptionType, type FormValues } from '@/types';

type SelectInputProps = {
  htmlFor?: string;
  label: string;
  control: Control<FormValues, unknown>;
  options: OptionType[];
};

function SelectInput(props: SelectInputProps) {
  const { htmlFor, label, control, options } = props;

  return (
    <div>
      <Label htmlFor={htmlFor} className='capitalize'>
        {label}
      </Label>
      <Controller
        name={htmlFor as `questions.${number}.type`}
        control={control}
        rules={{ required: 'Type is required' }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => {
                return (
                  <SelectItem key={option.value} value={option.value}>
                    {option.text}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}

export default SelectInput;
