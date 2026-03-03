
function ContactMe() {
  return (
    <section id="contato" className="w-full py-8 px-6 flex flex-col items-center">
      {/* Título da Seção */}
      <h2 className="text-3xl text-white font-bold mb-2 uppercase">Vamos Conversar?</h2>
      <p className="text-terciary text-sm mb-12 text-center max-center max-w-lg">
        Seja para um novo projeto, orçamento ou apenas para trocar uma ideia sobre tecnologia.
  </p>

  <div className="w-full max-w-5xl grid grid-cols-1 gap-12 md:w-3/4 lg:w-2/4">
    
    {/* COLUNA 1: Orçamento */}
    <div className="flex flex-col gap-8">

      {/* Card de Orçamento */}
      <div className="p-6 bg-form rounded-lg border border-gray-800">
        <h3 className="text-white font-bold mb-2">Solicitar Orçamento</h3>
        <p className="text-terciary text-xs leading-relaxed mb-4 lg:text-base">
          Trabalho com desenvolvimento Fullstack, para criação de websites. 
          O valor pode variar conforme a complexidade e o prazo do projeto.
        </p>
        <div className="text-green font-mono text-sm">
          Preços a partir de R$ 500,00
        </div>
      </div>
    </div>

    {/* COLUNA 2: Formulário de Contato */}
    <form className="flex flex-col gap-4 bg-form p-8 rounded-lg border border-gray-800" action="https://api.staticforms.dev/submit" method="POST">
    <input type="hidden" name="apiKey" value="sf_9n26bicekc2im58d4bn4358i"/>
    <input type="hidden" name="redirectTo" value="http://localhost:5173/thankyou.html"/>

      <div>
        <label className="text-white text-xs font-bold uppercase mb-2 block" for="name">Nome</label>

        <input 
          type="text" 
          placeholder="Seu nome"
          id="name"
          name="name" required
          className="w-full bg-black border border-gray-800 rounded-md p-3 text-white text-sm focus:border-green outline-none"
        />

      </div>
      
      <div>
        <label className="text-white text-xs font-bold uppercase mb-2 block">E-mail</label>
        <input 
          type="email" 
          id="email"
          name="email" required
          placeholder="seu@email.com"
          className="w-full bg-black border border-gray-800 rounded-md p-3 text-white text-sm focus:border-green outline-none"
        />
      </div>

      <div>
        <label className="text-white text-xs font-bold uppercase mb-2 block">Mensagem</label>
        <textarea 
          id="message"
          name="message" required
          rows="4"
          placeholder="Como posso te ajudar?"
          className="w-full bg-black border border-gray-800 rounded-md p-3 text-white text-sm focus:border-green outline-none resize-none"
        ></textarea>
      </div>

      <button className="w-full bg-green text-black font-bold py-3 rounded-md uppercase text-sm hover:brightness-90 transition-all mt-2" type="submit">
        Enviar Mensagem
      </button>
    </form>

  </div>
</section>
  );
}
export default ContactMe