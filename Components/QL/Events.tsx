import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { Typography } from 'antd';
const { Title } = Typography;
import { checkNull } from '../../lib/helpers/utils'
import GenericDataComponent from './GenericDataComponent';
import EventsInstance from './EventsInstance';
import TabbedCards from './TabbedCards'

const Events: React.FC = (): JSX.Element => {
    const data = useSelector((state) => state.place.data);
    const dataProperties = (e) =>
        [
            {
                name: 'Start date',
                key: 'startDate',
                value: checkNull(e?.startDate) //TODO: Change startDate to DateTimeOffset https://github.com/RehanSaeed/Schema.NET/issues/169 
            },
            {
                name: 'Name',
                key: 'name',
                value: checkNull(e?.name)
            },
            {
                name: 'Description',
                key: 'description',
                value: checkNull(e?.description)
            },
            {
                name: 'Image',
                key: 'image',
                value: checkNull(e?.image)
            },
            {
                name: 'About',
                key: 'about',
                value: checkNull(e?.about)
            }
        ];

    const nestedArrays = ['About'];
    return (
            <TabbedCards title="Events">
                        <EventsInstance />
                        <GenericDataComponent data={data.event} dataProperties={dataProperties} nestedArrays={nestedArrays} />
            </TabbedCards>
    );
}

export default Events;