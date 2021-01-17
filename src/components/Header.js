import React,{useEffect,useState} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import{AppBar,IconButton,Toolbar,Collapse} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh',
        fontFamily:'Nunito',
    },
    appBar:{
        background: 'none',
    },
    appbarWrapper:{
        width:'80%',
        margin: '0 auto',
    },
    appbarTitle:{
        flexGrow:'1',
    },
    icon:{
        color: '#fff',
        fontSize:'2rem',
    },
    title:{
        color:'#fff',
        fontSize: '4.5rem',
    },
    colorText:{
        color:'#8BB8F7',
    },
    container: {
        textAlign: 'center',
    },
    goDown:{
        color:"#8BB8F7",
        fontSize:'4rem',
    }
}));
export default function Header(){
  const classes = useStyles();
  const [checked,setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])
  return(
   <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevations={0}>
          <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Professorando</h1>
          <IconButton>
              <SortIcon className={classes.icon}/>
          </IconButton>
          </Toolbar>
        </AppBar> 
        <Collapse 
            in={checked}  
            {...(checked ? { timeout: 1000 } : {})} 
            collapsedHeight={50}
        >
        <div className={classes.container}>
            <h1 className={classes.title}>
                 Bem-vindo a <br/>
                 plataforma de cursos 
                 <span className={classes.colorText}> voluntariados</span>
            </h1>
            <Scroll to="courses" smooth={true} >
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
        </div> 
        </Collapse>

   </div>
  )
}

