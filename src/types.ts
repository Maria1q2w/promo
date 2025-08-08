export type StepKeys = 'Step1' | 'Step2';
export type FormSchema = {
  name: string;
  title: string;
  description?: string;
  coins: string;
  activationLimit: string;
}