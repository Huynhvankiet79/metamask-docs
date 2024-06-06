import clsx from "clsx";
import { useCollapsible, Collapsible, useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import React from "react";

// eslint-disable-next-line react/prop-types
export const CollapseBox = ({ children }) => {
  const { collapsed, toggleCollapsed } = useCollapsible({ initialState: true });
  const { colorMode } = useColorMode();
  return (
    <div className={clsx(styles.collapseWrapper, !collapsed && styles.collapsedWrapperView)}>
      <button
        className={clsx(styles.collapseBtn, !collapsed && styles.collapsedBtnView, colorMode === "light" && styles.collapsedBtnLightHover)}
        onClick={toggleCollapsed}
      >
        {collapsed ? "Show child attributes" : "Hide child attributes"}
        <div className={clsx(styles.collapseIcon, !collapsed && styles.collapsedIconView)}></div>
      </button>
      <Collapsible lazy collapsed={collapsed}>{children}</Collapsible>
    </div>
  );
};