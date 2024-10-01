import styles from './StartingInputs.module.css';

function StartingInputs(props) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full max-w-md mx-auto p-5">
      <h1 className="text-5xl font-bold text-white mb-4">Start Your Chat!</h1> 

      <div className="flex flex-col gap-3 w-full">
        <label className="text-gray-400 font-bold text-lg">
          Enter Name for 1st phone
        </label>
        <input
          type="text"
          name="text"
          className={`${styles.input} placeholder-gray-500 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f43e6]`}

          placeholder="Phone Name 1"
          value={props.input1}
          onChange={(e) => props.setInput1(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onStartChat();
            }
          }}
        />
        <label className="text-red-400">{props.invalidInput1}</label>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <label className="text-gray-400 font-bold text-lg">
          Enter Name for 2nd phone
        </label>
        <input
          type="text"
          name="text"
          className={`${styles.input} placeholder-gray-500 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f43e6]`}
          placeholder="Phone Name 2"
          value={props.input2}
          onChange={(e) => props.setInput2(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onStartChat();
            }
          }}
        />
        <label className="text-red-400">{props.invalidInput2}</label>
      </div>

      <button
        className="bg-[#4f45e4] text-white border-2 border-[#4f45e4] py-3 px-6 rounded-lg font-bold text-xl transition duration-300 ease-in-out hover:bg-[#5a53e2] hover:scale-110 hover:shadow-lg"
        onClick={props.onStartChat}
      >
        Chat Now!
      </button>
    </div>
  );
}

export default StartingInputs;