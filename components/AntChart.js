import ReactDOM from 'react-dom';
// import { Column } from '@ant-design/plots';
import dynamic from 'next/dynamic';
const Column = dynamic(
  () => import('@ant-design/plots').then(({ Column }) => Column),
  { ssr: false }
);
const data = [
  {
    type: '01',
    sales: 850,
  },
  {
    type: '02',
    sales: 600,
  },
  {
    type: '03',
    sales: 500,
  },
  {
    type: '04',
    sales: 620,
  },
  {
    type: '05',
    sales: 900,
  },
  {
    type: '06',
    sales: 500,
  },
  {
    type: '07',
    sales: 900,
  },
  {
    type: '8',
    sales: 630,
  },
  {
    type: '9',
    sales: '900',
  },
];
const AntChart = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
    height: 300,
    width: 700,
    label: {
      style: {
        color: '#FFFFFF', // set the text color to gray
      },
    },
    color: 'white',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  const configMobile = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
    height: 190,
    width: 270,
    label: {
      style: {
        color: '#FFFFFF', // set the text color to gray
      },
    },
    color: 'white',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return (
    <>
      <div className="antChart">
        <Column {...config} />
      </div>
      <div className="antChartMobile">
        <Column {...configMobile} />
      </div>
      <div className="chartDesc">
        <p style={{ fontWeight: 'bold', margin: '8px 0px' }}>Active Users</p>
        <p style={{ color: '#999898', fontWeight: '600', margin: '8px 0px' }}>
          than last week <span style={{ color: '#52c41a' }}>+23%</span>{' '}
        </p>
        <p style={{ color: '#999898' }}>
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </p>
      </div>
      <div className="bottomDesc">
        <div>
          <h1>3,6K</h1>
          <p>Users</p>
        </div>

        <div>
          <h1>3,6K</h1>
          <p>Users</p>
        </div>
        <div>
          <h1>3,6K</h1>
          <p>Users</p>
        </div>
        <div>
          <h1>3,6K</h1>
          <p>Users</p>
        </div>
      </div>
    </>
  );
};
export default AntChart;
