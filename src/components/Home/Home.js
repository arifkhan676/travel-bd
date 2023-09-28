import * as React from 'react';

import Travel from '../TravelPan/Travel';
import BgVideo from '../BgVideo/BgVideo';
import StepperBox from '../StepperBox-Home/StepperBox';


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