import './styles/custom.css';
import Button from './components/Button';
import Paragraph from './components/Paragraph';


export default function App(){
  let nome = 'Chiquim';

  return(
    <>
      <h1>Olá mundo</h1>
      <hr/>
      <Paragraph color="red" aling="center">eu me chamo {nome}</Paragraph>

      <Button>Cadastro</Button>
      <Button>Editar</Button>
      <Button>Relatório</Button>
    </>
  );
};
