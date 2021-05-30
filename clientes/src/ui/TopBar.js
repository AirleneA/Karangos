import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logotipo from '../img/cliente.png'//..sobe para a pasta pai
import MainMenu from './MainMenu.js';


//forma de escrever css usando o jsx(linha 10-17)
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  logo:{ //criei uma classe chamada logo para diminuir os pixels
      width: '150px'
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <MainMenu/>
         <img src={logotipo} className={classes.logo} alt="Clientes" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
