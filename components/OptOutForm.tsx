import { Switch } from "@headlessui/react";
import { useForm } from "react-hook-form";

export type OptOutFormProps = {

};

const OptOutForm = ({}: OptOutFormProps) => {
  const inputClassNames = "border border-gray-200 mb-4 px-4 py-2 rounded w-full"

  return (
    <div className="flex flex-col mx-4 rounded-lg shadow-lg shadow-slate-500/40 md:flex-row md:mx-6">
      <div className="bg-slate-100 border border-solid border-slate-200 flex flex-col justify-between p-16 rounded-tl-lg rounded-tr-lg w-full md:rounded-bl-lg md:rounded-tr-none md:w-2/5">
        <h1 className="font-bold text-4xl text-dark-gray">Opt-Out</h1>
        <p className="hidden text-xs text-slate-400 md:block">
          Still need help? Email <a href="mailto:privacy@site.com" className="font-semibold text-blue-700 hover:text-blue-500">privacy@site.com</a>
        </p>
      </div>

      <div className="bg-white border border-solid border-slate-100 flex-auto p-16 rounded-br-lg rounded-bl-lg w-full md:rounded-bl-none md:rounded-tr-lg md:w-3/5">
        <h3 className="font-semibold mb-2 text-dark-gray">
          Enter your email and/or phone
        </h3>
        <form>
          <input
            id="email"
            className={inputClassNames}
            name="email"
            maxLength={256}
            placeholder="Email"
            title="Enter email address"
            type="email"
          />
          <input
            id="phone"
            className={inputClassNames}
            name="phone"
            pattern="[0-9]+"
            placeholder="Phone"
            title="Enter phone number"
            type="text"
          />
          <div className="flex justify-center items-center">
            <button className="bg-blue-700 font-semibold px-5 py-3 rounded-full text-base text-center text-white w-full hover:bg-blue-500 md:w-1/2">
              Submit
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400 md:hidden">
          Still need help? Email <a href="mailto:privacy@test.com" className="font-semibold text-blue-700 hover:text-blue-500">privacy@test.com</a>
        </p>
      </div>
    </div>
  );
};

export default OptOutForm;
