

const Message = ({color, message}) => {
  return (
      <div className="warning">
          <h3 className={`ui ${color} message`}>
              {message}
          </h3>
      </div>
  );
};

export default Message