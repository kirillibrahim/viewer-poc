import React from 'react';
import { useSelector } from 'react-redux';
import basicStyle from '@iso/assets/styles/constants';
import { Card } from 'antd';
import { Typography, Divider, Space } from 'antd';
const { Title, Paragraph, Text } = Typography;

import {
    newbornImage,
    growthImage,
    genderImage,
    ageImage
} from "@iso/assets";

import SymmetricBarChart from '../Charts/AntDesign/SymmetricBarChart'
import HorizontalStackedBarChart from '../Charts/G2/HorizontalStackedBarChart'

const DemographicsInstance:React.FC = (): JSX.Element => {
    const data = useSelector((state) => state.place.data);

    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <>
            <Card>
            <Title level={4} style={{textAlign: 'center'}}>Age & Gender</Title>
                        <img src={ageImage} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}  />
                        
                        <div style={{margin: 'auto', width: '50%' }}>
                                <SymmetricBarChart />
                                </div>
                        <Title level={4} style={{textAlign: 'center'}}>Growth Rate</Title>
                        <img src={newbornImage} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />                        
                            <div style={{margin: 'auto', width: '50%'}}><img src={growthImage} />
                            {data && data.demographicsGrowthRate &&
                                <Text strong>{data.demographicsGrowthRate}</Text>
                            }</div>
                            <img src={genderImage} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />                        
                            <Title level={4} style={{textAlign: 'center'}}>Genders</Title>
                                <HorizontalStackedBarChart />
            </Card>
        </>
    );
}

export default DemographicsInstance;