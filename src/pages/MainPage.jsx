import { useState } from 'react';
import bg1 from '../assets/bg.jpg';
import NavBar from '../components/NavBar';
import ChatApp from '../components/ChatApp';
import StartingInputs from '../components/StartingInputs';

function MainPage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showPhones, setShowPhones] = useState(false);
  const [invalidInput1, setInvalidInput1] = useState('');
  const [invalidInput2, setInvalidInput2] = useState('');

  const handleResetChats = () => {
    setInput1('');
    setInput2('');
    setShowPhones(!showPhones);
  };

  const handleStartChat = () => {
    let valid = true;

    if (!input1) {
      setInvalidInput1('Invalid Input 😡');
      valid = false;
    } else {
      setInvalidInput1('');
    }

    if (!input2) {
      setInvalidInput2('Invalid Input 😡');
      valid = false;
    } else {
      setInvalidInput2('');
    }

    if (input1 && input2 && input1 === input2) {
      setInvalidInput1('Names should be different');
      setInvalidInput2('Names should be different');
      valid = false;
    }

    if (valid) {
      setShowPhones(true);
    }
  };

  return (
    <>
      <NavBar title="Home" link="../" />
      <div className="relative w-full h-full min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: `#010a19`,
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="relative flex flex-col justify-center items-center min-h-screen gap-10 pt-5 ">
          <div className="w-[50%] flex flex-col justify-center items-center gap-5 max-md:w-[80%] rounded-lg py-5">
            <div className="flex flex-row-reverse max-md:flex-col justify-center items-center gap-5 max-md:w-[80%] max-md:py-5 ">
            
            </div>
            {showPhones && (
         <button
         className="bg-[#4f45e4] text-white border-2 border-[#4f45e4] py-3 px-6 rounded-lg font-bold text-xl transition duration-300 ease-in-out hover:bg-[#5a53e2] hover:scale-110 hover:shadow-lg"
         onClick={handleResetChats}
       >
         Reset chats ⟳
       </button>
            )}
          </div>

          {!showPhones && (
            <StartingInputs
              input1={input1}
              input2={input2}
              setInput1={setInput1}
              setInput2={setInput2}
              onStartChat={handleStartChat}
              invalidInput1={invalidInput1}
              invalidInput2={invalidInput2}
            />
          )}
          {showPhones && (
            <div className="flex flex-wrap justify-between items-center w-full gap-5">
              <ChatApp input1={input1} input2={input2} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;