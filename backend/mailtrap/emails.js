import { VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_REQUEST_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js"

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
            template_uuid:"6c1a3b2d-54c0-4a67-bb2e-cb20bd2b81b1",
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

export const sendPasswordResetEmail =async (email,resetURL)=>{
  const recipient=[{email}];

  try{
    const response = await mailtrapClient.send({
      from:sender,
      to:recipient,
      subject:"Reset your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
      category:"Password reset"
    })
    console.log("Password reset email sent successfully", response);
  }catch(error){
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email : ${error}`)
  }
}

export const sendResetSuccessEmail = async(email)=>{
    const recipient =[{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject: "Password reset successful",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password reset"
        });
        console.log("Password reset email sent successfully", response);
    }catch(error){
        console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email : ${error}`)
    }

}