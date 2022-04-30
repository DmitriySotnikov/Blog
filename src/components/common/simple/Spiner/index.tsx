import React from 'react';
import {Spin, Space, Row, Col} from 'antd';

export const Spine = () => {
    return (
        <Row style={{width: '100vw', justifyContent: 'center'}}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </Row>
    );
};