import { useEffect } from "react";
import { setCalculador } from "@/redux/Actions/actionCalculadorPrincipal";
import { useDispatch } from "react-redux";

const useCloseOnOutsideClickAndEscape = (ref, openState, handleClose) => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose(false);
        dispatch(setCalculador());
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleClose(false);
        dispatch(setCalculador());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [ref, openState, handleClose]);
};

export default useCloseOnOutsideClickAndEscape;
