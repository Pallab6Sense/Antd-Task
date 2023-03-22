/* eslint-disable @next/next/no-img-element */
import { Button, Divider } from 'antd';
import {
  DashboardFilled,
  TabletFilled,
  ContainerFilled,
  FlagFilled,
  GithubFilled,
  CalendarFilled,
  ShopFilled,
} from '@ant-design/icons';
export default function SideBar() {
  return (
    <div className="sideContainer">
      <div className="heading">
        <div className="icon">
          <img
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logo-ct-black.png"
            alt=""
          />
        </div>

        <div className="paragraph">
          <p>Muse Dashboard</p>
        </div>
      </div>
      <Divider></Divider>

      <div className="mainitems">
        <div className="items">
          <div className="items-icon">
            <Button icon={<DashboardFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>Dashboard</p>
          </div>
        </div>
        <div className="items">
          <div className="items-icon">
            <Button icon={<TabletFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>Tabls</p>
          </div>
        </div>
        <div className="items">
          <div className="items-icon">
            <Button icon={<ContainerFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>Billngs</p>
          </div>
        </div>
        <div className="items">
          <div className="items-icon">
            <Button icon={<FlagFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>RTL</p>
          </div>
        </div>
      </div>

      <div className="accountPages">
        <p>ACCOUNT PAGES</p>
        <div className="items">
          <div className="items-icon">
            <Button icon={<GithubFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>Profile</p>
          </div>
        </div>
        <div className="items">
          <div className="items-icon">
            <Button icon={<CalendarFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>Sign In</p>
          </div>
        </div>
        <div className="items">
          <div className="items-icon">
            <Button icon={<ShopFilled />}></Button>
          </div>
          <div className="items-paragraph">
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
