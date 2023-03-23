import React from 'react';

const Dashboard = () => {
  return (
    <div className='main p-2'>
      <div className='d-flex layout'>
        <div className='sidebar'>Sidebar</div>

        <div className='content'>
          <div className='header'>Header</div>
          <div className='body'>Body</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
