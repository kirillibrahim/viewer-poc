import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import FourZeroFourStyleWrapper from '../styled/404.styles';
import Image from '@iso/assets/images/rob.png';
const FourZeroFour = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <FourZeroFourStyleWrapper className="iso404Page">
        <div className="iso404Content">
        
          <h3>The Page is not found</h3>
        </div>

        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    </>
  );
}

export default FourZeroFour;
