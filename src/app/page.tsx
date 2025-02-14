"use client";

import { useState } from "react";
import Switch from "react-switch";

import Image from "next/image";

// import { useTheme } from "./ThemeContext";
import styles from "./page.module.css";

export default function Home() {
  // const { theme, toggleTheme } = useTheme();

  const [checked, setChecked] = useState(false);
  const theme = checked ? "dark" : "light";

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return (
    <div className={styles.pageContainer} data-theme={theme}>
      <Image
        src={theme === "light" ? "/sun.svg" : "/night.svg"}
        alt="Theme illustration"
        width={200}
        height={200}
        priority
      />
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <label>
        <Switch
          height={35}
          handleDiameter={32}
          width={75}
          checked={checked}
          onChange={handleChange}
          boxShadow="0 1px 5px rgba(0, 0, 0, 0.6)"
        />
      </label>
    </div>
  );
}
