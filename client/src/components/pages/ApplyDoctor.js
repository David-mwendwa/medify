import React from 'react';
import { Form, Col, Row, Input, TimePicker, Button } from 'antd';
import Dashboard from './Dashboard';

const ApplyDoctor = () => {
  const handleSubmit = (values) => {
    console.log('Success', values);
  };
  return (
    <>
      <h1 className='page-title'>Apply Doctor</h1>
      <hr />
      <Form layout='vertical' onFinish={handleSubmit}>
        <h1 className='card-title'>Personal Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='First Name'
              name='firstName'
              rules={[{ required: true }]}>
              <Input placeholder='First Name' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Last Name'
              name='lastName'
              rules={[{ required: true }]}>
              <Input placeholder='Last Name' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Phone Number'
              name='phoneNumber'
              rules={[{ required: true }]}>
              <Input placeholder='Phone Number' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Website'
              name='website'
              rules={[{ required: true }]}>
              <Input placeholder='Website' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Address'
              name='address'
              rules={[{ required: true }]}>
              <Input placeholder='Address' />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <h1 className='card-title'>Professional Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Specialization'
              name='specialization'
              rules={[{ required: true }]}>
              <Input placeholder='Specialization' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Experience'
              name='experience'
              rules={[{ required: true }]}>
              <Input placeholder='Experience' type='number' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Fee Per Consultation'
              name='feePerConsultation'
              rules={[{ required: true }]}>
              <Input placeholder='Fee Per Consultation' type='number' />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label='Timings'
              name='timings'
              rules={[{ required: true }]}>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <div className='d-flex justify-content-end'>
          <Button className='primary-button' htmlType='submit'>SUBMIT</Button>
        </div>
      </Form>
    </>
  );
};

export default ApplyDoctor;
