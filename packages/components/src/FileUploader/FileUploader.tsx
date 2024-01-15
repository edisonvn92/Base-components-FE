import { Upload, UploadProps } from 'antd';
import React, { ReactNode } from 'react';

export type UploadFileProps = UploadProps & {
  uploadInputType: 'button' | 'dragAndDrop';
  button?: ReactNode;
  helpText?: string;
};

export const CoreDesignUploadFile: React.FC<UploadFileProps> = (props: UploadFileProps) => {
  const { uploadInputType, button, ...restProps } = props;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {uploadInputType === 'button' ? (
        <Upload listType="text" {...restProps}>
          {button}
        </Upload>
      ) : (
        <>/</>
      )}
    </>
  );
};
