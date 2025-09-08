import React from 'react'
import {Box , styled } from '@mui/material';
import header from '../images/header.jpg';
import SearchInput from './SearchInput'

const Header = () => {

    const StyleHeader = styled(Box) (({ theme})=>(
        {
           display: "flex",
           justifyContent: 'center',
           alignItems:'center',
           backgroundImage: `url(${header})`,
           minHeight: 400,
           backgroundSize: 'cover',
           backgroundPosition:'center',
           backgroundRepeat: "no-repeat",
           backgroundColor: theme.palette.secondary.main

        }
    ));
    return (
       <>
          <StyleHeader>
             <SearchInput />
         </StyleHeader>
       </>
    )
}

export default Header
