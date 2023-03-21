import Container from './App.styles';

import qrCode from './assets/images/image-qr-code.png';

function App() {
  return (
    <Container>
      <div className="qrCode">
        <img
          src={qrCode}
          alt="QRCODE"
        />
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </Container>
  );
}

export default App;
