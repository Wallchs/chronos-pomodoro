import "../styles/theme.css";
import "../styles/global.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {

  return (
    <>
      <br />
      <h1 className="container">{children}</h1>

    </>
  );

}
