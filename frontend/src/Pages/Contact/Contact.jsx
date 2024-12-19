import BreadcrumbTab from "@/Utils/BreadcrumbTab";
import { input } from "@/Utils/Class/input";
import TabTitle from "@/Utils/TabTitle";

const Contact = () => {
  return (
    <div>
      <TabTitle title="Contact" />
      <BreadcrumbTab menu={[{ name: "Contact", link: null }]} />
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold text-color_2">
          Send Message
        </h1>
        <form className="mt-4 flex flex-col lg:flex-row gap-4">
          <div className="lg:w-4/12 space-y-5">
            <div className="">
              <label className="font-semibold">
                Name
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="name"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Email
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="email"
                name="email"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <div className="">
              <label className="font-semibold">
                Phone
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
              <input
                type="text"
                name="phone"
                className={input.form}
                placeholder="Type Here"
                required
              />
            </div>
            <button type="submit" className="bg-color_1 text-white text-lg font-medium px-3 py-1 w-full hover:bg-color_2 duration-300">Submit</button>
          </div>
          <div className="lg:w-8/12">
            <div className="">
              <label className="font-semibold">
                Your Message
                <span className="text-red-400 ml-1 text-sm">
                  (required)
                </span>{" "}
              </label>
            </div>
            <textarea
              name="message"
              rows="11"
              className={input.form}
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
