import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  error?: any;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    error && <span className={styles.erro}>{error}</span>
  );
}
