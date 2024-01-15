import React, { ReactNode } from 'react'
import { Menu, MenuItemProps } from "antd"
import { CoreTypography } from '../Typography/Typography'


export type MenuHeaderCustomProps = MenuItemProps & {
  contentHeader: string;
  iconProps?: ReactNode;
};
export type MenuItemCustomProps = MenuItemProps & {
  contentItem: string;
  leadingItem?: ReactNode;
  iconProps?: ReactNode;
  trailingItem?: ReactNode;
  description?: string;
  valueProps?: string;
};
const { Item } = Menu;
export const CoreDesignMenuHeader = (props: MenuHeaderCustomProps) => {
  const { contentHeader, ...restProps } = props;
  return (
    <Item className='mx-menu-header' {...restProps}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 0' }}>
        <CoreTypography sizeProps='m' weight='semibold' typeProps='body' content={contentHeader} />
      </div>
    </Item>
  );
};

export const CoreDesignMenuItem = (props: MenuItemCustomProps) => {
  const {
    contentItem,
    leadingItem,
    trailingItem,
    description = '',
    valueProps,
    ...restProps
  } = props;
  return (
    <Item className='mx-menu-item' {...restProps}>
      <div className='mx-menu-wrapper'>
        <div
          className={`mx-menu-content-title ${
            description ? 'mx-menu-content-title-description' : ''
          }`}
        >
          <div className='mx-menu-icon' style={{ marginTop: description ? '4px' : '0px' }}>
            {leadingItem}
          </div>

          <div className='mx-menu-label-description' style={{}}>
            <CoreTypography sizeProps='m' weight='regular' typeProps='body' content={contentItem} />
            {description && (
              <CoreTypography
                sizeProps='s'
                weight='regular'
                typeProps='body'
                content={description}
              />
            )}
          </div>
        </div>
        <div>
          {valueProps && (
            <CoreTypography sizeProps='m' weight='regular' typeProps='body' content={valueProps} />
          )}
        </div>
      </div>
    </Item>
  );
};
