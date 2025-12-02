import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { useRef } from "react"
import { formErrorMessages } from "@/config/errors.config"

export type OptOutFormProps = {
  email: string
  removeComboInput?: boolean
  removeEmailInput?: boolean
  removePhoneInput?: boolean
}

const OptOutForm = ({
  email = "",
  removeComboInput = false,
  removeEmailInput = true,
  removePhoneInput = true,
}: OptOutFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    trigger,
  } = useForm()

  //Implement useRefs
  const comboRef = useRef(null)
  const comboInputRef = useRef(null)

  //Define classes for styling certian elements
  const errorContainerClassNames = "mt-1 ml-2 text-xs text-red-500"
  const inputClassNames = "border border-gray-200 px-4 py-2 rounded w-full"
  const inputContainerClassNames = "mb-6 group relative"
  const labelClassNames =
    "absolute bg-white px-1 text-gray-400 text-sm left-3 -top-3 transition-opacity duration-200 pointer-events-none group-has-[:placeholder-shown]:hidden"
  const linkClassNames = "font-semibold text-blue-700 hover:text-blue-500"

  const hrefEmail = `mailto:${email}`

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
        Still need help? Email{" "}
        <a href={hrefEmail} className={linkClassNames}>
          {email}
        </a>
      </>
    )
  }

  const onOptOutSubmit = async (data: any) => {}

  return (
    <div className="flex flex-col mx-4 rounded-lg shadow-lg shadow-slate-500/40 md:flex-row md:mx-6">
      <div className="bg-slate-100 border border-solid border-slate-200 flex flex-col justify-between p-16 rounded-tl-lg rounded-tr-lg w-full md:rounded-bl-lg md:rounded-tr-none md:w-2/5">
        <h1 className="font-bold text-4xl text-dark-gray">Opt-Out</h1>
        <p className="hidden text-xs text-slate-400 md:block">
          <MessageHelpComponent email={email} hrefEmail={hrefEmail} />
        </p>
      </div>

      <div className="bg-white border border-solid border-slate-100 flex-auto p-16 rounded-br-lg rounded-bl-lg w-full md:rounded-bl-none md:rounded-tr-lg md:w-3/5">
        <h3 className="font-semibold mb-4 text-dark-gray">
          Enter your email or phone
        </h3>
        <form id="optOutForm" onSubmit={handleSubmit(onOptOutSubmit)}>
          {removeComboInput ? (
            <></>
          ) : (
            <div className={inputContainerClassNames}>
              <label className={labelClassNames}>Email / Phone</label>
              <Controller
                name="emailPhone"
                control={control} // You'll need to destructure this from useForm()
                rules={{
                  required: formErrorMessages.emailPhone.required,
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <IMaskInput
                    className={inputClassNames}
                    id="emailPhone"
                    mask={[
                      {
                        mask: "(000) 000-0000",
                      },
                      {
                        mask: /^\S*@?\S*$/,
                      },
                    ]}
                    placeholder="Email or Phone"
                    title="Enter email address or phone number"
                    value={value || ""}
                    onAccept={(value) => onChange(value)}
                    onBlur={onBlur}
                    inputRef={ref}
                  />
                )}
              />
              {errors.emailPhone && (
                <div className={errorContainerClassNames}>
                  {errors.emailPhone.message?.toString()}
                </div>
              )}
              {/* <IMaskInput
                className={inputClassNames}
                id="emailPhone"
                //inputRef={comboInputRef}
                mask={[
                  {
                    mask: "(000) 000-0000"
                  },
                  {
                    mask: /^\S*@?\S*$/
                  }
                ]}
                placeholder='Email or Phone'
                //ref={comboRef}
                title="Enter email address or phone number"
                { ...register('emailPhone', {
                  required: formErrorMessages.emailPhone.required,
                })}
              />
              {errors.emailPhone && (
                <div className={errorContainerClassNames}>
                  {errors.emailPhone.message?.toString()}
                </div>
              )} */}
            </div>
          )}
          {removeEmailInput ? (
            <></>
          ) : (
            <div className={inputContainerClassNames}>
              <label className={labelClassNames}>Email</label>
              <input
                className={inputClassNames}
                id="email"
                maxLength={256}
                placeholder="Email"
                title="Enter email address"
                type="email"
                {...register("email", {
                  required: formErrorMessages.email.required,
                  pattern:
                    /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/,
                })}
              />
              {errors.email && (
                <div className={errorContainerClassNames}>
                  {errors.email.message?.toString()}
                </div>
              )}
            </div>
          )}
          {removePhoneInput ? (
            <></>
          ) : (
            <div className={inputContainerClassNames}>
              <Controller
                control={control}
                name="phone"
                rules={{
                  required: formErrorMessages.phone.required,
                  validate: (value: string) => {
                    const cleaned = value.replace(/\D/g, "")
                    return (
                      cleaned.length === 10 || formErrorMessages.phone.invalid
                    )
                  },
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <>
                    <label className={labelClassNames}>Phone</label>
                    <IMaskInput
                      id="phone"
                      mask="(000) 000-0000"
                      unmask={true}
                      value={value}
                      onAccept={(val) => onChange(val)}
                      onBlur={onBlur}
                      inputRef={ref}
                      className={inputClassNames}
                      placeholder="Phone"
                      title="Enter phone number"
                    />
                  </>
                )}
              />
              {errors.phone && (
                <div className={errorContainerClassNames}>
                  {errors.phone.message?.toString()}
                </div>
              )}
              {/* <input
                className={inputClassNames}
                id="phone"
                name="phone"
                pattern="[0-9]+"
                placeholder="Phone"
                title="Enter phone number"
                
              /> */}
            </div>
          )}

          <div className="flex justify-center items-center">
            <button className="bg-blue-700 font-semibold px-5 py-3 rounded-2xl text-base text-center text-white w-full hover:bg-blue-500 md:w-64">
              Submit
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400 md:hidden">
          <MessageHelpComponent email={email} hrefEmail={hrefEmail} />
        </p>
      </div>
    </div>
  )
}

export default OptOutForm
