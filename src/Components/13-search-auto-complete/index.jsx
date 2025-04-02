import { useState, useEffect, use } from "react";
import Suggestions from "./suggestions";
import "./styles.css";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query))
          : [];

      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (event) => {
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredUsers.length - 1
        );
        break;
      case "ArrowDown":
        setHighlightedIndex((prevIndex) =>
          prevIndex < filteredUsers.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "Enter":
        if (highlightedIndex >= 0) {
          const customEvent = {
            target: {
              innerText: filteredUsers[highlightedIndex],
            },
          };
          handleClick(customEvent);
        }
        break;
      default:
        break;
    }
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data?.users?.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-auto-complete-container">
      <h1>Search Auto Complete</h1>
      <div className="input-container">
        {loading ? (
          <h1>Loading data. Please Wait</h1>
        ) : (
          <input
            value={searchParam}
            name="search-users"
            placeholder="Search Users here..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        )}

        {showDropdown && (
          <Suggestions
            handleClick={handleClick}
            data={filteredUsers}
            highlightedIndex={highlightedIndex}
          />
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
