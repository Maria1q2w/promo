export type StepProps = {};
export type StepEmits = {
  changeStep: (step: 'Step1' | 'Step2') => void;
};
export type FieldMapItem = {
  name: string;
  type: 'input' | 'textarea';
  placeholder: string;
  label: string;
  rules: string;
  icon?: string;
}