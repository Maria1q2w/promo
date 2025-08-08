import { defineComponent } from 'vue';
import {
    ErrorMessage,
    Field,
} from 'vee-validate';
import { StepEmits, StepProps } from './types';
import styles from './styles.module.scss';
import { CoinIcon, CalendarIcon } from '../../assets';
import { Button, DatePicker, PromoField } from '../../shared';
import { Checkbox } from '../../shared';
import VueDatePicker from '@vuepic/vue-datepicker';
import { useState } from '../../utils';

export const Step2 = defineComponent<StepProps, StepEmits>(
    (_, { emit }) => {
        const [date, setDate] = useState('');

        return () => (
            <div class={styles.card}>

                <label class={styles.title} >Срок действия промокода<span class={styles.star}>*</span></label>
                <div class={styles.dates}>
                    <div>
                        <label class={styles.dateTitle}>Дата начала</label>
                        <div class={styles.block}>
                            <div class={styles.calendar}>
                                {/* TODO: вынести в /shared/date-picker */}
                                <DatePicker showIcon={true} hasError={true} >
                                    <CalendarIcon />
                                </DatePicker>
                            </div>

                            <div class={styles.time}>
                                <DatePicker showIcon={false} hasError={false} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class={styles.dateTitle}>Дата конца</label>
                        <div class={styles.block}>
                            <div class={styles.calendar}>
                                <DatePicker showIcon={true} hasError={true}>
                                    <CalendarIcon />
                                </DatePicker>
                            </div>

                            <div class={styles.time}>
                                <DatePicker showIcon={false} hasError={true} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class={styles.checkbox}>
                    <Checkbox label="Без даты конца" type="checkbox" custom="square" />
                </div>

                <div class={styles.line} ></div>

                <PromoField label="Введите лимит активаций (шт.)" type="input" name="activationLimit" rules="required" placeholder="1000" ></PromoField>

                <div class={styles.getPromo}>
                    <label class={styles.title} >Настроить получение промокода</label>
                    <div class={styles.radiolist} >
                        <Checkbox label="Создать промокод без отправки" type="checkbox" custom="circle" />
                        <Checkbox label="Отправить промокод всем пользователям" type="checkbox" custom="circle" />
                    </div>
                </div>

                <div class={styles.buttons}>
                    <Button type="button" label="Отмена" colorType="prev" step="Step1" onChangeStep={(step) => emit('changeStep', step)} />
                    <Button type="submit" label="Создать" colorType="next" />
                </div>
            </div>
        );
    },
    {
        name: 'Step2',
        emits: ['changeStep', 'submit'],
    }
);