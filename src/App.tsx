import { faContactCard, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';

import Pages from './Pages/Pages.rout';


import gmail from "../src/Imgs/SVGComponets/gmail.svg";
import telegram from "../src/Imgs/SVGComponets/telegram.svg";
import facebook from "../src/Imgs/SVGComponets/facebook.svg";
import whatsapp from "../src/Imgs/SVGComponets/whatsapp.svg";
import fiverr from "../src/Imgs/SVGComponets/fiverr.svg";
import upwork from "../src/Imgs/SVGComponets/upwork.svg";


// Chanell openning

function EmailOpen(){
  window.open("https://mail.google.com/mail/u/2/#inbox")
    }
function TelegramOpen(){
  window.open("https://web.telegram.org/")
    }

function FacebookOpen(){
  window.open("https://www.facebook.com/")
    }

function FiverrOpen(){
  window.open("https://www.fiverr.com/share/XY988V")
    }

function UpworkOpen(){
  window.open("https://www.upwork.com")
    }

function WhatsAppOpen(){
  window.open("https://www.upwork.com")
    }


function App() {
  return (

    <div className='h-screen overflow-x-hidden scroll-smooth overflow-y-visible ' id="page-container">
      <div className='sticky top-0 w-full z-40'>
        <NavBar />
      </div>
      <div className='overflow-hidden h-fit'>
        <Pages />
        <footer className='bg-primary w-full text-colorid4e749ecb justify-center items-center flex flex-col py-12'>
          <div className='flex flex-col text-center items-center font-bold text-3xl'>
            
            {/* <FontAwesomeIcon icon={faTowerCell} className="h-10" /> */}
            Ranga Trading
          </div>

          <div className=' grid grid-cols-2 md:grid-cols-6 items-center w-fit justify-center mt-10 space-x-14 space-y-2'>
            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={EmailOpen}  >
                        <div  className="img" >
                          <img  alt="" src={gmail} />
                        </div>                        
                      </button> 
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={TelegramOpen}  >
                        <div  className="img" >
                          <img  alt="" src={telegram} />
                        </div>                        
                      </button> 
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={FacebookOpen}  >
                        <div  className="img" >
                          <img  alt="" src={facebook} />
                        </div>                        
                      </button> 
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={FiverrOpen}  >
                        <div  className="img" >
                          <img  alt="" src={fiverr} />
                        </div>                        
                      </button> 
            </div>
            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={UpworkOpen}  >
                        <div  className="img" >
                          <img  alt="" src={upwork} />
                        </div>                        
                      </button> 
            </div>
            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={WhatsAppOpen}  >
                        <div  className="img" >
                          <img  alt="" src={whatsapp} />
                        </div>                        
                      </button> 
            </div>
          </div>
          <div style={{fontWeight:'bold', padding:'20px', fontSize: '20px'}}>
            
            <h1>Email : branganaupul@gmail.com</h1>
            <h2>Contact Number  : +94 76 9298 578</h2>
          </div>
          <div className='flex flex-col  w-full justify-center mt-10 md:flex-row items-center  '>
            <span className='max-w-lg text-center text-xs items-center flex w-full'>
              DISCLAIMER: Ranga Trading is not a broker/dealer and has no fiduciary relationship or obligation to you in connection with any trades or other decisions or activities effected by you using Ranga Trading Services. All order requests are sended automatically to cryptocurrency exchange, based on the parameters of your trading command, and you are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you according to your personal investment objectives, financial circumstances and risk tolerance, and you shall be solely responsible for any loss or liability therefrom.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
