import { IMAGE } from "@/utils/constants";
import SidebarContent from "./sidebarContent";
import styles from "./styles.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebarWrapper}>
      <div>
        <SidebarContent name="Table" image={IMAGE.TABLEIMAGE} />
        <SidebarContent name="Puzzle" image={IMAGE.PUZZLEIMAGE} />
        <SidebarContent name="Circle" image={IMAGE.CIRCLEIMAGE} />
      </div>
      <div>
        <SidebarContent name="Credit Card" image={IMAGE.CREDITCARDIMAGE} />
        <SidebarContent name="Coins" image={IMAGE.COINSIMAGE} />
      </div>
    </aside>
  );
}
