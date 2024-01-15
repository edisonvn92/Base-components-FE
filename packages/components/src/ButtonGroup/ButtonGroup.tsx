import React, { ReactNode } from 'react';
import { CoreButtonProps } from '../Button/Button';

export interface ButtonGroupProps {
  content: CoreButtonProps[];
}
export const ButtonGroup = (props: ButtonGroupProps) => {
  const { content } = props;
  return <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>{content}</div>;
};
