import React, { useState } from "react";
import { Updateviewers } from "../../../servicios/index";

export default function Updatevi({ id_viewers, img, video }) {
  const [isModal, setIsModal] = useState(false);

  //const { CloseModalUpdate } = props;

  const [form, setForm] = useState({
    id_viewers: id_viewers,
    img: img,
    video: video,
  });

  const submit = async (event) => {
    event.preventDefault();
    if (form.id_viewers === form.id_viewers) {
      const res = await Updateviewers(form);
      //    CloseModalUpdate(true);
    } else {
      const res = await Updateviewers(form);
      window.confirm("modificado correctamente!!");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <div className={`modal ${isModal}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modificar el viewers</p>
            <button
              onClick={setIsModal}
              className="delete"
              aria-label="close"
            />
          </header>
          <form onSubmit={submit}>
            <section className="modal-card-body">
              <label>ID</label>
              <br></br>
              <input
                type="text"
                name="id_viewers"
                className="input is-focused-danger "
                placeholder="id_viewers"
                value={form.id_viewers}
                onChange={handleChange}
                readOnly
              />
              <br></br>
              <label>img</label>
              <br></br>

              <input
                type="text"
                className="input is-focused"
                placeholder="img"
                name="img"
                value={form.img}
                onChange={handleChange}
              />
               <br></br>
              <label>video</label>
              <br></br>

              <input
                type="text"
                className="input is-focused"
                placeholder="video"
                name="video"
                value={form.video}
                onChange={handleChange}
              />
            </section>

            <footer className="modal-card-foot">
              <button onClick={isModal} className="button">
                Cancel
              </button>
              <button type="submit" onClick={setIsModal} className="button">
                Insertar
              </button>
            </footer>
          </form>
        </div>
      </div>

      <button
        onClick={() => setIsModal("is-active")}
        className="button is-small is-info"
      >
        Modificar
      </button>
    </div>
  );
}
