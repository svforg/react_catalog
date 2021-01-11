import React, {useState,} from 'react';
import {SuperInputText} from '~c/shared/SuperInputText/SuperInputText';
import css from './ProductCount.module.scss';

const ProductCount = (props) => {

  const {
    min,
    max,
    cnt,
    onChange
  } = props;

  const [editMode, setEditMode] = useState(false);

  const editModeOn = () => setEditMode(true);
  const editModeOff = () => {
    setEditMode(false);

    const newCnt = Math.min(Math.max(Number(cnt), min), max);

    if (newCnt && newCnt > min && newCnt < max) {
      onChange(newCnt);
    }
  };
  const inputChangeHandler = (e) => {
    const newCnt = Number(e.currentTarget.value);

    if (newCnt && newCnt >= min && newCnt <= max) {

      onChange(newCnt);
    }
  };
  const decrease = () => cnt > min && onChange(cnt - 1);
  const increase = () => cnt < max && onChange(cnt + 1);

  const showInput = (className, onChange, onBlur, value) =>
    <SuperInputText
      className={css.editInput}
      autoFocus
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />;

  const showSpan = (onDoubleClick, className, cnt) =>
    <span
      onDoubleClick={onDoubleClick}
      className={className}>
      {cnt}
    </span>;

  return <>
    <button
      className={css.controlBtn}
      onClick={decrease}
      disabled={cnt <= min}>-</button>

    {
      editMode
        ? showInput(css.editInput, inputChangeHandler, editModeOff, cnt)
        : showSpan(editModeOn, css.outputSpan, cnt)
    }

    <button
      className={css.controlBtn}
      onClick={increase}
      disabled={cnt >= max}>+</button>
  </>
};

export default ProductCount;