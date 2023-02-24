import styles from './progressBar.module.scss';

interface ProgressBarProps {
  /**
   * Percentage of tasks completed.
   */
  progress?: number;
}

function ProgressBar({progress}: ProgressBarProps) {
  return (
    <div className={styles.wrapper__progressBar}>
      <div
        data-testid="progress-bar"
        className={styles.progressBar}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
