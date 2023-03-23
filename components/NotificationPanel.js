/* eslint-disable @next/next/no-img-element */
import { Breadcrumb, Input, Drawer, Badge, Avatar, notification } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  SettingFilled,
  NotificationFilled,
  BorderTopOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
export default function NotificationPanel() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.open({
      description: (
        <>
          <div className="notification-div">
            <div className="notification-left">
              <img
                src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>New message from Sophie</p>
              <span>13 minutes ago</span>
            </div>
          </div>
          <div className="notification-div">
            <div className="notification-left">
              <img
                src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>New message from Sophie</p>
              <span>13 minutes ago</span>
            </div>
          </div>
          <div className="notification-div">
            <div className="notification-left">
              <img
                src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>New message from Sophie</p>
              <span>13 minutes ago</span>
            </div>
          </div>
        </>
      ),
      placement,
      style: {
        top: '50px',
        left: '570px',
        width: '270px',
      },
      closeIcon: null,
    });
  };
  return (
    <>
      {contextHolder}
      <Badge count={4} size="small" onClick={() => openNotification('top')}>
        <NotificationFilled />
        <NotificationPanel></NotificationPanel>
      </Badge>
    </>
  );
}
