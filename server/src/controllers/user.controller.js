import { MailSubject } from "../constant.js";
import { mailSend } from "../utils/mailServer.js";


const sendingMail = async(req,res)=>{
    const {email, name, message} = req.body
    if(!email || !name || !message){
        return res.json({success : false, message : "All fields are required"})
    }
    const finalMessage = `Email : ${email}, \nName : ${name} \n ${message}`;
    const SendingMail = await mailSend(finalMessage, MailSubject)
    if(!sendingMail){
        return res.json({success : false, message : "something went wrong while sending mail"})
    }
    return res.json({success : true, SendingMail})
}

export {
    sendingMail
}