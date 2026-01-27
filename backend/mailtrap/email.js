import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";


export const sendVerificationEmail = async(email,verificationToken) =>{
    const recipient = [{email}]

    try {
        const respose = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })

        console.log("Email sent successfully", respose);
        
    } catch (error) {
        console.log(`Error sending verifivation`,error);
        throw new Error(`Error sending verification email:${error}`)
    }
}