import React, { ReactNode } from "react";
import { Menu, MenuProps } from "antd";
import { CoreTypography } from "../Typography/Typography";
import { CoreButtonProps } from "../Button/Button";
import { ButtonGroupProps } from "../ButtonGroup/ButtonGroup";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Header } from "antd/es/layout/layout";

export type NavigationProps = {
  home: ReactNode;
  itemProps: ItemType[];
  menuButton: CoreButtonProps | ButtonGroupProps;
  panelButton: ReactNode;
  iconButton: ReactNode;
};

export const CoreNavigations = (props: NavigationProps) => {
  const { home, itemProps, menuButton, panelButton, iconButton, ...restProps } =
    props;

  return (
    <Header
      style={{ display: "flex", alignItems: "center" }}
      className="mx-navigation light03"
      {...restProps}
    >
        <div className ='mx-brand-logo'>
        {home}
        </div>
      
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={itemProps}
      />
      {menuButton}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {panelButton}
        {iconButton}
      </div>
    </Header>
  );
};
