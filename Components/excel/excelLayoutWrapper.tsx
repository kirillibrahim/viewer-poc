import React from 'react';
import { ExcelLayoutContentWrapper } from './excelLayoutWrapper.style';

 const ExcelLayoutWrapper = (props) => (
  <ExcelLayoutContentWrapper
    className={
      props.className != null
        ? `${props.className} isoLayoutContentWrapper`
        : 'isoLayoutContentWrapper'
    }
    {...props}
  >
    {props.children}
  </ExcelLayoutContentWrapper>
);

export default ExcelLayoutWrapper;