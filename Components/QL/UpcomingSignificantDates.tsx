import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { Typography } from 'antd';
const { Title } = Typography;
import { checkNull } from '../../lib/helpers/utils';
import GenericDataComponent from './GenericDataComponent';
import UpcomingSignificantDatesInstance from './UpcomingSignificantDatesInstance';
import TabbedCards from './TabbedCards'

const UpcomingSignificantDates: React.FC = (): JSX.Element => {
    const data = useSelector((state) => state.place.data);
    const dataProperties = () => [
        {
            name: 'Date',
            key: 'upcommingSignificantDate_Date',
            value: checkNull(data?.upcommingSignificantDate_Date)
        },
        {
            name: 'Name',
            key: 'upcommingSignificantDate_Name_en',
            value: checkNull(data?.upcommingSignificantDate_Name_en)
        },
        {
            name: 'Name Current Culture',
            key: 'upcommingSignificantDate_Name_currentCulture',
            value: checkNull(data?.upcommingSignificantDate_Name_currentCulture)
        },
        {
            name: 'Description',
            key: 'upcommingSignificantDate_Description',
            value: checkNull(data?.upcommingSignificantDate_Description)
        },
        {
            name: 'Iconagraphy',
            key: 'upcommingSignificantDate_Day_Iconagraphy',
            value: checkNull(data?.upcommingSignificantDate_Day_Iconagraphy)
        }
    ]

    return (
            <TabbedCards title="Significant Dates">
                        <UpcomingSignificantDatesInstance />
                        <GenericDataComponent data={data} dataProperties={dataProperties} />
            </TabbedCards>
    );
}

export default UpcomingSignificantDates;