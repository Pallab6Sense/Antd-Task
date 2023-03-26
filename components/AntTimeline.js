import { Button, Timeline } from 'antd';
import { useState } from 'react';
const AntTimeline = () => {
  const [reverse, setReverse] = useState(false);
  const handleClick = () => {
    setReverse(!reverse);
  };
  return (
   <>
   
      <div className="timelineTop">
        <div className="tableHeading">
          <p style={{fontWeight:'700'}}>Orders History</p>
          <p className="tableDesc">
            This month <span style={{ color: '#52c41a' }}>+20%</span>
          </p>
        </div>
      </div>
      <div className="timeLine">
        <Timeline
          pending="Recording..."
          reverse={reverse}
          items={[
            {
              color: 'green',
              children: (
                <>
                  <p style={{fontWeight:'bold'}}>$2,400 - Redesign store</p>
                  <p style={{fontWeight:'520',color:'#999898'}}> 09 JUN 7:20 PM</p>
                </>
              ),
            },
            {
              color: 'green',

              children: (
                <>
                  <p style={{fontWeight:'bold'}}>New order #3654323</p>
                  <p style={{fontWeight:'520',color:'#999898'}}> 08 JUN 12:20 PM</p>
                </>
              ),
            },
            {
              children: (
                <>
                  <p style={{fontWeight:'bold'}}>New card added for order #4826321</p>
                  <p style={{fontWeight:'520',color:'#999898'}}> 02 JUN 2:45 PM</p>
                </>
              ),
            },
            {
                children: (
                    <>
                      <p style={{fontWeight:'bold'}}>Unlock folders for development</p>
                      <p style={{fontWeight:'520',color:'#999898'}}> 18 MAY 1:30 PM</p>
                    </>
                  ),
            },
            {
                color:'gray',
                children: (
                    <>
                      <p style={{fontWeight:'bold'}}>New order #46282344</p>
                      <p style={{fontWeight:'520',color:'#999898'}}>14 MAY 3:30 PM</p>
                    </>
                  ),
            },
            
          ]}
        />
        <Button
          type="primary"
          style={{
            marginTop: 16,
            width:'100%'
          }}
          onClick={handleClick}
        >
         Reverse
        </Button>
      </div>
      </>
  );
};
export default AntTimeline;
