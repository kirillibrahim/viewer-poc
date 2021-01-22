import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { Typography } from 'antd';
const { Title } = Typography;
import { checkNull } from '../../lib/helpers/utils'
import GenericDataComponent from './GenericDataComponent';
import GeoLocationInstance from './GeoLocationInstance';
import TabbedCards from './TabbedCards'

const GeoLocation: React.FC = (): JSX.Element => {
    const data = useSelector((state) => state.place.data);

    const dataProperties = () =>
        [
            {
                name: 'Longitude',
                key: 'longitude',
                value: checkNull(data?.longitude)
            },
            {
                name: 'Latitude',
                key: 'latitude',
                value: checkNull(data?.latitude)
            },
            {

                name: 'StreetAddress',
                key: 'geo.address.streetAddress',
                value: checkNull(data?.geo?.address?.streetAddress)
            },
            {
                name: 'Google map',
                key: 'hasMap',
                value: checkNull(data?.hasMap)
            }
            , {
                name: 'PostalCode',
                key: 'geo.address.postalCode', 
                value: checkNull(data?.geo?.address?.postalCode)
            },
            {
                name: 'AddressCountry',
                key: 'geo.address.addressCountry',
                value: checkNull(data?.geo?.address?.addressCountry)
            },
            {
                name: 'Elevation',
                key: 'geo.address.elevation',
                value: checkNull(data?.geo?.address?.elevation)
            },
        ]
        ;

    return (
        <TabbedCards title="GeoLocation">
            <GeoLocationInstance />
            <GenericDataComponent data={data} dataProperties={dataProperties} />
        </TabbedCards>
    );
}

export default GeoLocation;