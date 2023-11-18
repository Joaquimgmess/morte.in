import { HiArrowLongRight, HiArrowRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">Let's <span className="text-accent">connect</span></h2>
          <form
            action=""
            method="post"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" name="name" placeholder="Name" className="input" />
              <input type="text" name="_replyto" placeholder="e-mail" className="input" />
            </div>
            <input type="text" name="_subject" placeholder="subject" className="input" />
            <textarea name="message" placeholder="message" className="textarea"></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
              <HiArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all dutation-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
