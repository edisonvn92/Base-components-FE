import React, { ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';

export type CoreButtonProps = ButtonProps & {
  typeProps: 'primary' | 'cta' | 'secondary' | 'inverse' | 'danger' | 'warning';
  sizeProps?: 'large' | 'medium' | 'small';
  appearanceProps?: 'filled' | 'outlined';
  modeProps?: 'text' | 'icon';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  text?: string;
  className?: string;
  family?: 'sans-serif' | 'serif';
  hidden?: boolean;
}

export const CoreDesignButton = (props: CoreButtonProps) => {
  const {
    typeProps,
    sizeProps = 'large',
    appearanceProps = 'filled',
    modeProps = 'text',
    leftIcon,
    rightIcon,
    label = 'button',
    className = '',
    family = 'sans-serif',
    ...restProps
  } = props;
  return (
    <Button
      {...restProps}
      className={`size-button-${sizeProps} button-${typeProps}-${appearanceProps} font-family-${family} ${className}`}
    >
      <div className="flex justify-center">
        {leftIcon || ''}
        {modeProps !== 'icon' && label ? label : ''}
        {rightIcon || ''}
      </div>
    </Button>
  );
};
