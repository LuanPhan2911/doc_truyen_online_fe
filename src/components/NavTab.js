import "./NavTab.scss";
const NavTab = ({ navTab, setNavTab }) => {
  const handleChangeNavTab = (tagId) => {
    setNavTab((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          active: item.id === tagId ? true : false,
        };
      });
    });
  };
  return (
    <div className="custom-nav-tag">
      <ul className="tag-ul">
        {navTab?.length > 0 &&
          navTab.map((item) => {
            return (
              <li
                key={item.id}
                className={item.active ? "active" : ""}
                onClick={() => handleChangeNavTab(item.id)}
              >
                {item.name}
                <span className="count">{item?.count}</span>
              </li>
            );
          })}
      </ul>

      <div className="tag-content">
        {
          (
            navTab?.length > 0 &&
            navTab.find((item) => {
              return item.active === true;
            })
          )?.component
        }
      </div>
    </div>
  );
};
export default NavTab;
