import { useEffect, useCallback, useState } from "react";

const useContextMenu = (element) => {
  console.log(element);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    element.addEventListener("click", handleClick);
    element.addEventListener("contextmenu", handleContextMenu);
    return () => {
      element.removeEventListener("click", handleClick);
      element.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { anchorPoint, show };
};

export default useContextMenu;
