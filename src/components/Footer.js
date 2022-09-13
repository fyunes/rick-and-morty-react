import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-3 bg-dark">
        <div className="row mx-auto">
          <div className="col font-weight-bold">
            <img
              src="img/logotipo-de-github.png"
              alt="GitHub logo."
              width="30px"
            />
            Developed by:
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/saveasfabri"
              target="_blank"
              rel="noreferrer"
            >
              Fabricio Hang
            </a>
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/fyunes"
              target="_blank"
              rel="noreferrer"
            >
              Franco Yunes
            </a>
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/MelinaLencina"
              target="_blank"
              rel="noreferrer"
            >
              Melina Lencina
            </a>
          </div>
          <div className="col text-footer">
            <a
              href="https://github.com/hernandw"
              target="_blank"
              rel="noreferrer"
            >
              Williams Hernández
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;