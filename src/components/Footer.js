import '../components/footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="block" id="diva"></div>
        <div className="left1">
          <p className="address">
            <strong>Akrutive Interiors</strong><br /><br />Matruchhaya Niwas, Santosh nagar,<br />O T
            section Ulhasnagar,<br /> Maharashtra 421004.<br /> Connect us-8788083750,7420861174.<br/>
            akrutiveinteriors@gmail.com
          </p>
        </div>
        <div className="right1">
          <p className="social_media">
            <a href="https://www.facebook.com/profile.php?id=100076895297254"><img src="/images/images/icons8-facebook-48.png"
              className="icon1"></img></a>
            <a href="https://api.whatsapp.com/send?phone=+918788083759"><img
              src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" className="icon1" /></a>
            <a data-testid="insta-link" href="https://www.instagram.com/invites/contact/?i=1kzibxf4t4osi&utm_content=n3jal51"><img
              src="/images/images/icons8-instagram-48.png" className="icon1"></img></a>
            <a href="https://www.linkedin.com/company/akrutive-interiors"><img
              src="https://img.icons8.com/color/48/000000/linkedin.png" className="icon1"></img></a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
