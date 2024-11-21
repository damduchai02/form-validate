import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import QuestionCard from './components/QuestionCard';
import CustomButton from './components/CustomButton';
import SubmitButton from './components/SubmitButton';
import { FormValues } from './types';
import HeaderForm from './components/HeaderForm';

function App() {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      title: 'title',
      description: 'description one two three four',
      questions: [
        {
          question: 'question 1',
          type: 'text',
          options: [{ value: 'a' }, { value: 'b' }],
        },
      ],
    },
  });

  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control,
    name: 'questions',
  });

  const handleAddQuestion = () => {
    appendQuestion({
      question: '',
      type: 'text',
      options: [{ value: '' }],
    });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };

  return (
    <Card className='mx-auto max-w-2xl'>
      <CardHeader>
        <CardTitle>Create Form</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className='space-y-4'>
          <HeaderForm control={control} />
          {questionFields.map((field, questionIndex) => (
            <QuestionCard
              key={field.id}
              questionIndex={questionIndex}
              control={control}
              removeQuestion={() => removeQuestion(questionIndex)}
            />
          ))}
          <CustomButton variant='default' onClick={handleAddQuestion}>
            add question
          </CustomButton>
        </CardContent>
        <CardFooter>
          <SubmitButton text='submit' control={control} />
        </CardFooter>
      </form>
    </Card>
  );
}

export default App;
