/* eslint-disable @next/next/no-img-element */
import {
  Space,
  Table,
  Tag,
  Radio,
  Avatar,
  Tooltip,
  Progress,
  Upload,
  Button,
} from 'antd';
import {
  UserOutlined,
  AntDesignOutlined,
  UploadOutlined,
} from '@ant-design/icons';
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
        <div className="data-div">
          <img
            className="data-img"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-shopify.svg"
            alt=""
          />
          <p className="data-text">Soft UI Shopify Version</p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg" />
          <a href="https://ant.design">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg"
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    ),
    budget: '$14000',
    progress: (
      <Progress percent={60} format={(percent) => `${percent}`} size="small" />
    ),
  },
  {
    key: '2',
    name: (
      <>
        <div className="data-div">
          <img
            className="data-img"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-atlassian.svg"
            alt=""
          />
          <p className="data-text">Progress Track</p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg" />
          <a href="https://ant.design">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
        </Avatar.Group>
      </>
    ),
    budget: '$3000',
    progress: (
      <Progress percent={10} format={(percent) => `${percent}`} size="small" />
    ),
  },
  {
    key: '3',
    name: (
      <>
        <div className="data-div">
          <img
            className="data-img"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-slack.svg"
            alt=""
          />
          <p className="data-text">Fix Platform Errors</p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg" />
          <a href="https://ant.design">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
        </Avatar.Group>
      </>
    ),
    budget: 'Not Set',
    progress: (
      <Progress
        percent={100}
        format={() => <p style={{ color: 'black' }}>100</p>}
        size="small"
      />
    ),
  },
  {
    key: '4',
    name: (
      <>
        <div className="data-div">
          <img
            className="data-img"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-spotify.svg"
            alt=""
          />
          <p className="data-text"> Launch new Mobile App</p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg"
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    ),
    budget: 'Not Set',
    progress: (
      <Progress
        percent={100}
        format={() => <p style={{ color: 'black' }}>100</p>}
        size="small"
      />
    ),
  },
  {
    key: '5',
    name: (
      <>
        <div className="data-div">
          <img
            className="data-img"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/logos/logo-jira.svg"
            alt=""
          />
          <p className="data-text"> Add the New Landing Page</p>
        </div>
      </>
    ),
    avatar: (
      <>
        <Avatar.Group>
          <Avatar src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-4.jpg" />
          <a href="https://ant.design">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-1.jpg"
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-2.jpg"
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/face-3.jpg"
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </>
    ),
    budget: '$4000',
    progress: (
      <Progress
        percent={80}
        format={() => <p style={{ color: 'black' }}>80</p>}
        size="small"
      />
    ),
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
          size="small"
          pagination={false}
          columns={columns}
          dataSource={data}
          scroll={{
            x: 500,
          }}
        />
        {/* <Table
          className="mainTableMobile"
          size="small"
          pagination={false}
          columns={columns}
          dataSource={data}
          scroll={{
            x: 600,
          }}
        /> */}
        <div className="upload-container">
          <Upload >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
      </div>
    </>
  );
};
export default AntTable;
