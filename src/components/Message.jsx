import PropTypes from 'prop-types';

const Message = ({ authorName, messageContent, isSender }) => {
  const getAvatarUrl = () => {
    return `https://ui-avatars.com/api/?name=${authorName}&size=128`;
  };
  const baseStyles =
    'p-3 rounded-md my-1  break-words max-w-[75%] max-md:text-[0.8em] ';
  const colorStyles = isSender
    ? 'bg-green-300 text-black self-start text-left'
    : 'bg-gray-500 text-white self-end text-right';

  return (
    <div
      className={`flex flex-col max-md:w-[%50] ${
        isSender ? 'items-start' : 'items-end'
      }`}
    >
      <div
        className={`max-md:text-[0.8em] text-black-300 mb-1 flex gap-2  ${
          isSender ? 'text-left   ' : 'text-right flex flex-row-reverse'
        }`}
      >
        <img
          src={getAvatarUrl()}
          alt={`${authorName}'s avatar`}
          className="w-5 h-5 rounded-full"
        />
        {authorName}
      </div>
      <div className={`${baseStyles} ${colorStyles}`}>{messageContent}</div>
    </div>
  );
};

Message.propTypes = {
  authorName: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
  isSender: PropTypes.bool.isRequired,
};

export default Message;
