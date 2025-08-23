import "../styles/theme.css";
import { Cycles } from "./cycles.tsx";
import { DefaultInput } from "./DefaultInput";

export function Form() {
  return (
    <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
      <DefaultInput labelText="Task" type="text" id="meuInput" placeholder="Digite algo" />


      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dolores ipsum veniam quo non repudiandae labore velit tempora eos rerum, provident, laboriosam ratione itaque! Unde veritatis corporis iusto mollitia placeat?</p>

      </div>

      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
        <Cycles />
      </div>

      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-gap-1">
        <button className="is-primary button is-large is-responsive">Enviar</button>

      </div>
    </div>
  );
}
