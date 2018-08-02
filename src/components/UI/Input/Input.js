import React from 'react';

import classes from './Input.css';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'select':
      inputElement = (
        <select
          onChange={ props.changed }
          className={ classes.InputElement }
          {...props.elementConfig}
          value={ props.value }>
            { props.elementConfig.options.map(option => (
              <option key={ option.value } value={ option.value }>{ option.displayValue }</option>
            )) }
        </select>
      );
      break;
    case 'textarea':
      inputElement = <textarea
        onChange={ props.changed }
        className={ classes.InputElement }
        {...props.elementConfig}>{ props.value }</textarea>;
      break;
    case 'input':
    default:
      inputElement = <input
        onChange={ props.changed }
        className={ classes.InputElement }
        {...props.elementConfig}
        value={ props.value } />;
  }

  return (
    <div className={ classes.Input }>
      <label className={ classes.Label }>{ props.label }</label>
      { inputElement }
    </div>
  );
};

export default input;
