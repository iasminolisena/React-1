export default function Paragraph(props){
    return(
      <p className='paragraph'>
        {props.cor}
        {props.children}</p>
    );
  };