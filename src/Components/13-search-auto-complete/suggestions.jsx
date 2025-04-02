const Suggestions = ({ data, handleClick, highlightedIndex }) => {
  return (
    <ul className="dropdown">
      {data && data.length
        ? data.map((item, index) => (
            <li
              className={index === highlightedIndex ? "highlighted" : ""}
              onClick={handleClick}
              key={index}
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;
