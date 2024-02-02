import { useState } from "react";

import { Icon } from "@/lib/components/ui/Icon/Icon";

import styles from "./UserMenuCard.module.scss";

import { UserMenuCardProps } from "../types/types";

export const UserMenuCard = ({
  title,
  subtitle,
  iconName,
}: UserMenuCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.menu_card_container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.first_line_wrapper}>
        <span className={styles.title}>{title}</span>
        <Icon
          name={iconName}
          size="normal"
          color={isHovered ? "primary" : "black"}
        />
      </div>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};
