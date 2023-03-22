/* eslint-disable @next/next/no-img-element */
import { Space, Table, Tag, Radio, Avatar, Tooltip, Progress } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
const columns = [
  {
    title: 'Companies',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Members',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
    key: 'budget',
  },
  {
    title: 'Completion',
    key: 'progress',
    dataIndex: 'progress',
  },
];
const data = [
  {
    key: '1',
    name: (
      <>
        <div className='data-div'>
          <img
            className='data-img'
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-shopify.svg"
            alt=""
          />
          <p className='data-text'>
            Soft UI Shopify Version
          </p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://joesch.moe/api/v1/random?key=1" />
          <a href="https://ant.design">
            <Avatar
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    ),
    budget: '$14000',
    progress: <Progress percent={60} size="small" />,
  },
  {
    key: '2',
    name: (
      <>
        <div className='data-div'>
          <img
            className='data-img'
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-atlassian.svg"
            alt=""
          />
          <p className='data-text'>Progress Track</p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://joesch.moe/api/v1/random?key=1" />
          <a href="https://ant.design">
            <Avatar
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    ),
    budget: '$3000',
    progress: <Progress percent={10} size="small" />,
  },
  {
    key: '3',
    name: (
      <>
        <div className='data-div'>
          <img
            className='data-img'
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-slack.svg"
            alt=""
          />
          <p className='data-text'>
            Fix Platform Errors
          </p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://joesch.moe/api/v1/random?key=1" />
          <a href="https://ant.design">
            <Avatar
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    ),
    budget: 'Not Set',
    progress: <Progress percent={100} size="small" />,
  },
];
const AntTable = () => {
  return (
    <>
      <div className="table">
        <div className="tableTop">
          <div className="tableHeading">
            <p>Projects</p>
            <p className="tableDesc">
              done this month <span style={{ color: '#1890ff' }}>+40%</span>
            </p>
          </div>
          <div className="button">
            <Radio.Group>
              <Radio.Button>All</Radio.Button>
              <Radio.Button>Online</Radio.Button>
              <Radio.Button>Stores</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <Table
          className="mainTable"
          size="large"
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  );
};
export default AntTable;
