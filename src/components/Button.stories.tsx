import Button, { Props } from "./Button";

export default {
  component: Button,
  title: "Button",
};

export const Default = (props: Props) => <Button {...props} />;

export const SuccessButton = () => (
  <Button {...{ variant: "success", text: "Click Me!" }} />
);
export const ErrorButton = () => (
  <Button {...{ variant: "error", text: "Click Me!" }} />
);
