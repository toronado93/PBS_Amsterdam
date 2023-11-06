import TopDesignComponent from "./TopDesignComponent";
import iconContact from "../assets/img/icons/contact/Frame-34.svg";
import Form from "./Form";
import Info from "./Info";
function ContactComponent() {
  return (
    <section className="sm:mb-10">
      <TopDesignComponent
        title={"Communucation Form & Contact"}
        iconsrc={iconContact}
      ></TopDesignComponent>
      <div className="flex flex-col sm:flex-row justify-center gap-8  mt-28">
        <Form></Form>
        <Info></Info>
      </div>
    </section>
  );
}

export default ContactComponent;
