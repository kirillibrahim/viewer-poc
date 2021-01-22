import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import FiveZeroZeroStyleWrapper from '../styled/500.styles';
import Image from '@iso/assets/images/rob.png';

const FiveHundred = () => {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <FiveZeroZeroStyleWrapper className="iso500Page">
        <div className="iso500Content">
          <h3>Internal Server Error</h3>
        </div>

        <div className="iso500Artwork">
          <img alt="#" src={Image} />
        </div>
      </FiveZeroZeroStyleWrapper>
    </>
  );
}

export default FiveHundred;
