import { defineComponent, popScopeId } from 'vue';
import {
  defineRule,
  ErrorMessage,
  Field,
  Form,
  useForm,
} from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import styles from './myForm.module.scss';
import { CoinIcon } from './CoinIcon';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export const MyForm = defineComponent(
  () => {
    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit((values) => {
      console.log('✅ submitted:', values);
    });

    defineRule('required', required); // Маш, если правил будет больше, то вынеси их в отдельный файл.
    defineRule('email', email);

    return () => (
      <Form onSubmit={onSubmit}>


        <div class={styles.formCard}>
          <div class={styles.formCard__titleStep}>
            <h2 class={styles.formCard__title}>Создание промокода</h2>
            <div class={styles.formCard__steps}>
              <div class={`${styles['formCard__steps-item']} ${styles['formCard__steps-item--active']}`}>Шаг 1: Основное</div>
              <div class={styles['formCard__steps-item']}>Шаг 2: Настройка промокода</div>
            </div>
          </div>

          <div class={styles.formCard__mainInfo}>
            <div class={styles.formCard__mainInfo__input}>
              <label class={styles.formCard__mainInfo__input_label}>Название промокода<span class={styles.formCard__mainInfo__input_label_star}>*</span></label>
              <Field class={styles.formCard__mainInfo__input_frame} as="input" name="name" rules="required" placeholder="Введи название" />
              <ErrorMessage class={styles.formCard__mainInfo__input_error} name="name" />
            </div>
            <div class={styles.formCard__mainInfo__input}>
              <label class={styles.formCard__mainInfo__input_label}>Заголовок<span class={styles.formCard__mainInfo__input_label_star}>*</span></label>
              <Field class={styles.formCard__mainInfo__input_frame} as="input" name="title" rules="required" placeholder="Введи заголовок" />
              <ErrorMessage class={styles.formCard__mainInfo__input_error} name="title" />
            </div>
            <div class={styles.formCard__mainInfo__input}>
              <label class={styles.formCard__mainInfo__input_label}>Сопроводительный текст</label>
              <Field class={styles.formCard__mainInfo__input_textarea} as="textarea" name="description" rules="required" placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»" />
              <div class={styles.formCard__mainInfo__input_letters} >0/250</div>
              <ErrorMessage class={styles.formCard__mainInfo__input_error} name="description" />
            </div>
            <div class={styles.formCard__mainInfo__input}>
              <label class={styles.formCard__mainInfo__input_label}>Укажи количество баллов<span class={styles.formCard__mainInfo__input_label_star}>*</span></label>
              <div class={styles.formCard__mainInfo__input_frameCoin}><CoinIcon /></div>
              <Field class={`${styles.formCard__mainInfo__input_frame} ${styles.formCard__mainInfo__input_frame_last_child}`} as="input" name="number" rules="required" placeholder="100" />
              <ErrorMessage class={styles.formCard__mainInfo__input_error} name="number" />
            </div>
            <div class={styles.formCard__buttons}>
              <button class={styles.formCard__buttons_button} type="button" >Отмена</button>
              <button class={styles.formCard__buttons_button_next} type="button" >Создать</button>
            </div>
          </div>

        </div>
      </Form>

    );
  },
  {
    name: 'MyForm',

  }
);
