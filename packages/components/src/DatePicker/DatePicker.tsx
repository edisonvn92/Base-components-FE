import { CoreTypography } from "../Typography/Typography";
import { DatePicker, DatePickerProps } from "antd";
import { useCallback } from "react";
import { CalendarOutlined, InfoCircleOutlined } from "@ant-design/icons";
import React from "react";

export type CoreDesignDatePickerProps = DatePickerProps & {
  sizeProps?: 'large' | 'medium' | 'small';
  error?: boolean;
  label?: string;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
};

export const CoreDesignDatePicker = (props: CoreDesignDatePickerProps) => {
  const {
    sizeProps = 'large',
    label = 'Label',
    error,
    helpText,
    placeholder,
    required,
    ...restProps
  } = props;
  const classError = error ? 'error' : '';

  const renderIconError = useCallback(() => {
    return (
      <>
        {error && <InfoCircleOutlined style={{ color: "#EF4444" }} rev='' />}
        <CalendarOutlined rev=''/>
      </>
    );
  }, [error]);

  return (
    <>
      <div className="flex">
        <CoreTypography
          content={label}
          sizeProps="m"
          typeProps="body"
          weight="regular"
          className="inline-block"
        />
        {required && <span className="required">*</span>}
      </div>
      <DatePicker
        className={`size-date-picker-${sizeProps} ${classError}`}
        suffixIcon={renderIconError()}
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
