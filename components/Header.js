/* eslint-disable @next/next/no-img-element */
import { Breadcrumb, Input, Badge, notification,Button, Drawer } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  SettingFilled,
  NotificationFilled,
  MenuOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import SideBar from './SideBar';

export default function Hea_Der() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [api, contextHolder] = notification.useNotification();
  const [apiMobile, contextHolderMobile] = notification.useNotification();

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
              <img src="spotify-2.svg" alt="" />
            </div>
            <div className="right">
              <p>New Album by Travis Scott</p>
              <span>1 day ago</span>
            </div>
          </div>
          <div className="notification-div">
            <div className="notification-left">
              <img src="nfc.png" alt="" />
            </div>
            <div className="right">
              <p>Payment completed</p>
              <span>2 days ago</span>
            </div>
          </div>
        </>
      ),
      placement,
      style: {
        top: '30px',
        left: '450px',
        width: '270px',
        position: 'absolute',
      },
      closeIcon: null,
    });
  };
  const openNotification1 = (placement) => {
    apiMobile.open({
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
              <img src="spotify-2.svg" alt="" />
            </div>
            <div className="right">
              <p>New Album by Travis Scott</p>
              <span>1 day ago</span>
            </div>
          </div>
          <div className="notification-div">
            <div className="notification-left">
              <img src="nfc.png" alt="" />
            </div>
            <div className="right">
              <p>Payment completed</p>
              <span>2 days ago</span>
            </div>
          </div>
        </>
      ),
      placement,
      style: {
        top: '90px',
        left: '-5px',
        width: '280px',
      },
      closeIcon: null,
    });
  };

  

  return (
    <div className="headerContainer">
      <div className="antBreadcrumb">
        <div className="bread">
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: <a href="">Dashboard</a>,
              },
            ]}
          />
        </div>
        <div className="dashboard">
          <p>Dashboard</p>
        </div>
      </div>

      <div className="rightSide">
        <div className="antSearch">
          <Input
            size="large"
            placeholder="Type Here..."
            prefix={<SearchOutlined />}
          />
        </div>

        <div className="signIn">
          <div className="userIcon">
            <UserOutlined />
          </div>
          <div className="signinPara">
            <p>Sign in</p>
          </div>
        </div>

        <div className="hamburger">
          <MenuOutlined onClick={showDrawer}></MenuOutlined>
          <Drawer
            // title="Basic Drawer"
            placement="left"
            onClose={onClose}
            open={open}
            closable={false}
            width="80%"
            className='sideDrawer'
          >
           <SideBar></SideBar>
          </Drawer>
        </div>

        <div className="settings">
          <SettingFilled onClick={showDrawer} />
          {/* <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer> */}
        </div>

        <div className="notification">
          {contextHolder}
          <Badge count={4} size="small" onClick={() => openNotification('top')}>
            <NotificationFilled />
          </Badge>
        </div>
        <div className="notification-mobile">
          {contextHolderMobile}
          <Badge
            count={4}
            size="small"
            onClick={() => openNotification1('top')}
          >
            <NotificationFilled />
          </Badge>
        </div>
      </div>
    </div>
  );
}
