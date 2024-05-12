import {useState} from "react";
import styles from "./Collapse.module.css";

interface CollapseProps {
  collapsedLabel?: string;
  expandedLabel?: string;
}

export const Collapse = ({
  collapsedLabel = "Развернуть ",
  expandedLabel = "Свернуть",
}: CollapseProps) => {
  const [isOpen, setOpen] = useState(false);

  const handlesClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {/* <a className={styles.btn} href='#collapseExample' onClick={handlesClick}>
        Link with href
      </a> */}
      <button className={styles.btn} type='button' onClick={handlesClick}>
        {isOpen ? expandedLabel : collapsedLabel}
      </button>
      <div className={`${styles.collapse} ${isOpen && styles.open}`}>
        <div className={styles.card}>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
};
