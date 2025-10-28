import styles from "./bar.module.scss";
import cx from "classnames";
import DateTime from "./Groups/DateTime/DateTime";
import Workspaces from "./Groups/Workspaces/Workspaces";
import Controls from "./Groups/Controls/Controls";

type Props = {};

const Bar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={cx(styles.group, styles.arch)}>
          <i className={cx("nf nf-md-arch")}></i>
        </div>
        <DateTime className={styles.group} />
        <Workspaces className={styles.group} />
      </div>
      <div className={styles.right}>
        <div className={styles.group}>Info</div>
        <Controls className={styles.group} />
        <div className={styles.group}>Power</div>
      </div>
    </div>
  );
};

export default Bar;
