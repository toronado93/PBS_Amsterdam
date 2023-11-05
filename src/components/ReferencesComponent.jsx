import iconFrame from "../assets//img/desktop/references/Frame-33.png";
import TopDesignComponent from "./TopDesignComponent";
import leftVector from "../assets/img/desktop/references/vector-left.png";
import rightVector from "../assets/img/desktop/references/vector-right.png";
import logoBox from "../assets/img/desktop/references/Logo-Box.png";
function ReferencesComponent() {
  return (
    <section>
      <TopDesignComponent
        title={"References"}
        iconsrc={iconFrame}
      ></TopDesignComponent>
      <div className="container flex  mx-auto mt-32">
        <img className="self-center" src={leftVector}></img>
        <div className="relative">
          <img className="mx-auto logo-box relative " src={logoBox}></img>
        </div>

        <img className="self-center" src={rightVector}></img>
      </div>
    </section>
  );
}

export default ReferencesComponent;
