import React from 'react';

function Footer() {
  const contactEmail = 'alquifincas2023@fincas.com';

  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center" style={{fontSize: '20px'}}>
            <p style={{color: 'white'}}>Contáctanos: <a style={{color: 'white'}} href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <p style={{color: 'white'}}>Corporación Universitaria Iberoamericana</p>
            <p style={{color: 'white'}}>2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;