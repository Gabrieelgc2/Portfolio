import logo from '../../img/logo.jpg';
import { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (

        <header className="w-full h-12 flex justify-between items-center text-black py-8 px-8 md:px-32 bg-white drop-shadow-md mb-5 relative z-50" id="inicio" >
            <a href="#">
                <img src={logo} alt="Logo" className='w-12 hover:scale-105 transition-all lg:w-16' ></img>
            </a>


            <i className="bx bx-menu xl:hidden block text-3xl cursor-pointer lg:hidden"

                onClick={() => setIsMenuOpen(!isMenuOpen)}>

                </i>

            <div className={`absolute xl:hidden top-12 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-base 
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"} 
                `}

                style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
            >


                <li
                    onClick={() => setIsMenuOpen(false)}
                    className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#inicio">Início</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#aboutme">Sobre</a></li>
                <li
                    onClick={() => setIsMenuOpen(false)}
                    className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#projetos">Projetos</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#habilidades">Habilidades</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#contato">Contato</a></li>
            </div>

            <ul className="hidden xl:flex gap-6 font-semibold text-base">
             <li
                    onClick={() => setIsMenuOpen(false)}
                    className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#inicio">Início</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#aboutme">Sobre</a></li>
                <li
                    onClick={() => setIsMenuOpen(false)}
                    className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#projetos">Projetos</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#habilidades">Habilidades</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer'>
                    <a href="#contato">Contato</a></li>
          </ul>
        </header>
    )
}
export default Header

