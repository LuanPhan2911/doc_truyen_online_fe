import _ from "lodash";
import { useState, useEffect } from "react";
const useDialog = (props) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu([...props.menu]);
  }, [props.menu]);
  const handleGetItemShow = () => {
    let obj = {};
    if (menu?.length > 0) {
      obj = menu.find((item) => item.show) || {};
    }
    return obj;
  };
  const handleShowDialog = (itemId) => {
    let cpMenu = menu;
    console.log(menu);
    if (cpMenu?.length > 0) {
      cpMenu.forEach((item) => {
        if (item.id === itemId) {
          item.show = true;
        } else {
          item.show = false;
        }
      });
      setMenu([...cpMenu]);
    }
  };
  return {
    menu,
    setMenu,
    handleShowDialog,
    handleGetItemShow,
  };
};
export { useDialog };
