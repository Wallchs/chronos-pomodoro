import "../styles/theme.css";

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;


export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label className="label has-text-centered" htmlFor="{id}">Tarefa</label>
      <input type={type} id={id} />
    </>
  );
}
