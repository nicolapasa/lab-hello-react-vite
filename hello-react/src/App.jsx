import './App.css';
import ironhacklogo from './assets/ironhack-logo-xs.png';
import menuTop from './assets/menu-top-xs.png';

import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import { Image } from './components/Image';
import { Button } from './components/button';
function App() {
  return (
    <>
    <div className="main">
      <div className="top">
        <img src={ ironhacklogo } alt="" />
        <img src={ menuTop  } className='menu' alt="" />
      </div>
     <div className="hero">

         <div className='title'>
          <h1>Say Hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular
            frontend library, and become a super ninja developer.
          </p>
       <Button />
         </div>
         <div className='image'>
         <Image />
         <Image />
         <Image />
         </div>

     </div>
    

    </div>

    <div className="gallery">
               
               <div className="col">
                  <img src={icon1} alt="" />
                  <h2>
                    Declarative
                  </h2>
                  <p>
                    React makes it painless
                    interactive
                  </p>
               </div>
               <div className="col">
                  <img src={icon2} alt="" />
                  <h2>
                   Components
                  </h2>
                  <p>
                    React makes it painless
                    interactive
                  </p>
               </div>
               <div className="col">
                  <img src={icon3} alt="" />
                  <h2>
                    Single-Way
                  </h2>
                  <p>
                    React makes it painless
                    interactive
                  </p>
               </div>
               <div className="col">
                  <img src={icon4} alt="" />
                  <h2>
                    JSX
                  </h2>
                  <p>
                    React makes it painless
                    interactive
                  </p>
               </div>
    </div>
    </>
  );
}

export default App;
