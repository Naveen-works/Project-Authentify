import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"

import { mailtrapClient,sender } from "./mailtrap.config.js"


export const sendVerificationEmail = async (email,verificationToken) =>
{
    const recipient=[{email}]

    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })

        console.log("Email send successfully",response)
    }catch(error)
    {
        console.error("Error sending verification: ",error)
        throw new Error(`Error sending verification email : ${error}`)
    }
}


export const sendWelcomeEmail= async (email,name)=>{
    const recipient = [{email}];
    try{
        const response = await  mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid:"9ebd9b0f-a07f-44cc-abd8-e74b5bab078a",
            template_variables:{
                name:name,
            },
        })
        console.log("Email sent successfully ", response);

    }catch(error){
        console.error(`Error sending email `,error);
        throw new Error(`Error sending welcome email: ${error}`)
    }
   

}

/*
 const { MailtrapClient } = require("mailtrap");

const TOKEN = "****878a";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "naveenkarthik26042005@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    template_uuid: "9ebd9b0f-a07f-44cc-abd8-e74b5bab078a",
    template_variables: {
      "name": "Test_Name"
    }
  })
  .then(console.log, console.error);
*/