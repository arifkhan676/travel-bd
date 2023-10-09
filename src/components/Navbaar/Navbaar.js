import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contextAPI, contextAPI2 } from '../../App';
import { Badge } from '@mui/material';
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';

const pages = ['Home', 'Destinations', 'Stories'];
const settings = ['Profile', 'Account', 'Signup', 'Logout'];

function Navbaar() {

    const [user, setUser] = React.useContext(contextAPI2);

    // console.log(user);

    const [value, setValue] = React.useContext(contextAPI)


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    const cartClick = () => {
        navigate(`/CartProducts/${value.id}`)
    }

    const SignOutX = () => {

        signOut(auth).then(() => {

            const signOutData = {
                isLogged: true,
                name: '',
                email: '',
                photoURL: ''
            }
            setUser(signOutData)
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to='/' > Travel BD </NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to='/' > Home <br></br> </NavLink>

                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to='/Stories' > Stories </NavLink>

                            </MenuItem>

                        </Menu>

                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink style={{ marginRight: '30px', color: 'white', textDecoration: 'none' }} to='/' > Home  </NavLink>
                            <NavLink style={{ marginRight: '30px', color: 'white', textDecoration: 'none' }} to='/' > Destinations  </NavLink>
                            <NavLink style={{ marginRight: '30px', color: 'white', textDecoration: 'none' }} to='/Stories' > Stories  </NavLink>
                        </Button>

                    </Box>

                    <Typography>
                        <NavLink to='/login' style={{ color: 'white', marginRight: '30px', textDecoration: 'none' }} > Login </NavLink>
                    </Typography>

                    <Typography>
                        {
                            user.isLogged ? <Button onClick={SignOutX} style={{ color: 'white', marginRight: '30px', textDecoration: 'none' }} > Sign Out </Button>
                                : <NavLink to='/Signup' style={{ color: 'white', marginRight: '30px', textDecoration: 'none' }} > Sign Up </NavLink>

                        }

                    </Typography>

                    <Badge onClick={() => { cartClick(value.id) }} badgeContent={value.length} color="secondary" style={{ marginRight: '30px' }}>
                        <ShoppingCartIcon />
                    </Badge>




                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open settings">

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={user.photoURL} />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (

                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> {setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbaar;