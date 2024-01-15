import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { ReactNode } from 'react';
import { CoreTypography } from '../Typography/Typography';

export type TextFieldProps = InputProps & {
  sizeProps?: 'large' | 'medium' | 'small';
  label?: string;
  required?: boolean;
  disabled?: boolean;
  wordCount?: number;
  leftIcon?: boolean;
  leftIconSwap?: ReactNode;
  rightIcon?: boolean;
  rightIconSwap?: ReactNode;
  placeholder?: string;
  helpText?: string;
  error?: boolean;
};

export const CoreTextField = (props: TextFieldProps) => {
  const {
    sizeProps = 'large',
    label = '',
    required,
    disabled,
    wordCount,
    leftIcon,
    leftIconSwap,
    rightIcon,
    rightIconSwap,
    placeholder,
    helpText,
    error,
    ...restProps
  } = props;

  const classError = error ? 'error' : '';
  return (
    <>
      <CoreTypography content={`${label}`} sizeProps="m" typeProps="body" weight="regular" />
      <Input
        className={`${sizeProps} ${classError}`}
        status={error ? 'error' : undefined}
        disabled={disabled}
        maxLength={wordCount}
        prefix={leftIcon ? leftIconSwap : undefined}
        suffix={rightIcon ? rightIconSwap : undefined}
        placeholder={placeholder}
        {...restProps}
      />
      {helpText && (
        <CoreTypography
          content={`${helpText}`}
          sizeProps="xs"
          typeProps="body"
          weight="regular"
          type={error ? 'danger' : undefined}
        />
      )}
    </>
  );
};
