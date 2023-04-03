import { Drawer } from 'antd';
import React from 'react';
import SideBar from './SideBar';
import { MenuOutlined } from '@ant-design/icons';
function Hamburger({ showDrawer, onClose, open }) {
  return (
    <div className="hamburger">
      <MenuOutlined onClick={showDrawer}></MenuOutlined>
      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        closable={false}
        width="80%"
        className="sideDrawer"
      >
        <SideBar />
      </Drawer>
    </div>
  );
}

export default Hamburger;
