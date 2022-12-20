import propTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chatList = [];
  for (const entry of entries) {
    chatList.push(
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        likes={entry.likes}
      />
    );
  }
  return <div className="chat-log">{chatList}</div>;
};

ChatLog.propTypes = {
  entries: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      sender: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      timeStamp: propTypes.string.isRequired,
      // likes: propTypes.bool.isRequired,
    })
  ),
};
export default ChatLog;