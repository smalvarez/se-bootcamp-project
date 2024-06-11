import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Part2() {
  const openModal = (modalId) => {
    const modal = new window.bootstrap.Modal(document.getElementById(modalId));
    modal.show();
  };

  const addToCart = (modalId, unitPrice) => {
    const quantity = parseInt(
      document.getElementById(`quantity${modalId.replace("modal", "")}`).value
    );
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
    } else {
      const totalPrice = unitPrice * quantity;
      document.getElementById(
        `summary${modalId.replace("modal", "")}`
      ).innerText = `Great! Order of ${quantity} items is received, total price is $${totalPrice}.`;
    }
  };

  return (
    <section id="part2" className="bg-light p-4 rounded">
      <h2>Part 2</h2>
      <div className="text-center mb-3">
        <h3>Simplified project development</h3>
        <h3>for a complex world</h3>
      </div>
      <div className="d-flex justify-content-between">
        <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
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
            <button
              className="btn btn-outline-primary"
              onClick={() => openModal("modal1")}
            >
              More
            </button>
            <p className="card-text">Unit Price: $100</p>
            <div className="form-group">
              <label htmlFor="quantity1">Enter quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity1"
                min="1"
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => addToCart("modal1", 100)}
            >
              Add to Cart
            </button>
          </div>
          <div className="card-footer" id="summary1"></div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
          <img
            src="images/img3.bmp"
            className="card-img-top"
            alt="Utility-Scale Solutions"
          />
          <div className="card-body text-center">
            <h4 className="card-title">Utility-Scale Solutions</h4>
            <p className="card-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={() => openModal("modal2")}
            >
              More
            </button>
            <p className="card-text">Unit Price: $200</p>
            <div className="form-group">
              <label htmlFor="quantity2">Enter quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity2"
                min="1"
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => addToCart("modal2", 200)}
            >
              Add to Cart
            </button>
          </div>
          <div className="card-footer" id="summary2"></div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
          <img
            src="images/img4.bmp"
            className="card-img-top"
            alt="Commercial Solutions"
          />
          <div className="card-body text-center">
            <h4 className="card-title">Commercial Solutions</h4>
            <p className="card-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={() => openModal("modal3")}
            >
              More
            </button>
            <p className="card-text">Unit Price: $300</p>
            <div className="form-group">
              <label htmlFor="quantity3">Enter quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity3"
                min="1"
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => addToCart("modal3", 300)}
            >
              Add to Cart
            </button>
          </div>
          <div className="card-footer" id="summary3"></div>
        </div>
      </div>

      {/* Modals */}
      <div id="modal1" className="modal fade" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Residential Solutions</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>More information about Residential Solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="modal2" className="modal fade" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Utility-Scale Solutions</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>More information about Utility-Scale Solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="modal3" className="modal fade" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Commercial Solutions</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>More information about Commercial Solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Part2;
