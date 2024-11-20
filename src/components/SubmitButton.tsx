import { Control, useFormState } from 'react-hook-form';
import { Button } from './ui/button';
import { FormValues } from '@/types';
import { Loader2 } from 'lucide-react';

type SubmitButtonProps = {
  text: string;
  control?: Control<FormValues, unknown>;
};

function SubmitButton(props: SubmitButtonProps) {
  const { text, control } = props;

  const { isSubmitting } = useFormState({ control });

  return (
    <Button type='submit' disabled={isSubmitting} className='capitalize'>
      {isSubmitting ? <Loader2 className='animate-spin' /> : text}
    </Button>
  );
}

export default SubmitButton;
