import { useState } from './utils';
import { Header, Step1, Step2 } from './components';
import { computed, defineComponent } from 'vue';
import { Form, useForm } from 'vee-validate';
import { FormSchema, StepKeys } from './types';

export const App = defineComponent(
  () => {
    const { handleSubmit } = useForm<FormSchema>();
    const [currentStep, setCurrentStep] = useState<StepKeys>('Step1');
    
    const CurrentStepComponent = computed(() => (currentStep.value === 'Step1' ? Step1 : Step2));
    const onSubmit = (form: FormSchema) => {
      console.log('✅ submitted:', form);
    };

    return () => (
      <>
        <Header currentStep={currentStep.value} />

        <Form onSubmit={(e) => handleSubmit(onSubmit)(e as Event)}>
          <CurrentStepComponent.value onChangeStep={setCurrentStep}/>
        </Form>
      </>
    )
  },
  { name: 'App' }
);
