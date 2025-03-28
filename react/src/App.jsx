import {Button} from "@mui/material";
import {Favorite,Block} from "@mui/icons-material";

export default function App(){
  let items = [
    'Cadastrar',
    'Listar',
    'Relatórios',
    'Logout'
  ]

  return(
    <>
      <ul>
        {items.map(cada=> {
          return (<li>{cada}</li>)
        })}

      </ul>
      <Button startIcon={<Favorite/>}>Teste</Button>
      <Button startIcon={<Block/>} variant="outlined">Outro Teste</Button>
      <Button variant="contained">Mais um teste</Button>
    </>
  );
};
