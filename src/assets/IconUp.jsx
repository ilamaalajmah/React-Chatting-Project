
function IconUp(props) {
  return (
    <button
      className="flex w-full flex-row-reverse md:hidden" 
      onClick={props.onClick} 
    >
      <div
        className="flex flex-row-reverse gap-2 
        border border-[#654ab5]-300 px-2 py-1 rounded-md 
        text-white justify-center items-center 
        shadow-2xl  transition duration-200 ease-in-out"
      >
       
        <span className="text-sm text-black">First Phone</span>
      </div>
    </button>
  );
}

export default IconUp;
