import {
  DollarCircleFilled,
  UserOutlined,
  HeartFilled,
  ShoppingFilled,
} from '@ant-design/icons';
import { Button } from 'antd';

export default function TopGrid() {
  return (
    <>
      <div className="gridContainer">
        <div className="descDiv">
          <div className="desc">
            <p>Today’s Sales</p>
            <p className="bold">
              $53,000 <sub>+30%</sub>
            </p>
          </div>

          <div className="descIcon">
            <Button
              type="primary"
              size="large"
              icon={<DollarCircleFilled />}
            ></Button>
          </div>
        </div>

        <div className="descDiv">
          <div className="desc">
            <p>Today’s Users</p>
            <p className="bold">
              3,200 <sub>+20%</sub>
            </p>
          </div>

          <div className="descIcon">
            <Button
              type="primary"
              size="large"
              icon={<UserOutlined />}
            ></Button>
          </div>
        </div>

        <div className="descDiv">
          <div className="desc">
            <p>New Clients</p>
            <p className="bold">
              +1,200 <sub style={{ color: 'red' }}>-20%</sub>
            </p>
          </div>

          <div className="descIcon">
            <Button type="primary" size="large" icon={<HeartFilled />}></Button>
          </div>
        </div>

        <div className="descDiv">
          <div className="desc">
            <p>New Orders</p>
            <p className="bold">
              $13,200 <sub>+10%</sub>
            </p>
          </div>

          <div className="descIcon">
            <Button 
              type="primary"
              size="large"
              icon={<ShoppingFilled />}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
