export function WhatsappButton(){
  return (
    <a
      href="https://wa.me/5581979010538"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-1 right-2 w-[60px] h-[60px] bg-[#25d366] text-white rounded-full shadow-lg z-[1000] flex items-center justify-center transition-transform duration-300 hover:scale-110"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-[35px] h-[35px]"
      />
    </a>
  );
};

export default WhatsappButton;