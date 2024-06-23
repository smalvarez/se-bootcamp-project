import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Part2() {
  const [modals, setModals] = useState({
    currentModal: null,
    summaries: {
      modal1: "",
      modal2: "",
      modal3: "",
      modal4: "",
      modal5: "",
      modal6: "",
    },
  });

  const openModal = (modalId) => {
    setModals({
      currentModal: modalId,
      summaries: {
        modal1: "",
        modal2: "",
        modal3: "",
        modal4: "",
        modal5: "",
        modal6: "",
      },
    });
  };

  const closeModal = () => {
    setModals({ ...modals, currentModal: null });
  };

  const addToCart = (modalId, unitPrice) => {
    const quantity = parseInt(
      document.getElementById(`quantity${modalId.replace("modal", "")}`).value
    );
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
    } else {
      const totalPrice = unitPrice * quantity;
      setModals((prevModals) => ({
        ...prevModals,
        summaries: {
          ...prevModals.summaries,
          [modalId]: `Great! Order of ${quantity} items is received, total price is $${totalPrice}.`,
        },
      }));
    }
  };

  const renderModal = (modalId, title, description, unitPrice, imgSrc) => (
    <Modal show={modals.currentModal === modalId} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        <p>Unit Price: ${unitPrice}</p>
        <img
          src={process.env.PUBLIC_URL + imgSrc}
          className="img-fluid"
          alt={title}
        />
        <div className="form-group">
          <label htmlFor={`quantity${modalId.replace("modal", "")}`}>
            Enter quantity:
          </label>
          <input
            type="number"
            className="form-control"
            id={`quantity${modalId.replace("modal", "")}`}
            min="1"
          />
        </div>
        <Button className="mt-3" onClick={() => addToCart(modalId, unitPrice)}>
          Add to Cart
        </Button>
        <p id={`summary${modalId.replace("modal", "")}`} className="mt-3">
          {modals.summaries[modalId]}
        </p>
      </Modal.Body>
    </Modal>
  );

  return (
    <main className="container my-4">
      <section id="part2" className="bg-light p-4 rounded">
        <h2>Part 2</h2>
        <div className="text-center mb-3">
          <h3>Simplified project development</h3>
          <h3>for a complex world</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/images/img2.bmp"}
                className="card-img-top"
                alt="Residential Solutions"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Residential Solutions</h4>
                <p className="card-text">
                  Save on your electricity bills, reduce your carbon footprint
                  and increase the value of your home.
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => openModal("modal1")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/images/img3.bmp"}
                className="card-img-top"
                alt="Utility-Scale Solutions"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Utility-Scale Solutions</h4>
                <p className="card-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => openModal("modal2")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/images/img4.bmp"}
                className="card-img-top"
                alt="Commercial Solutions"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Commercial Solutions</h4>
                <p className="card-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => openModal("modal3")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/images/img5.bmp"}
                className="card-img-top"
                alt="New Residential Solutions"
              />
              <div className="card-body text-center">
                <h4 className="card-title">New Residential Solutions</h4>
                <p className="card-text">
                  Innovative solutions for modern homes, enhancing energy
                  efficiency.
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => openModal("modal4")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/images/img6.bmp"}
                className="card-img-top"
                alt="New Utility-Scale Solutions"
              />
              <div className="card-body text-center">
                <h4 className="card-title">New Utility-Scale Solutions</h4>
                <p className="card-text">
                  Advanced technology for large-scale projects, ensuring
                  reliability.
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => openModal("modal5")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/images/img7.bmp"}
                className="card-img-top"
                alt="New Commercial Solutions"
              />
              <div className="card-body text-center">
                <h4 className="card-title">New Commercial Solutions</h4>
                <p className="card-text">
                  Customizable options for businesses, maximizing operational
                  efficiency.
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => openModal("modal6")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {renderModal(
        "modal1",
        "Residential Solutions",
        "Product Description for Residential Solutions.",
        100,
        "/images/img2.bmp"
      )}
      {renderModal(
        "modal2",
        "Utility-Scale Solutions",
        "Product Description for Utility-Scale Solutions.",
        200,
        "/images/img3.bmp"
      )}
      {renderModal(
        "modal3",
        "Commercial Solutions",
        "Product Description for Commercial Solutions.",
        300,
        "/images/img4.bmp"
      )}
      {renderModal(
        "modal4",
        "New Residential Solutions",
        "Product Description for New Residential Solutions.",
        120,
        "/images/img5.bmp"
      )}
      {renderModal(
        "modal5",
        "New Utility-Scale Solutions",
        "Product Description for New Utility-Scale Solutions.",
        220,
        "/images/img6.bmp"
      )}
      {renderModal(
        "modal6",
        "New Commercial Solutions",
        "Product Description for New Commercial Solutions.",
        320,
        "/images/img7.bmp"
      )}
    </main>
  );
}

export default Part2;
