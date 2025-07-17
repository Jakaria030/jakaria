import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail, MdSubject } from "react-icons/md";
import Heading from "./Heading";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8 md:py-16" id="contact">
      <Heading heading={"Contact Me"} subHeading={"Get In Touch"}></Heading>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="basis-1/2 space-y-5">
          <div>
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <p className="font-poppins">
              Contact me anytime! Feel free to send a message — I'd love to hear
              from you.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <figure>
              <FaUser className="text-3xl text-crimson" />
            </figure>
            <div className="-space-y-1">
              <h3 className="text-xl font-medium">Name</h3>
              <p className="text-lg">Gulam Jakaria</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <figure>
              <FaLocationDot className="text-3xl text-crimson" />
            </figure>
            <div className="-space-y-1">
              <h3 className="text-xl font-medium">Address</h3>
              <p className="text-lg">Kishoreganj, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <figure>
              <MdMail className="text-3xl text-crimson" />
            </figure>
            <div className="-space-y-1">
              <h3 className="text-xl font-medium">Email</h3>
              <p className="text-lg">gulamjakaria99@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="text-xl font-bold mb-2">Message Me</h2>
          <form
            className="space-y-3"
            action="https://formsubmit.co/jakariag84@gmail.com"
            method="POST"
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <label className="input input-bordered flex items-center gap-2">
                <FaUser className="h-6 w-6 opacity-70" />
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder="Name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <MdMail className="h-6 w-6 opacity-70" />
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <MdSubject className="h-6 w-6 opacity-70" />
              <input
                type="text"
                name="subject"
                className="grow"
                placeholder="Subject"
              />
            </label>

            <textarea
              name="message"
              className="textarea w-full textarea-bordered"
              placeholder="Message"
            ></textarea>
            <input type="hidden" name="_template" value="table"></input>
            <button className="bg-crimson border-2 border-crimson text-white px-4 py-2 rounded-md font-medium hover:bg-transparent transition-all duration-200 ease-in-out active:scale-95 hover:text-dark">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
