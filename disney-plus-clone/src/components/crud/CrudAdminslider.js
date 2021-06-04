import React, { useState, useEffect } from "react";
import { getslider } from "../../servicios/index";
import { Box, Table, Container, Columns,Modal } from "react-bulma-components";
import Agregarslider from "../crud/modalesslider/slideradd";
import Updatesli from "../crud/modalesslider/slidermodificar";
import Deleteslider from "../crud/modalesslider/slideeliminar";




const CrudAdmin = () => {
  const [modal, setModal] = useState(false);
  const [crudslider, setslider] = useState([]);

  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = (result) => {
    if (result) {
      loadCrudslider();
    }
    setModal(false);
  };

  async function loadCrudslider() {
    const response = await getslider();
    console.log(response);

    if (response.status === 200) {
      setslider(response.data.slider);
    }
  }

  useEffect(() => {
    loadCrudslider();
  }, []);

  return (
    <div>
      <Container style={{textAlign: 'center'}}  >
        <Columns>
          <Box>
            <button
              onClick={OpenModal}
              className="btn btn-success btn-lg m-auto w-100"
            >
              Agregar
            </button>

            <Table  style={{ border: '1px solid', textAlign: 'justify'}} size="default">
              <thead>
                <tr>
                  <th style={{ border: '1px solid'}}>id_slider</th>
                  <th style={{ border: '1px solid'}}>img</th>
                  <th style={{ border: '1px solid'}}>modificar</th>
                  <th style={{ border: '1px solid'}}>eliminar</th>
                </tr>
              </thead>
              <tbody>
                {crudslider.map((item) => (
                  <tr style={{ border: '1px solid'}}>
                    <th style={{ border: '1px solid'}} >{item.id_slider}</th>
                    <td style={{ border: '1px solid'}}>{item.img}</td>
                    <td style={{ border: '1px solid'}}>
                      <Updatesli
                        id_slider={item.id_slider}
                        img={item.img}
                      />
                    </td>
                    <td style={{ border: '1px solid'}}><Deleteslider
                        id_slider={item.id_slider}
                    /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal show={modal} onClose={CloseModal}>
              <Modal.Content>
                <Agregarslider closeModal={CloseModal} />
              </Modal.Content>
            </Modal>
          </Box>
        </Columns>
      </Container>
    </div>
  );
};

export default CrudAdmin;

