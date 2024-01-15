import { Badge, BadgeProps, Space } from 'antd';
import React, { ReactNode } from 'react';

type CoreBadge = BadgeProps & {
  statusProps: "success" | "warning" | "information" | "error" | "neutral";
  iconProps?: ReactNode;
  content: string | ReactNode;
  textProps?: string;
};

export const CoreDesignBadge = (props: CoreBadge) => {
  const { statusProps, iconProps, content, textProps, ...restProps } = props;

  const BadgeContentFormat = () => {
    if (iconProps || textProps) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '8px' }}>
          {iconProps}
          <span>{textProps}</span>
        </div>
      );
    }
    return null;
  };
  return (
    <Space>
      <Badge {...restProps} count={BadgeContentFormat()} className={` badge-${statusProps}`}>
        {content}
      </Badge>
    </Space>
  );
};
