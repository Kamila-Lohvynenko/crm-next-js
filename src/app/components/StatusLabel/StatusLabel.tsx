import clsx from 'clsx';
import styles from './StatusLabel.module.scss';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

const StatusLabel = ({ children, status, disabled }: StatusLabelProps) => {
  const statusClassName = clsx(
    styles.label,
    status === Status.Active && styles.active,
    status === Status.NotActive && styles.notActive,
    status === Status.Pending && styles.pending,
    status === Status.Suspended && styles.suspended,
    { [styles.disabled]: disabled },
  );

  return (
    <div className={statusClassName}>
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
};

export default StatusLabel;
