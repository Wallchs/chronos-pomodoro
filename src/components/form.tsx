import "../styles/theme.css";
import { DefaultInput } from "./DefaultInput";

export function Form() {
  return (
    <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
      <DefaultInput type="text" id="meuInput" />


      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dolores ipsum veniam quo non repudiandae labore velit tempora eos rerum, provident, laboriosam ratione itaque! Unde veritatis corporis iusto mollitia placeat?</p>

      </div>

      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
        <p>Ciclos</p>
        <p>0 0 0 0 0 0 0</p>
      </div>

      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
        <button className="is-primary button is-large is-responsive">Enviar</button>

      </div>
    </div>
  );
}
