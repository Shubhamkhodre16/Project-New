// "use client"
// import { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton } from '@mui/material';
// import { Menu as MenuIcon } from '@mui/icons-material';
// import Link from 'next/link';
// import logo from '../../../public/assets/img/logo.svg';
// import Image from 'next/image';
// export default function Navbar() {
  
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
  
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMenuAnchor(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMenuAnchor(null);
//   };

//   // Render the mobile menu
//   const mobileMenu = (
//     <Menu
//       anchorEl={mobileMenuAnchor}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/">Home</Link></MenuItem>
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/about">About Us</Link></MenuItem>
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/case-studies">Case Studies</Link></MenuItem>
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/services">Services</Link></MenuItem>
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/blog">Blog</Link></MenuItem>
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/start-up">Start Up</Link></MenuItem>
//       <MenuItem onClick={handleMobileMenuClose}><Link href="/contact-us">Contact Us</Link></MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="sticky" style={{backgroundColor:'transparent',color:'black',paddingLeft:'100px',paddingTop:'10px',paddingBottom:'5px',paddingRight:'100px' }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             <Link href="/" passHref>
            
//               {/* <img src={logo} alt="Logo" style={{ height: '40px' }} /> */}
              
//             <Image src={logo} alt='logo' />
//             </Link>
//           </Typography>

      
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }} style={{marginRight:'30px',}} >
//             <Button color="inherit"><Link href="/" style={{fontWeight:'100',fontSize:'18px'}} >Home</Link></Button>
//             <Button color="inherit"><Link href="/about" style={{fontWeight:'100',fontSize:'18px'}} >About Us</Link></Button>
//             <Button color="inherit"><Link href="/case-studies" style={{fontWeight:'100',fontSize:'18px'}} >Case Studies</Link></Button>

            
//             <Button color="inherit" style={{fontWeight:'100',fontSize:'18px'}} onClick={handleMenuOpen}>
//               Services
//             </Button>
//             <Menu
//               anchorEl={anchorEl}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//               open={isMenuOpen}
//               onClose={handleMenuClose}
//             >
//               <MenuItem onClick={handleMenuClose}><Link href="/service-1">-RUBY ON RAILS</Link></MenuItem>
//               <MenuItem onClick={handleMenuClose}><Link href="/service-2">-REACT JS</Link></MenuItem>
//               <MenuItem onClick={handleMenuClose}><Link href="/service-3">-NODE JS</Link></MenuItem>
//               <MenuItem onClick={handleMenuClose}><Link href="/service-1">-ANGULAR JS</Link></MenuItem>
//               <MenuItem onClick={handleMenuClose}><Link href="/service-1">-END TO END FULL STACK DEVELOPMENT</Link></MenuItem>
//               <MenuItem onClick={handleMenuClose}><Link href="/service-1">-UI/UX</Link></MenuItem>  
//               <MenuItem onClick={handleMenuClose}><Link href="/service-1">-AWS</Link></MenuItem>
//               <MenuItem onClick={handleMenuClose}><Link href="/service-1">-HEROKU</Link></MenuItem>
//             </Menu>

//             <Button color="inherit" ><Link href="/blog" style={{fontWeight:'100',fontSize:'18px'}}>Blog</Link></Button>
//             <Button color="inherit"><Link href="/start-up" style={{fontWeight:'100',fontSize:'18px'}}>Start Up</Link></Button>
//             <Button color="inherit" ><Link href="/contact-us" style={{fontWeight:'100',fontSize:'18px'}}>Contact Us</Link></Button>
//           </Box>

        
//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMobileMenuOpen}
//             sx={{ display: { xs: 'block', sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {mobileMenu}
//     </Box>
//   );
// }
