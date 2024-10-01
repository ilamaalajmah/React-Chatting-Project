import { useState, useRef } from 'react';
import Phone from './Phone';

function ChatApp({ input1, input2 }) {
  const [messages, setMessages] = useState([]);

  const phone1ChatRef = useRef(null);
  const phone2ChatRef = useRef(null);
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);

  const handleSendMessage = (author, content) => {
    const newMessage = { author, content };
    setMessages([newMessage, ...messages]);

    if (author === input1 && phone1ChatRef.current) {
      phone1ChatRef.current.scrollIntoView();
    } else if (author === input2 && phone2ChatRef.current) {
      phone2ChatRef.current.scrollIntoView();
    }
  };

  const handleIconClick = (position) => {
    if (position === 'up' && phone1Ref.current) {
      phone1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (position === 'down' && phone2Ref.current) {
      phone2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-evenly items-center w-full gap-5 flex-wrap max-md:flex-col max-md:justify-center">
      <div className="flex flex-col justify-center items-center">
        <Phone
          name={input1}
          receiver={input2}
          messages={messages}
          onSendMessage={(content) => handleSendMessage(input1, content)}
          chatContainerRef={phone1ChatRef}
          positionPhone={'down'}
          onIconClick={() => handleIconClick('down')}
          ref={phone1Ref}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Phone
          name={input2}
          receiver={input1}
          messages={messages}
          onSendMessage={(content) => handleSendMessage(input2, content)}
          chatContainerRef={phone2ChatRef}
          positionPhone={'up'}
          onIconClick={() => handleIconClick('up')}
          ref={phone2Ref}
        />
      </div>
    </div>
  );
}

export default ChatApp;
