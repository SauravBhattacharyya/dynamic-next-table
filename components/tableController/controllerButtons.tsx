import styles from "./styles.module.scss";
import Image from "next/image";

interface ControllerButtonsProps {
  image: string;
  label: string;
}

export default function ControllerButtons(props: ControllerButtonsProps) {
  const { image, label } = props;
  return (
    <div className={styles.controllerButtons}>
      <Image src={image} alt="controller button" width={16} height={16} />
      <p>{label}</p>
    </div>
  );
}
