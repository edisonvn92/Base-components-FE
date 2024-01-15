import { Radio, RadioProps } from 'antd';
import React, { ReactNode } from 'react';

type MxRadioProps = RadioProps & {
  label: ReactNode;
};

export const CoreDesignRadio = (props: MxRadioProps) => {
  const { label, ...restProps } = props;
  return (
    <Radio className='mx-radio' {...restProps}>
      {label}
    </Radio>
  );
};
