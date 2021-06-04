import React, { useState } from "react";
import { Addmovie } from "../../../servicios/index";


function AgregarCrud(props) {
  const { closeModal } = props;

  const [form, setForm] = useState({
    cardImg: "",
    backgroundImg: "",
    titleImg: "",
    subTitle: "",
    description: "",
    title: "",
  });


  const changeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    await Addmovie(form);
    closeModal(true);
  };

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="colg-lg-6">
          <div className="card text-center">
            <div className="card-body">
              <h3>Agregar</h3>

              <span className="badge badge-danger text-danger">
                TODOS LOS CAMPOS SON OBLIGATORIOS
              </span>
              <form className="mt-4" onSubmit={submit}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg mt-3"
                      placeholder="cardImg"
                      value={form.cardImg}
                      onChange={(event) => {
                        changeForm("cardImg", event.target.value);
                      }}
                    />

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="backgroundImg"
                      value={form.backgroundImg}
                      onChange={(event) => {
                        changeForm("backgroundImg", event.target.value);
                      }}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="titleImg"
                      value={form.titleImg}
                      onChange={(event) => {
                        changeForm("titleImg", event.target.value);
                      }}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg mt-3"
                  placeholder="subTitle"
                  value={form.subTitle}
                  onChange={(event) => {
                    changeForm("subTitle", event.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control form-control-lg mt-3"
                  placeholder="description"
                  value={form.description}
                  onChange={(event) => {
                    changeForm("description", event.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control form-control-lg mt-3"
                  placeholder="title"
                  value={form.title}
                  onChange={(event) => {
                    changeForm("title", event.target.value);
                  }}
                />
                <div className="mt-3">
                  <button
                    type="text"
                    className="btn btn-danger btn-lg mt-2 mx-3"
                    onClick={() => closeModal()}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg mt-2">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarCrud;
