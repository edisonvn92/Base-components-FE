import React from 'react';
import { Switch, SwitchProps } from 'antd';

type Props = SwitchProps & {
  label?: string;
};

export const CoreDesignToggle = (props: Props) => {
  const { label = '', ...restProps } = props;
  return (
    <div className="content">
      <Switch className="mx-toggle" {...restProps} />
      <div className="ml-[8px]">{label}</div>
    </div>
  );
};
