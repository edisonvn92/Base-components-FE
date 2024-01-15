import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { SpinProps } from 'antd/lib/spin';

export type LoadingProps = SpinProps & {
  sizeProps?: 'small' | 'medium' | 'large';
};
export const CoreDesignLoading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const { sizeProps = 'medium', ...restProps } = props;
  let fontSize;
  switch (sizeProps) {
    case 'small':
      fontSize = 16;
      break;
    case 'medium':
      fontSize = 24;
      break;
    case 'large':
      fontSize = 40;
      break;
    default:
      fontSize = 24;
      break;
  }
  const antIcon = <LoadingOutlined className="mx-color-brand-500" style={{ fontSize }} spin />;
  return <Spin indicator={antIcon} {...restProps} />;
};
