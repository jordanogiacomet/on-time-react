type TextInputLabelProps = {
  text: string;
  id: string;
} & React.ComponentProps<'label'>;

export function TextInputLabel({ text, id }: TextInputLabelProps) {
  return <label id={id}>{text}</label>;
}
