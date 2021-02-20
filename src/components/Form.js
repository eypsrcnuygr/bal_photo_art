import NavBar from "./NavBar";
import Footer from "./Footer";



const Form = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
    props.history.push('/Thanks');
  }
  
  return (
  <div className="d-flex flex-column vh-100">
    <NavBar />
    <div className="Main-Page h-100 d-flex flex-column justify-content-center">
      <div className="card col-lg-8 mx-auto p-4">
        <form name="contact" method="POST" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
            <label for="exampleFormControlInput1">Adınız</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="İsim"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email Adresi</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="isim@email.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Not</label>
            <textarea
              className="form-control"
              name="message"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Gönder</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);
  }
export default Form;
