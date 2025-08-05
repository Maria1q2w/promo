import { MyForm } from './components';
//import { useState } from './utils';
import { defineComponent } from 'vue';
import { Form, useForm } from 'vee-validate';
//import { Field } from 'vee-validate';


export const App = defineComponent(
  () => {

    //const [age, setAge] = useState(0);

    // const handleCount = () => {
    //   console.log('click')
    //   setAge(age.value + 1);
    // }

    return () => (
      <div>
        <MyForm />
        {/* <div style="margin-bottom: 80px;">
        <button disabled={!age.value} onClick={() => setAge(0)}>Сбросить</button>
        </div> */}
      </div>

    );
  },
  { name: 'App' }
);
