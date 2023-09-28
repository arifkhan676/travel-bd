import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardBox from '../Card/CardBox';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Travel() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <p> Plan your next trip? </p>
            <h1> Next Destination </h1>
            <div style={{ display: 'flex', padding: '60px', marginLeft: '30px' }} >

                <CardBox image="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/362257356_831401325023400_5536691657882353744_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEzN2eKWbCJYziieRH0q1lenyceIFMIVS-fJx4gUwhVL3Ds-HEK5jUOW1rQI1ViAe7gt8q3MqgGCcH5Z_Lfw0kJ&_nc_ohc=NEos0Ld_PBMAX8cWXUU&_nc_ht=scontent.fdac135-1.fna&oh=00_AfDMhVYDWsMNO9xk35_eGETbtBzt0tHPqhGmmchPkWPp5w&oe=65193735" />

                <CardBox image='https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/360131450_827007265462806_28452968998178504_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHtfmvJ9gR0hyJGLfZF6M89GhMejlVFh0YaEx6OVUWHRlUINr5xlfl5vnU4gVQLVEGwGTsjogYyG2qpwpMZxFEF&_nc_ohc=M7g5rMO7RmcAX_DkBm_&_nc_oc=AQksohZSZIsCuRv0ruii8lVUnjMe_krSP9jr6BUMOFF-S3IA9wKbQy-Eja-qryA-YkI&_nc_ht=scontent.fdac135-1.fna&oh=00_AfD6uA_5ynJj4En9IZgq-GNq3wOBng6zRtQoFyh_5h3dQg&oe=651AF30F' />

                <CardBox image='https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/336924336_935925624080377_4702315157514866447_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHRR8rn9D4Z2Zn9VTQKXPCcVBPoUmtDFV9UE-hSa0MVX9yZILNb2HYHcYmruppUt6AQKJ-5X9oVdH27mZVRNuHS&_nc_ohc=kA1kSd5j24MAX-YH64G&_nc_ht=scontent.fdac5-1.fna&oh=00_AfCLtmDLutLQDKv3_ejnoVfOoPlJsSsqtCdWmO5nNco15w&oe=651A99F5' />

            </div>
            <div style={{ display: 'flex', padding: '60px', marginLeft: '30px' }} >

                <CardBox image="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/362257356_831401325023400_5536691657882353744_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEzN2eKWbCJYziieRH0q1lenyceIFMIVS-fJx4gUwhVL3Ds-HEK5jUOW1rQI1ViAe7gt8q3MqgGCcH5Z_Lfw0kJ&_nc_ohc=NEos0Ld_PBMAX8cWXUU&_nc_ht=scontent.fdac135-1.fna&oh=00_AfDMhVYDWsMNO9xk35_eGETbtBzt0tHPqhGmmchPkWPp5w&oe=65193735" />

                <CardBox image='https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/360131450_827007265462806_28452968998178504_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHtfmvJ9gR0hyJGLfZF6M89GhMejlVFh0YaEx6OVUWHRlUINr5xlfl5vnU4gVQLVEGwGTsjogYyG2qpwpMZxFEF&_nc_ohc=M7g5rMO7RmcAX_DkBm_&_nc_oc=AQksohZSZIsCuRv0ruii8lVUnjMe_krSP9jr6BUMOFF-S3IA9wKbQy-Eja-qryA-YkI&_nc_ht=scontent.fdac135-1.fna&oh=00_AfD6uA_5ynJj4En9IZgq-GNq3wOBng6zRtQoFyh_5h3dQg&oe=651AF30F' />

                <CardBox image='https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/336924336_935925624080377_4702315157514866447_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHRR8rn9D4Z2Zn9VTQKXPCcVBPoUmtDFV9UE-hSa0MVX9yZILNb2HYHcYmruppUt6AQKJ-5X9oVdH27mZVRNuHS&_nc_ohc=kA1kSd5j24MAX-YH64G&_nc_ht=scontent.fdac5-1.fna&oh=00_AfCLtmDLutLQDKv3_ejnoVfOoPlJsSsqtCdWmO5nNco15w&oe=651A99F5' />

            </div>
        </div>
    );
}
