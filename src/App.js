import Container from './App.styles';

import qrCode from './assets/images/image-qr-code.png';

function App() {
  return (
    <Container>
      <main className="qrCode">
        <img
          src={qrCode}
          alt="QRCODE"
        />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </main>
    </Container>
  );
}

export default App;
