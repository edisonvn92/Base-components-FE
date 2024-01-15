import { Pagination, PaginationProps } from 'antd';
import React from 'react';

export type CorePaginationProps = PaginationProps 

export const CoreDesignPagination = (props: CorePaginationProps) => {
  const {...restProps} = props;
  return (
    <Pagination {...restProps}/>
  )
}
