# Opt-Out form made with Tailwind CSS
I wanted to create a form that could be used for opt-out out of communications. This form comes with some built-in functionality, that allows different form inputs.
- A "combo" input that allows for entering a email or phone number
- A "email" input that allows for entering a email address
- A "phone" input that allows for entering a phone number
- Additionally, the form can show a backup contact email a user can use, should they encounter some issue with the form request or otherwise feel their opt-out has not been processed
- Mobile and Desktop responsive
- Button disables after form submit in the onclick function
- Easily modifiable should you want to pass a handler function in for the button click

## OptOutForm - Component Parameters
```bash
email: string //An email address where users could send a direct email, in-case there are issues with the form API call
removeComboInput?: boolean //If "true", remove the combo input. "false" is default
removeEmailInput?: boolean //If "true", remove the email input. "true" is default
removePhoneInput?: boolean //If "true", remove the phone input. "true" is default
```

#### Use
```bash
<OptOutForm
    email="privacy@oursite.com"
    removeComboInput={false}
    removeEmailInput={true}
    removePhoneInput={true}
/>
```

## To Run Locally
Install the packages:

```bash
yarn install
# or your preferred package installer
```

Start the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
