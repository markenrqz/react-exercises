import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list.map((listItem) => (
        <MenuItem item={listItem} />
      ))}
    </ul>
  );
};

export default MenuList;
