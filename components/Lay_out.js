import Head from 'next/head';
import { Layout, Space } from 'antd';
import SideBar from './SideBar';
import Hea_Der from './Header';
import TopGrid from './TopGrid';
import AntTable from './AntTable';
import AntTimeline from './AntTimeline';
const { Header, Sider, Content } = Layout;
import AntChart from './AntChart';
const Lay_out = () => {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container">
      <Layout>
        <div className="ant-sider">
          <Sider>
            <SideBar />
          </Sider>
        </div>
        <Layout>
          <Header className="ant-header">
            <Hea_Der />
          </Header>
          <div></div>
          <Content className="ant-content">
            <TopGrid></TopGrid>
            <div className="antColumnChart">
              <AntChart />
            </div>
            <div className="ant-table-timeline">

              <div className="antTable">
                <AntTable />
              </div>
              <div className="antTimeline">
                <AntTimeline />
              </div>
              
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  </>;
};

export default Lay_out;
