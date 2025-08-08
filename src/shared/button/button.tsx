import { FunctionalComponent } from "vue";
import { ButtonProps, StepEmits } from "./types";
import styles from './styles.module.scss';

export const Button: FunctionalComponent<ButtonProps, StepEmits> = (props, {emit}) => (
    <button class={`${styles[props.colorType === 'next' ? 'next' : 'prev']} ${styles.button}`} type={props.type} onClick={() => props.step && emit('changeStep', props.step)}>{props.label}</button>
);