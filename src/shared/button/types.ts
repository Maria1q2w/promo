export type ButtonProps = {
    type: 'button' | 'submit';
    label: string;
    step?: 'Step1' | 'Step2';
    colorType: 'next' | 'prev';
}

export type StepEmits = {
    changeStep: (step: 'Step1' | 'Step2') => void;
};