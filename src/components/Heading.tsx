import "../styles/theme.css";
import "../styles/global.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {

  return (
    <>
     <h1 className="is-flex is-justify-content-center is-align-content-center p-3">{children}</h1>

    </>
  );

}
