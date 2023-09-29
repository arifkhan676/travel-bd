import * as React from 'react';

import BgVideo from '../BgVideo/BgVideo';
import StepperBox from '../StepperBox-Home/StepperBox';
import Travel from '../TravelPan/Travel';



function Home() {


    return (

        <div>
            <StepperBox />
            <Travel />
            <BgVideo />
        </div>

    );
}

export default Home;