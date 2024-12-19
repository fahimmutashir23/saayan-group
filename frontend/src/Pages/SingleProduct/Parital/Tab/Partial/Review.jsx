import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import { Rating } from "primereact/rating";

const Review = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 divide-x-2">
      <div className="lg:w-4/12">
        <h1 className="text-xl font-semibold text-color_1">
          Give your feedback
        </h1>
        <form className="mt-2 space-y-2">
          <div className="">
            <label className="font-semibold">
              Name
              <span className="text-red-400 ml-1">(required)</span>{" "}
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
              Message
              <span className="text-red-400 ml-1">(required)</span>{" "}
            </label>
            <textarea
              className={input.form}
              name="message"
              required
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>
          <Rating
            value={4}
            // onChange={(e) => setValue(e.value)}
            cancel={false}
            required
          />
          <button type="submit" className={button.form}>
            Submit
          </button>
        </form>
      </div>
      <div className="lg:w-8/12 pl-4">
        <h1 className="text-xl font-semibold text-color_1">
         Client Review
        </h1>
        <div className="mt-2">
          {/* {reviews.result.map((review) => ( */}
          <div>
            <h1 className="font-medium text-lg flex items-center gap-1 border-b border-color_3">
              <div className="h-3 w-3 rounded-full bg-color_1"></div>{" "}
              {"review.userName"}
            </h1>
            <p>{"review.comment"}</p>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Review;
