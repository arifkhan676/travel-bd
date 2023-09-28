import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Tanguar Haor, Sunamgonj,Bangladesh',
        imgPath:
            'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/300764600_629339388562929_155560908495387544_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHCqQTRx-WgYFBBRdSqzT4L42zUfdK3vm_jbNR90re-bxZXrIDdvY8mcFpJ7_UDu226kbufqxYyMs0Xz8DsY2kx&_nc_ohc=rUNftkRPoeAAX8FW03w&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCpu0JfVZzFL2vSb6Br27NI3o0fF99gTR5eNc2JXpIBQw&oe=65195AFC',
    },
    {
        label: 'Netrokona, Bangladesh',
        imgPath:
            'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/377787489_856824242481108_6824489526963183219_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHZGH6xXo4blgbZK7_Q3nN8wB2ZqEqAh-jAHZmoSoCH6Hd3X6MtMZABT0_Riw_CbKM1awe5_1iyyr5ojhd_tT--&_nc_ohc=Y3fx6XPCoQgAX-wzr0c&_nc_ht=scontent.fdac135-1.fna&oh=00_AfADXiz6adG3gRRI0D_iw9UagpnEQZt3fnzvA-ShGDAObw&oe=65198735',
    },
    {
        label: 'Saint Martin, Bangladesh',
        imgPath:
            'https://thebackpackers.net/wp-content/uploads/2016/05/Saint-Martin-Island-Bangladesh-4.jpg',
    },

];

function Home() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 2000, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{

                    alignItems: 'center',
                    height: 45,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 610,

                                    maxWidth: 2000,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default Home;