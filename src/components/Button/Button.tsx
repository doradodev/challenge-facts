import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'icon';
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  variant = 'default',
  ...restProps
}) => {
  return (
    <button
      className={`hoverGroup ${styles.button} ${styles[variant]}`}
      type="button"
      {...restProps}
    >
      <i className={styles.iconWrapper}>{icon}</i>
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
