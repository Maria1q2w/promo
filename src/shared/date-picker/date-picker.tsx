import VueDatePicker from '@vuepic/vue-datepicker';
import { FunctionalComponent, ref } from 'vue';
import { DatePickerProps } from './types';
import styles from './styles.module.scss';
import '@vuepic/vue-datepicker/dist/main.css';
import { useState } from './../../utils';

export const DatePicker: FunctionalComponent<DatePickerProps> = (props, { slots }) => {
    const [date, setDate] = useState<string>('');
    
    return (
        <div class={[styles.wrapper, props.hasError && styles.error]}>
            <VueDatePicker
                text-input
                hideInputIcon={!props.showIcon}
                model-type="yyyy-MM-dd"
                format="yyyy-MM-dd"
                v-model={date.value}
                onUpdate:model-value={setDate}
                v-slots={{ 'input-icon': slots.default?.() }}
            />
        </div>
    )
};