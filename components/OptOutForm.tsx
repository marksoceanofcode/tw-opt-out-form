import { Switch } from '@headlessui/react'
import { useForm } from "react-hook-form"

export type OptOutFormProps = {

}

const OptOutForm = ({

}: OptOutFormProps) => {
    return(
        <div className='flex flex-col mx-4 shadow-lg shadow-slate-500/40 md:flex-row md:mx-6'>
            <div className='bg-slate-100 border border-solid border-slate-200 flex-auto p-16 rounded-tl-lg w-full md:w-2/5'>
                <h1 className='font-bold text-4xl'>
                    Opt-Out
                </h1>
            </div>
            <div className='bg-white border border-solid border-slate-100 flex-auto p-16 w-full md:w-3/5'>
                World
            </div>
        </div>
    )
}

export default OptOutForm