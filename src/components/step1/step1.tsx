import type { FunctionalComponent } from 'vue';
import styles from './styles.module.scss';
import type { StepProps, StepEmits } from './types';
import { Button, PromoField } from '../../shared';
import { FIELD_MAP } from './constants';

export const Step1: FunctionalComponent<StepProps, StepEmits> = (_, {emit}) => (
    <div class={styles.step}>
      {FIELD_MAP.map(({ icon, ...rest }, index) => (
        <PromoField {...rest} isLast={index === FIELD_MAP.length - 1} v-slots={{default: () => icon && <icon />}} />
      ))}

      <div class={styles.actions}>
        {/* TODO: стили для disabled */}
        <Button label="Отмена" colorType="prev" type="button" />
        <Button label="Далее" colorType="next" type="button" step="Step2" onChangeStep={(step) => emit('changeStep', step)} />
      </div>
    </div>
  );