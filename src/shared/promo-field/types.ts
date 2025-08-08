export type PromoFieldProps = {
  type: 'input' | 'textarea';
  label: string;
  placeholder: string;
  name: string;
  rules: string;
  isLast?: boolean;
}