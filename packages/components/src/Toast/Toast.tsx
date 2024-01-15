import { notification } from "antd";
import React, { ReactNode } from "react";
import GetIcon from "../Icons/Icons";

export type ToastProps = {
    icon?: string;
    header: string;
    description?: string;
    placement?: 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}
export const CoreDesignToast = (props: ToastProps) => {
    const [api, contextHolder] = notification.useNotification();
    const {icon = 'IoCheckmarkCircleSharp',
         header, description, placement} = props;
    const openNotification = () => {
        api.open({
        message: header,
        description,
        icon: <GetIcon icon={icon} />,
        placement
        });
    };
    return {
        openNotification
    }
}