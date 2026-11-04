import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto border-top w-100">
      <Container>
        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} Our Group. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;