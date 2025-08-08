import { defineComponent } from 'vue';
import {
  ErrorMessage,
  Field,
} from 'vee-validate';
import styles from './styles.module.scss';
import { PromoFieldProps } from './types';

export const PromoField = defineComponent<PromoFieldProps>(
  (props, {slots}) => {

    return () => (
      <div class={styles.container}>
        <label>{props.label}<span class={styles.star}>*</span></label>
        <div class={styles.wrapper}>
          <Field class={[styles.input, props.isLast && styles.input_last]} as={props.type} name={props.name} rules={props.rules} {...{ placeholder: props.placeholder }} />
          <div class={styles.icon}>{slots.default?.()}</div>
        </div>
        <ErrorMessage class={styles.error} name={props.name} />
      </div>
    );
  },
  {
    name: 'PromoField',
    props: ['name', 'type', 'label', 'placeholder', 'rules', 'isLast'],
  }
);
