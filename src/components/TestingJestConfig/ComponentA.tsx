interface IComponentAProps {
  name: string;
}
export const ComponentA = (props: IComponentAProps) => (
  <span id="name" data-test="component-content">
    Hello {props.name}
  </span>
);
