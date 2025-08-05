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
                <div class={styles.promoCard}>
                    <div class={styles.formCard__titleStep}>
                        <h2 class={styles.formCard__title}>Создание промокода</h2>
                        <div class={styles.formCard__steps}>
                            <div class={`${styles['formCard__steps-item']} ${styles['formCard__steps-item--active']}`}>Шаг 1: Основное</div>
                            <div class={styles['formCard__steps-item']}>Шаг 2: Настройка промокода</div>
                        </div>
                    </div>

                    <div class={styles.promoCard__promoDuration}>
                        <label class={styles.promoCard__promoDuration__title} >Срок действия промокода<span class={styles.formCard__mainInfo__input_label_star}>*</span></label>
                        <div class={styles.promoCard__promoDuration__dates}>
                            <div class={styles.promoCard__promoDuration__dates__startDate}>
                                <label class={styles.promoCard__promoDuration__dates_title}>Дата начала</label>
                                <div class={styles.promoCard__promoDuration__dates__block}>
                                    <div class={styles.promoCard__promoDuration__dates__block_calendar}>
                                        <VueDatePicker
                                            text-input
                                            model-type="yyyy-MM-dd"
                                            format="yyyy-MM-dd"
                                        >
                                        </VueDatePicker>
                                    </div>

                                    <div class={styles.promoCard__promoDuration__dates__block_time}>
                                        <VueDatePicker
                                            text-input
                                            model-type="yyyy-MM-dd"
                                            format="yyyy-MM-dd"
                                        >
                                        </VueDatePicker>
                                    </div>
                                </div>
                            </div>

                            <div class={styles.promoCard__promoDuration__dates__endDate}>
                                <label class={styles.promoCard__promoDuration__dates_title}>Дата конца</label>
                                <div class={styles.promoCard__promoDuration__dates__block}>
                                    <div class={styles.promoCard__promoDuration__dates__block_calendar}>
                                        <VueDatePicker
                                            text-input
                                            model-type="yyyy-MM-dd"
                                            format="yyyy-MM-dd"
                                        >
                                        </VueDatePicker>
                                    </div>

                                    <div class={styles.promoCard__promoDuration__dates__block_time}>
                                        <VueDatePicker
                                            text-input
                                            model-type="yyyy-MM-dd"
                                            format="yyyy-MM-dd"
                                        ></VueDatePicker>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class={styles.promoCard__promoDuration__checkbox}>
                            <label class={styles.promoCard__promoDuration__checkbox_label}>
                                <input
                                    type="checkbox"
                                    class={styles.promoCard__promoDuration__checkbox_input}

                                />
                                <span class={styles.promoCard__promoDuration__checkbox_custom}></span>
                                Без даты конца
                            </label>
                        </div>

                        <div class={styles.promoCard__promoDuration_line} ></div>

                        <div class={styles.formCard__mainInfo__input}>
                            <label class={styles.formCard__mainInfo__input_label}>Введите лимит активаций (шт.)<span class={styles.formCard__mainInfo__input_label_star}>*</span></label>
                            <Field class={styles.formCard__mainInfo__input_frame} as="input" name="activationLimit" rules="required" placeholder="1000" />
                            <ErrorMessage class={styles.formCard__mainInfo__input_error} name="activationLimit" />
                        </div>

                        <div class={styles.promoCard__promoDuration__getPromo}>
                            <label class={styles.promoCard__promoDuration__getPromo__label} >Настроить получение промокода</label>
                            <div class={styles.promoCard__promoDuration__getPromo__radiolist} >
                                <label class={styles.promoCard__promoDuration__getPromo__checkbox}>
                                    <input type="checkbox" class={styles.promoCard__promoDuration__getPromo__input} />
                                    <span class={styles.promoCard__promoDuration__getPromo__custom}></span>
                                    Создать промокод без отправки
                            </label>

                                <label class={styles.promoCard__promoDuration__getPromo__checkbox}>
                                    <input type="checkbox" class={styles.promoCard__promoDuration__getPromo__input} />
                                    <span class={styles.promoCard__promoDuration__getPromo__custom}></span>
                                    Отправить промокод всем пользователям
                                </label>
                            </div>
                        </div>

                    </div>


                    <div class={styles.formCard__buttons}>
                        <button class={styles.formCard__buttons_button} type="button" >Отмена</button>
                        <button class={styles.formCard__buttons_button_next} type="button" >Создать</button>
                    </div>

                </div>

            </Form>

        );
    },
    {
        name: 'MyForm',

    }
);