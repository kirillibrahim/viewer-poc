import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { Typography } from 'antd';
const { Title } = Typography;
import { checkNull } from '../../lib/helpers/utils';
import GenericDataComponent from './GenericDataComponent';
import DemographicsInstance from './DemographicsInstance.tsx';
import TabbedCards from './TabbedCards'

const Demographics: React.FC = (): JSX.Element => {
    const data = useSelector((state) => state.place.data);
    const dataProperties = () =>
        [
            {
                name: 'Demographics growth rate',
                key: 'demographicsGrowthRate',
                value: checkNull(data?.demographicsGrowthRate)
            }
        ]
        ;

    return (
            <TabbedCards title="Demographics">
                <DemographicsInstance />
                <GenericDataComponent data={data} dataProperties={dataProperties} />
            </TabbedCards>                        
    );
}

export default Demographics;