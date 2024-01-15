import { Modal, ModalProps } from 'antd';
import React, { ReactNode } from 'react';

export type CoreDialogProps = ModalProps & {
  body: ReactNode;
};

export const CoreDesignDialog = (props: CoreDialogProps) => {
  const { body, ...restProps } = props;
  return <Modal {...restProps}>{body}</Modal>;
};
