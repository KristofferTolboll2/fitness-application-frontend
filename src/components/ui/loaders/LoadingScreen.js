import React from 'react';
import Loader from 'react-loader-spinner';
import { ClimbingBoxLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
    width: 50%;
    margin: auto;
`

export default function LoadingScreen() {
    return (
        <div>
            <h1>My Fitness App</h1>
            <div style={{paddingTop: '300px'}}>
            <ClimbingBoxLoader
            color={"#BFD736"}
            size={70}
            css={override}
            loading={true}/>
            </div>
        </div>
    )
}
