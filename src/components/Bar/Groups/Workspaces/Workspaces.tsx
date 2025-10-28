import styles from "./workspaces.module.scss";
import cx from "classnames";

type Props = { className?: string };

const Workspaces = ({ className }: Props) => {
  return (
    <div className={cx(className, styles.workspaces)}>
      <ul>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
      </ul>
    </div>
  );
};

export default Workspaces;
