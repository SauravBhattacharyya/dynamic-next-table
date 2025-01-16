import Image from "next/image";
import styles from "./styles.module.scss";
import { Tooltip } from "@nextui-org/tooltip";

interface SidebarContentProps {
  name: string;
  image: string;
}

export default function SidebarContent(props: SidebarContentProps) {
  const { name, image } = props;
  return (
    <div className={styles.sidebarContent}>
      <Tooltip
        content={name}
        placement="right"
        showArrow={true}
        classNames={{
          content:
            "py-2 px-4 shadow-xl text-white font-semibold bg-black/75 rounded-lg",
        }}
      >
        <Image src={image} alt={name} width={24} height={24} />
      </Tooltip>
    </div>
  );
}
