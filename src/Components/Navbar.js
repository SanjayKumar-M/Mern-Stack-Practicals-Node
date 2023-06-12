import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../Navbar.css'
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      
      <Toolbar sx={{ justifyContent: 'space-between' }}>

       <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'float-left' }}>
          Dream_Travel
        </Typography>

        <Button color="inherit"><Link className='nav' to='/about'> About</Link></Button>
        <Button color="inherit"><Link className='nav' to='/contact'>Contact</Link></Button>
        <Button color='inherit'><Link className='nav' to='/packages'>Packages</Link></Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar



// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// import { Link } from 'react-router-dom';
// const Navbar = () => {

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'black' }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>

//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'float-left' }}>
//           Dream_Travel
//         </Typography>
        
//           <Button color="inherit"> <Link className='navStyle' to='/'>Home</Link></Button>
//           <Button color="inherit" ><Link to='/signup' className='navStyle'>Packages</Link></Button>
//           <Button color="inherit"> <Link to='/login' className='navStyle'>Contact</Link></Button>
        
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;