import React, { useCallback } from "react";

import { Select, SelectProps, Typography } from "antd";
import { CoreTypography } from "../Typography/Typography";
import { DownOutlined, InfoCircleOutlined } from "@ant-design/icons";

type PropsCoreSelect = SelectProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  optionProps: any[];
  placeholder?: string;
  name: string;
  sizeProps: 'large' | 'medium' | 'small';
  displayField?: string;
  valueField?: string;
  loading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  allowClear?: boolean;
  mode?: 'tags' | 'multiple' | undefined;
  label?: string;
  required?: boolean;
  helpText?: string;
  error?: boolean;
  defaultActiveFirstOption?: boolean;
};

const CoreDesignSelect = (props: PropsCoreSelect) => {
  const {
    optionProps,
    name,
    sizeProps,
    loading,
    displayField = 'label',
    valueField = 'value',
    allowClear = true,
    mode = undefined,
    label,
    required,
    helpText,
    error,
    defaultActiveFirstOption = true,
    placeholder,
    ...restProps
  } = props;

  const optionsFormat = useCallback(() => {
    if (Array.isArray(optionProps) && optionProps.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return optionProps.map((option: any, index: number) => {
        return {
          value: option[valueField],
          label: option[displayField],
        };
      });
    }
    return optionProps;
  }, [optionProps]);
  const renderIconError = useCallback(() => {
    return (
      <>
        {error && <InfoCircleOutlined rev='' style={{ color: "#EF4444" }} />}
        <DownOutlined rev=''/>
      </>
    );
  }, [error]);
  return (
    <>
      <CoreTypography content={`${label}`} sizeProps="m" typeProps="body" weight="regular" />
      <Select
        mode={mode}
        allowClear={allowClear}
        loading={loading}
        className="w-full"
        options={optionsFormat()}
        suffixIcon={renderIconError()}
        defaultActiveFirstOption={defaultActiveFirstOption}
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

export default CoreDesignSelect;
