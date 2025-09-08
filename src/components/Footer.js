import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
           <Box sx={{
               height: '70px',
               bgcolor: palette.secondary.midNightBlue,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
           }}>
               <Box component='span' sx={{ color: palette.primary.main }}> All rights reserved by swetha @ 2025</Box>
           </Box>
        </>
    )
}

export default Footer
