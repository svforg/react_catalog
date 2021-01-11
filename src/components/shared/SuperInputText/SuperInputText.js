import React from "react";
import s from "./SuperInputText.module.scss";

export const SuperInputText = (props) => {

  const {
    onChange, onChangeText, onKeyPress,
    onEnter, error, className, spanClassName,
    ...restProps
  } = props;

  const onChangeCallback = (e) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e) => {
    onKeyPress && onKeyPress(e);

    e.key === "Enter" && onEnter && onEnter(e.currentTarget.value);
  };

  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
  const finalInputClassName = error ? `${s.errorInput} ${className}` : className;

  return <>
    <input type={"text"}
           onChange={onChangeCallback}
           onKeyPress={onKeyPressCallback}
           className={finalInputClassName}
           {...restProps}/>

    {error && <span className={finalSpanClassName}>{error}</span>}
  </>
};
