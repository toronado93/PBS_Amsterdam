import pic1 from "../assets/img/desktop/main/mainpic-1.png";
import pic2 from "../assets/img/desktop/main/mainpic-2.png";
import pic3 from "../assets/img/desktop/main/mainpic-3.png";

function Main() {
  return (
    <section className="main container m-auto flex flex-col gap-16">
      <div className="text-center mt-16">
        <h1 className="text-2xl sm:text-6xl font-bold w-3/5 m-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="text-center sm:text-left  mt-12 text-sm w-4/5 m-auto">
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
        <p className="text-center sm:text-left mt-4 text-sm w-4/5 m-auto mb-12">
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
          non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
          lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
          sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
          nisi, ac posuere leo.
        </p>
        <img className="w-4/5 sm:w-auto m-auto" src={pic1}></img>
      </div>
      <div className="text-center items-center lg:flex ">
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-4xl leading-normal w-3/4 m-auto font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-center sm:text-left text-sm w-3/4 m-auto mt-8 ">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img className="w-4/5 sm:w-auto m-auto mt-6" src={pic2}></img>
        </div>
      </div>
      <div className="text-center items-center lg:flex">
        <div className="lg:w-1/2">
          <img className="w-4/5 sm:w-auto m-auto mt-6" src={pic3}></img>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-center sm:text-left text-2xl sm:text-4xl leading-normal mt-4 sm:mt-0 w-3/4 m-auto font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-center sm:text-left text-sm w-3/4 m-auto mt-8 ">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
      </div>

      <div className="left-border-gradient"></div>
    </section>
  );
}

export default Main;
