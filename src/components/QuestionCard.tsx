import {
  Control,
  useFieldArray,
  UseFieldArrayRemove,
  useFormState,
} from 'react-hook-form';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Trash } from 'lucide-react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import OptionInput from './OptionInput';
import SelectInput from './SelectInput';
import { type FormValues, type OptionType } from '@/types';

type QuestionCardProps = {
  questionIndex: number;
  control: Control<FormValues, unknown>;
  removeQuestion: UseFieldArrayRemove;
};

const options: OptionType[] = [
  { value: 'text', text: 'Text' },
  { value: 'checkbox', text: 'Checkbox' },
  { value: 'radio', text: 'Radio' },
];

function QuestionCard({
  questionIndex,
  control,
  removeQuestion,
}: QuestionCardProps) {
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `questions.${questionIndex}.options`,
  });

  const { register } = control;
  const { errors } = useFormState({ control });

  return (
    <Card>
      <CardContent className='space-y-4'>
        <FormInput
          htmlFor={`questions.${questionIndex}.question`}
          label='question'
          {...register(`questions.${questionIndex}.question`, {
            required: 'Question is required',
          })}
          error={errors.questions?.[questionIndex]?.question}
        />
        <SelectInput
          htmlFor={`questions.${questionIndex}.type`}
          label='type'
          control={control}
          options={options}
        />
        <div>
          {optionFields.map((option, optionIndex) => (
            <OptionInput
              key={option.id}
              optionIndex={optionIndex}
              {...register(
                `questions.${questionIndex}.options.${optionIndex}.value`,
                {
                  required: 'Option value is required',
                },
              )}
              placeholder={`Option ${optionIndex + 1}`}
              error={errors.questions?.[questionIndex]?.options}
            >
              <CustomButton
                size='icon'
                variant='destructive'
                onClick={() => removeOption(optionIndex)}
              >
                <Trash />
              </CustomButton>
            </OptionInput>
          ))}
          <CustomButton
            variant='outline'
            onClick={() => appendOption({ value: '' })}
            className='mt-2'
          >
            add option
          </CustomButton>
        </div>
      </CardContent>
      <CardFooter>
        <CustomButton variant='destructive' onClick={removeQuestion}>
          remove question
        </CustomButton>
      </CardFooter>
    </Card>
  );
}

export default QuestionCard;
