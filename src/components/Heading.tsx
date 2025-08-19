import "../styles/theme.css";
import "../styles/global.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {

  return (
    <>
      <br />
      <div className="container">{children}</div>

    </>
  );

}
