import { Switch } from "@headlessui/react"
import { useForm } from "react-hook-form"
import { IMaskInput } from "react-imask" 
import { formatPhone } from "../utils/helpers"

export type OptOutFormProps = {
  email: string
  onSubmit: Function
  removeComboInput?: boolean
  removeEmailInput?: boolean
  removePhoneInput?: boolean
};

const OptOutForm = ({
  onSubmit,
  email="",
  removeComboInput=false,
  removeEmailInput=false,
  removePhoneInput=false,
}: OptOutFormProps) => {
  const inputClassNames = "border border-gray-200 mb-4 px-4 py-2 rounded w-full"
  const linkClassNames = "font-semibold text-blue-700 hover:text-blue-500"

  const hrefEmail = `mailto:${email}`
  //const hrefPhone = `tel:${formatPhone(phone)}`

  type MessageHelpComponentProps = {
    email: string
    hrefEmail: string
  }

  const MessageHelpComponent = ({
    email,
    hrefEmail,
  }: MessageHelpComponentProps) => {
    return (
      <>
        Still need help? Email <a href={hrefEmail} className={linkClassNames}>{email}</a>
      </> 
    )
  }

  const messageHelp = `Still need help? Email <a href={hrefEmail} className={linkClassNames}>{email}</a>`

  return (
    <div className="flex flex-col mx-4 rounded-lg shadow-lg shadow-slate-500/40 md:flex-row md:mx-6">
      <div className="bg-slate-100 border border-solid border-slate-200 flex flex-col justify-between p-16 rounded-tl-lg rounded-tr-lg w-full md:rounded-bl-lg md:rounded-tr-none md:w-2/5">
        <h1 className="font-bold text-4xl text-dark-gray">Opt-Out</h1>
        <p className="hidden text-xs text-slate-400 md:block">
          <MessageHelpComponent
            email={email}
            hrefEmail={hrefEmail}
          />
        </p>
      </div>

      <div className="bg-white border border-solid border-slate-100 flex-auto p-16 rounded-br-lg rounded-bl-lg w-full md:rounded-bl-none md:rounded-tr-lg md:w-3/5">
        <h3 className="font-semibold mb-2 text-dark-gray">
          Enter your email and/or phone
        </h3>
        <form onSubmit={onSubmit()}>
          { removeEmailInput ?
            ""
            :
            <input
              id="email"
              className={inputClassNames}
              name="email"
              maxLength={256}
              placeholder="Email"
              title="Enter email address"
              type="email"
            />
          }
          { removePhoneInput ?
            ""
            :
            <input
              id="phone"
              className={inputClassNames}
              name="phone"
              pattern="[0-9]+"
              placeholder="Phone"
              title="Enter phone number"
              type="text"
            />
          }
          
          <div className="flex justify-center items-center">
            <button className="bg-blue-700 font-semibold px-5 py-3 rounded-2xl text-base text-center text-white w-full hover:bg-blue-500 md:w-1/2">
              Submit
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400 md:hidden">
          <MessageHelpComponent
            email={email}
            hrefEmail={hrefEmail}
          />
        </p>
      </div>
    </div>
  );
};

export default OptOutForm;
