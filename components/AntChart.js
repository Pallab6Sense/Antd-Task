import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
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
      type: '08',
      sales: 630,
    },
    {
      type: '09',
      sales: 900,
    }
  ];
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
    radius: [4, 4, 0, 0],
  },
    color: '#2266FD',
    

    meta: {
      
      sales: {
        alias: 'sales',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));