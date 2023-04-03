import React from "react";
import styles from "@/styles/section.module.css";

interface SectionProps {
  text: string;
}

export default function Section({ text }: SectionProps) {
  return (
    <div className={styles["section-container"]}>
      <text className={styles["section-text"]}>{text}</text>
    </div>
  );
}
