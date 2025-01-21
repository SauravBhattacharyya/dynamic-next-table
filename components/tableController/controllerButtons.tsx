import styles from "./styles.module.scss";
import Image from "next/image";

interface ControllerButtonsProps {
  image: string;
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export default function ControllerButtons(props: ControllerButtonsProps) {
  const { image, label, onClick, isDisabled = false } = props;
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <div
      className={`${styles.controllerButtons} ${
        isDisabled ? styles.disabled : ""
      }`}
      onClick={handleOnClick}
    >
      <Image src={image} alt="controller button" width={16} height={16} />
      <p>{label}</p>
    </div>
  );
}
