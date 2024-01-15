import { Tabs, TabsProps } from "antd";
import React, { ReactNode } from "react";

export type CoreTabsProps = TabsProps & {
  orientation:
    | "horizontal"
    | "vertical"
    | "horizontal-reverse"
    | "vertical-reverse";
  itemTabs: TabItem[];
};
export interface TabItem {
  id: string;
  iconProps?: ReactNode;
  label: string;
  childs?: ReactNode;
}

export const CoreDesignTabs = (props: CoreTabsProps) => {
  const { orientation, itemTabs, ...restProps } = props;
  const position = () => {
    switch (orientation) {
      case "horizontal":
        return "top";
      case "vertical":
        return "left";
      case "horizontal-reverse":
        return "bottom";
      case "vertical-reverse":
        return "right";
        default :
        return "top";
    }
  };

  return (
    <Tabs
      {...restProps}
      defaultActiveKey="2"
      tabPosition={position()}
      className="mx-tab"
      items={itemTabs.map((item: TabItem) => {
        return {
          label: (
            <span>
              {item.iconProps}
              {item.label}
            </span>
          ),
          key: item.id,
          children: item.childs ? item.childs : "",
        };
      })}
    />
  );
};
