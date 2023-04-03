import React from "react";
export function Hamburger({
  showDrawer,
  onClose,
  open
}) {
  return <div className="hamburger">
          <MenuOutlined onClick={showDrawer}></MenuOutlined>
          <Drawer // title="Basic Drawer"
    placement="left" onClose={onClose} open={open} closable={false} width="80%" className='sideDrawer'>
           <SideBar></SideBar>
          </Drawer>
        </div>;
}
  