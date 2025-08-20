import "../styles/theme.css";

type DefaultInputProps = {
  id: string;
  // esta opção pode ser opcional
  labelText?: string;
} & React.ComponentProps<'input'>;


export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText && <label className="label has-text-centered" htmlFor="{id}">{labelText}</label>}
      <input type={type} id={id} {...rest} className="input" />
    </>
  );
}
