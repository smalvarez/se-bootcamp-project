import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Part2() {
  const [showModal, setShowModal] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
  });
  const [summary, setSummary] = useState({
    modal1: "",
    modal2: "",
    modal3: "",
    modal4: "",
    modal5: "",
    modal6: "",
  });

  const openModal = (modalId) => {
    setShowModal({ ...showModal, [modalId]: true });
  };

  const closeModal = (modalId) => {
    setShowModal({ ...showModal, [modalId]: false });
  };

  const addToCart = (modalId, unitPrice) => {
    const quantity = parseInt(
      document.getElementById(`quantity${modalId.replace("modal", "")}`).value
    );
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
    } else {
      const totalPrice = unitPrice * quantity;
      setSummary({
        ...summary,
        [modalId]: `Great! Order of ${quantity} items is received, total price is $${totalPrice}.`,
      });
    }
  };

  return (
    <main className="container my-4">
      <section id="part2" className="bg-light p-4 rounded">
        <h2>Part 2</h2>
        <div className="text-center mb-3">
          <h3>Simplified project development</h3>
          <h3>for a complex world</h3>
        </div>
        <div className="card-deck">
          <div className="card">
            <img
              src="images/img2.bmp"
              className="card-img-top"
              alt="Residential Solutions"
            />
            <div className="card-body text-center">
              <h4 className="card-title">Residential Solutions</h4>
              <p className="card-text">
                Save on your electricity bills, reduce your carbon footprint and
                increase the value of your home.
              </p>
              <Button
                variant="outline-primary"
                onClick={() => openModal("modal1")}
              >
                More
              </Button>
            </div>
          </div>
          <div className="card">
            <img
              src="images/img3.bmp"
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
          <div className="card">
            <img
              src="images/img4.bmp"
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

        <div className="card-deck mt-4">
          <div className="card">
            <img
              src="images/img5.bmp"
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
          <div className="card">
            <img
              src="images/img6.bmp"
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
          <div className="card">
            <img
              src="images/img7.bmp"
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
      </section>

      {/* Modals */}
      <Modal show={showModal.modal1} onHide={() => closeModal("modal1")}>
        <Modal.Header closeButton>
          <Modal.Title>Residential Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Description for Residential Solutions.</p>
          <p>Unit Price: $100</p>
          <img
            src="images/img2.bmp"
            className="img-fluid"
            alt="Residential Solutions"
          />
          <div className="form-group">
            <label htmlFor="quantity1">Enter quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity1"
              min="1"
            />
          </div>
          <Button className="mt-3" onClick={() => addToCart("modal1", 100)}>
            Add to Cart
          </Button>
          <p id="summary1" className="mt-3">
            {summary.modal1}
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showModal.modal2} onHide={() => closeModal("modal2")}>
        <Modal.Header closeButton>
          <Modal.Title>Utility-Scale Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Description for Utility-Scale Solutions.</p>
          <p>Unit Price: $200</p>
          <img
            src="images/img3.bmp"
            className="img-fluid"
            alt="Utility-Scale Solutions"
          />
          <div className="form-group">
            <label htmlFor="quantity2">Enter quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity2"
              min="1"
            />
          </div>
          <Button className="mt-3" onClick={() => addToCart("modal2", 200)}>
            Add to Cart
          </Button>
          <p id="summary2" className="mt-3">
            {summary.modal2}
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showModal.modal3} onHide={() => closeModal("modal3")}>
        <Modal.Header closeButton>
          <Modal.Title>Commercial Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Description for Commercial Solutions.</p>
          <p>Unit Price: $300</p>
          <img
            src="images/img4.bmp"
            className="img-fluid"
            alt="Commercial Solutions"
          />
          <div className="form-group">
            <label htmlFor="quantity3">Enter quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity3"
              min="1"
            />
          </div>
          <Button className="mt-3" onClick={() => addToCart("modal3", 300)}>
            Add to Cart
          </Button>
          <p id="summary3" className="mt-3">
            {summary.modal3}
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showModal.modal4} onHide={() => closeModal("modal4")}>
        <Modal.Header closeButton>
          <Modal.Title>New Residential Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Description for New Residential Solutions.</p>
          <p>Unit Price: $120</p>
          <img
            src="images/img5.bmp"
            className="img-fluid"
            alt="New Residential Solutions"
          />
          <div className="form-group">
            <label htmlFor="quantity4">Enter quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity4"
              min="1"
            />
          </div>
          <Button className="mt-3" onClick={() => addToCart("modal4", 120)}>
            Add to Cart
          </Button>
          <p id="summary4" className="mt-3">
            {summary.modal4}
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showModal.modal5} onHide={() => closeModal("modal5")}>
        <Modal.Header closeButton>
          <Modal.Title>New Utility-Scale Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Description for New Utility-Scale Solutions.</p>
          <p>Unit Price: $220</p>
          <img
            src="images/img6.bmp"
            className="img-fluid"
            alt="New Utility-Scale Solutions"
          />
          <div className="form-group">
            <label htmlFor="quantity5">Enter quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity5"
              min="1"
            />
          </div>
          <Button className="mt-3" onClick={() => addToCart("modal5", 220)}>
            Add to Cart
          </Button>
          <p id="summary5" className="mt-3">
            {summary.modal5}
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showModal.modal6} onHide={() => closeModal("modal6")}>
        <Modal.Header closeButton>
          <Modal.Title>New Commercial Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Description for New Commercial Solutions.</p>
          <p>Unit Price: $320</p>
          <img
            src="images/img7.bmp"
            className="img-fluid"
            alt="New Commercial Solutions"
          />
          <div className="form-group">
            <label htmlFor="quantity6">Enter quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity6"
              min="1"
            />
          </div>
          <Button className="mt-3" onClick={() => addToCart("modal6", 320)}>
            Add to Cart
          </Button>
          <p id="summary6" className="mt-3">
            {summary.modal6}
          </p>
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default Part2;
