import "./JournalItem.css";

const JournalItem = ({ title, date, text }) => {

  return (
    <div>
      <div className="journal-item">
        <h2 className="journal-item__title">{title}</h2>
        <h2 className="journal-item__body">
          <div className="journal-item__date">{date.toString}</div>
          <div className="journal-item__text">{text}</div>
        </h2>
      </div>
    </div>
  );
};

export default JournalItem;
