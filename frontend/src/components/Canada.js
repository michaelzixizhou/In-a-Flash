import React from "react"
import styled from 'styled-components';

const Wrapper = styled.div`
    justify-content: column;
`
const Head = styled.div`
    display: relative;
    flex: 1;
`

function Canada() {
    return (
        <Wrapper>
            <Head> Test</Head>
            <h1>This is Canada</h1>
            <div> Test</div>
        </Wrapper>
            
    );
}

export default Canada;
