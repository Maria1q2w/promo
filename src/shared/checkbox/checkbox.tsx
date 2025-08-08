import { FunctionalComponent } from "vue";
import styles from './styles.module.scss';
import { CheckboxProps } from "./types";

export const Checkbox: FunctionalComponent<CheckboxProps> = (props) => (
    <label class={styles.checkbox}>
        <input type={props.type} class={styles.input} />
        <span class={`${styles[props.custom === 'circle' ? 'circle' : 'square']}`}></span>
        {props.label}
    </label>
);