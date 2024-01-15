import React, { ReactNode } from "react";
import { Menu, SubMenuProps } from "antd";
import { CoreTypography } from "../Typography/Typography";

export type MenuSubProps = SubMenuProps & {
  contentProps: ReactNode;
  labelProps: string;
  leadingItem?: ReactNode;
  description?: string;
  valueProps?: string;
};
const { SubMenu } = Menu;
export const CoreDesignMenuSub = (props: MenuSubProps) => {
  const {
    contentProps,
    labelProps,
    leadingItem,
    description,
    valueProps = '',
    ...restProps
  } = props;
  return (
    <SubMenu
      {...restProps}
      className="mx-menu-submenu"
      title={
        <div className="mx-menu-wrapper">
          <div
            className={`mx-menu-content-title ${
              description ? 'mx-menu-content-title-description' : ''
            }`}
          >
            <div className="mx-menu-icon" style={{ marginTop: description ? '4px' : '0px' }}>
              {leadingItem}
            </div>

            <div className="mx-menu-label-description">
              <CoreTypography
                sizeProps="m"
                weight="regular"
                typeProps="body"
                content={labelProps}
              />
              {description && (
                <CoreTypography
                  sizeProps="s"
                  weight="regular"
                  typeProps="body"
                  content={description}
                />
              )}
            </div>
          </div>
          <div>
            <CoreTypography sizeProps="m" weight="regular" typeProps="body" content={valueProps} />
          </div>
        </div>
      }
    >
      {contentProps}
    </SubMenu>
  );
};
