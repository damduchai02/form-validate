import { FormValues } from '@/types';

import { Control, useFormState } from 'react-hook-form';
import FormInput from './FormInput';

function HeaderForm({ control }: { control: Control<FormValues, unknown> }) {
  const { register } = control;
  const { errors } = useFormState({ control });

  return (
    <>
      <FormInput
        label='title'
        {...register('title', {
          required: 'Title is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters',
          },
          maxLength: {
            value: 100,
            message: 'Name must be less than 100 characters',
          },
        })}
        error={errors.title}
      />
      <FormInput
        label='description'
        {...register('description', {
          required: 'Description is required',
          validate: (description) => {
            const wordCount = description.split(' ').length;
            return (
              (wordCount >= 5 && wordCount <= 100) ||
              'Description must be between 5 and 100 words.'
            );
          },
        })}
        error={errors.description}
      />
    </>
  );
}

export default HeaderForm;
