import Head from 'next/head';
import { Layout, Space } from 'antd';
import SideBar from './SideBar';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const Lay_out = () => {
  return (
    <>
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
              <SideBar></SideBar>
            </Sider>
          </div>
          <Layout>
            <div className="ant-header">
              <Header>Header</Header>
            </div>
            <div className="ant-content">
              <Content style={contentStyle}>Content</Content>
            </div>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Lay_out;