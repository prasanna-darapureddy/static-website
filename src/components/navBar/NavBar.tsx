import { Box, Button, Typography, } from '@mui/material'
import { styles } from './NavBarStyles'
import { ArrowDropDown, LocalPhone, Menu } from '@mui/icons-material'

function NavBar() {
  return (
    <>
        <Box sx={styles.bgContainer}>
            <Box sx={styles.logPhoneContianer}>
                <Button sx={styles.logoButton}>
                    <Box component={'img'} src='/logo.png' alt='logo' sx={styles.logo}/>
                </Button>
                <Box sx={styles.phonecontainer}>
                    <LocalPhone />
                    <Typography>1-234-567-890</Typography>
                </Box>
            </Box>
            <Box sx={styles.menusContainer}>
                <Button sx={styles.menuButtons}>Products <ArrowDropDown/></Button>
                <Button sx={styles.menuButtons}>Resources <ArrowDropDown/></Button>
                <Button sx={styles.menuButtons}>Get a Demo <ArrowDropDown/></Button>
            </Box>
            <Box sx={styles.loginContainer}>
                <Button sx={styles.menuButtons}>Login</Button>
                <Button variant='outlined' sx={{...styles.menuButtons, ...styles.outlineMenu}}>Get Started</Button>
            </Box>       
        </Box>
        <Box sx={styles.MobileContainer}>
            <Box component={'img'} src='/logo.png' alt='logo' sx={styles.logo}/>
            <Menu/>
        </Box>
    </>
  )
}
export default NavBar