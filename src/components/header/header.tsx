import type { FunctionalComponent } from 'vue';
import styles from './styles.module.scss';
import type { HeaderProps } from './types';

export const Header: FunctionalComponent<HeaderProps> = (props) => (
    <>
      <h2 class={styles.title}>Создание промокода</h2>
      <div class={styles.items}>
        <div class={[styles.item, { [styles.active]: props.currentStep === 'Step1' }]}>Шаг 1: Основное</div>
        <div class={[styles.item, { [styles.active]: props.currentStep === 'Step2' }]}>Шаг 2: Настройка промокода</div>
      </div>
    </>
  );