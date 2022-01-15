
import React from 'react'
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';

function Home(){
    return(
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 80px);
    padding: 0 46px;
    position: relative;
    overflow: hidden;

    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`