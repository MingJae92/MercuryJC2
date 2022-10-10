import React from 'react'
import AboutMe from "./AboutMe"
import Commissions from './Commissions';
import Homepage from './Homepage';
import MyWork from './MyWork';
//RoutesConfig defines where all the routes are stored. 

const RoutesConfig = [
    {
        path:"/Homepage",
        component:Homepage, 
    },
    {
        path:"/AboutMe",
        component:AboutMe
    },
    {
        path:"/Commissions",
        component: Commissions
    },
    {
        path:"/MyWork",
        component: MyWork
    },
    {
        path:"/Shop",
        component: Shop
    },
];

export default RoutesConfig

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

//   const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   }));

// const Sidebar = (props) => {
//     const {history} = props;
//     const itemList = [
//         {
//             text: "Home",
//             // onClick : ()=> history.push("/Home")
//         },
//         {
//             text: "About Me",
//             // onClick : ()=> history.push("/About-Me")
//         },
//         {
//             text: "Commisssions",
//             // onClick : ()=> history.push("/Commissions")
//         },
//         {
//             text: "Art-Work",
//             // onClick : ()=> history.push("/Art-Work")
//         },
//         {
//             text: "Shop",
//             // onClick : ()=> history.push("/Shop")
//         },
//         {
//             text: "Contact-Me",
//             // onClick : ()=> history.push("/Contact-Me")
//         },
           

//     ]
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
  
//     const handleDrawerOpen = () => {
//       setOpen(true);
//     };
  
//     const handleDrawerClose = () => {
//       setOpen(false);
//     };
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//            Menu
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
        
//           <List>
          
//           {itemList.map((item, index) => {
//             const {text, onClick} = item;
//             return(<ListItem   onClick={onClick} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>)
            
//           })}
//         </List>
        
        
//         <Divider />
            
//       </Drawer>
      
//     </Box>
//   )
// }

// export default Sidebar;

// const Routes=[
//     //   {text:Homepage,
//     //   path:"/",
//     //   component:Homepage},
//     //   {text:AboutMe,
//     //     path:"/",
//     //     component:AboutMe},
//     //   {text:Commissions,
//     //     path:"/Commmissions",
//     //     component:Commissions},
//     //   {text:My-Work,
//     //     path:"/MyWork",
//     //     component:MyWork},
//     //   {text:Shop,
//     //     path:"/Shop",
//     //     component:Shop},
//     //   {text:Contact-Me,
//     //     path:"/Contact-Me",
//     //     component:Contact}
//     // ]
