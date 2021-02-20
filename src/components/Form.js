import NavBar from "./NavBar";
import Footer from "./Footer";

const Form = () => (
  <div className="d-flex flex-column vh-100">
    <NavBar />
    <div className="Main-Page h-100 d-flex flex-column justify-content-center">
      <div className="card col-lg-8 mx-auto p-4">
        <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label for="exampleFormControlInput1">Email Adresi</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="isim@email.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Not</label>
            <textarea
              className="form-control"
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

export default Form;
