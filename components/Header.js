import { Breadcrumb, Input,Drawer } from 'antd';
import { SearchOutlined, UserOutlined,SettingFilled,NotificationFilled } from '@ant-design/icons';
import { useState } from 'react';

export default function Hea_Der() {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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

        <div className="settings">
        <SettingFilled onClick={showDrawer} />
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        </div>
        
        <div className="notification">
        <NotificationFilled />
        </div>

      </div>
    </div>
  );
}
