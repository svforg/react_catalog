import React from "react";
import s from "./SuperInputText.module.scss";

export const SuperInputText = (
  {
    type, onChange, onChangeText, onKeyPress,
    onEnter, error, className, spanClassName,
    ...restProps
  }
) => {
  const onChangeCallback = (e) => {
    onChange // если есть пропс onChange
    && onChange(e); // то передать ему е (поскольку onChange не обязателен)

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e) => {
    onKeyPress && onKeyPress(e);

    e.key === "Enter" // если нажата кнопка Enter
    && onEnter // и есть пропс onEnter
    && onEnter(e.currentTarget.value); // то вызвать его
  };
  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
  const finalInputClassName = error ? `${s.errorInput} ${className}` : className;

  return (
    <>
      <input
        type={"text"}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}

        {...restProps}
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  );
};
