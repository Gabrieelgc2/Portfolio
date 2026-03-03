import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { motion } from "framer-motion";
import { useState } from "react";

import MiniBank from "../../../../../assets/imgs/MiniBank.jpg";
import TechMoms from "../../../../../assets/imgs/Techmoms.png";
import AirCheck from "../../../../../assets/imgs/Air_Check.png";
 
export function CardDefault() {


  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    // Se clicar no mesmo card, ele desvira. Se clicar em outro, vira o novo.
    setActiveCard(activeCard === index ? null : index);
  };


   const posicoesDasImagens = {
   0: "object-[15%_20%]", // Para o MiniBank (Lâmpada)
   1: "object-[85%_30%]", // Para o TechMoms
   2: "object-[10%_30%]", // Para o AirCheck
   };


   const projetos = [
    {
      titulo: "MiniBank",
      descricao: "Aplicação fintech desenvolvida para a Pitang processar operações bancárias.",
      imagem: MiniBank,
      experiencia: "Desenvolvimento de APIs REST e sistemas backend escaláveis utilizando Java e Spring Boot.",
      data: "Fev 2025 — Jul 2025 | Pitang",
      link: "https://github.com/Gabrieelgc2/MiniBank"
    },

    {
      titulo: "TechMoms",
      descricao: "Site feito para a inclusão de mães no mercado de tecnologia.",
      imagem: TechMoms,
      experiencia: "Desenvolvimento de interfaces responsivas e interativas utilizando React, focando na experiência das mães em busca de oportunidades na área de tecnologia.",
      data: "Fev 2024 — Jul 2024 | Accenture",
      link: "https://tech-moms.vercel.app/"

    },

    {
      titulo: "AirCheck",
      descricao: "Sistema de monitoramento da qualidade do ar em tempo real.",
      imagem: AirCheck,
      experiencia: "Estruturação de camadas de integração utilizando Django, criando um fluxo de dados blindado entre o banco de dados e a interface.",
      data: "Sep 2025 - Oct 2025 | Cesar School",
      link: "https://github.com/Gabrieelgc2/Air-Check-Project"
    }
  ];

  return (

<div className="flex flex-wrap gap-6 justify-center relative top-7 perspective-[1000px]">

{projetos.map((projeto, index) => (
  <motion.div
    key={index}
    className="relative w-64 h-80 cursor-pointer" // Tamanho ajustado para o seu portfólio
    animate={{ rotateY: activeCard === index ? 180 : 0 }}
    onClick={() => handleCardClick(index)}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{ transformStyle: "preserve-3d", 
    }}
  >
    {/* FACE DA FRENTE (Imagem do Projeto) */}
    <div 
      className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden"
      style={{ backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
              zIndex: 2

       }}
    >
      
      <img 
        src={projeto.imagem} 
        alt={projeto.titulo} 
        className={`w-full h-full object-cover ${posicoesDasImagens[index] || 'object-center'}`}
      />
      <div className="absolute bottom-0 w-full bg-black/60 p-2 text-white text-center">
        {projeto.titulo}
        <p className="text-white/50 text-xs uppercase tracking-widest">Clique aqui</p>
      </div>
    </div>

    {/* FACE DE TRÁS DO CARD */}
<div 
  className="absolute inset-0 w-full h-full bg-[#1A1A1A] text-white rounded-lg shadow-lg p-4 flex flex-col justify-between border border-gray-800"
  style={{ 
    backfaceVisibility: "hidden", 
    WebkitBackfaceVisibility: "hidden", // Crítico para Safari/iOS
    transform: "rotateY(180deg)", // Começa virado
    zIndex: 1 
  }}
>
  {/* Cabeçalho: Título e Período */}
  <div className="text-center">
    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{projeto.titulo}</h3>
    <p className="text-[10px] text-terciary uppercase tracking-widest">{projeto.data}</p>
  </div>

  {/* Corpo: Experiência e Tecnologias */}
  <div className="flex-1 flex flex-col justify-center gap-3">
    {/* Seção: O Projeto */}
    <div className="text-center">
      <span className="text-[10px] font-bold text-green uppercase block mb-1">O Projeto</span>
      <p className="text-xs leading-relaxed text-gray-300">
        {projeto.descricao}
      </p>
    </div>

    {/* Seção: Minha Experiência */}
    <div className="text-center">
      <span className="text-[10px] font-bold text-green uppercase block mb-1">Minha Experiência</span>
      <p className="text-xs leading-relaxed text-gray-300">
        {projeto.experiencia}
      </p>
    </div>
  </div>

  {/* Ação: Botão */}
  <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-md text-[10px] font-bold uppercase transition-colors">
    <a href={projeto.link} className="text-white no-underline">Saiba mais</a>
  </button>
</div>
  </motion.div>
))}
</div>
  );
}