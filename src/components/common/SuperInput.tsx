import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type AdditionalProps = {
  error?: boolean;
};
type SuperInputTextPropsType = DefaultInputPropsType & AdditionalProps;

const SuperInput: React.FC<SuperInputTextPropsType> = ({
  onChange,
  onKeyPress,
  className,
  error,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  const finalClassName = `${
    error ? "error__input" : "default__input"
  } ${className}`;

  return (
    <input
      onChange={onChangeCallback}
      className={finalClassName}
      {...restProps}
    />
  );
};

export default SuperInput;
