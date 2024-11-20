type QuestionType = 'text' | 'checkbox' | 'radio';

type Option = {
  value: string;
};

export type Question = {
  question: string;
  type: QuestionType;
  options: Option[];
};

export type FormValues = {
  title: string;
  description: string;
  questions: Question[];
};

export type OptionType = {
  value: string;
  text: string;
};
