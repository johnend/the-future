import { useState, useEffect } from "react";
import styles from "./datetime.module.scss";
import cx from "classnames";

type Props = {
  className?: string;
};

const DateTime = ({ className }: Props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx(className, styles.dateTime)}>
      <div className={styles.time}>
        <i className="nf nf-fa-clock"></i>
        <span>
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className={styles.date}>
        <i className="nf nf-cod-calendar"></i>
        <span>
          {date.toLocaleDateString([], {
            day: "numeric",
            month: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default DateTime;
