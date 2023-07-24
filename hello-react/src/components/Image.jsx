import reactlogo from '../assets/react.svg';

export const Image = () => {

  let randomPos=Math.floor(Math.random()*200)

  return (
    <img src={reactlogo}  style={ { marginLeft: randomPos  }} />
  )
}

