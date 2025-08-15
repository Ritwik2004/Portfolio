import nodemailer from "nodemailer"
const mailSend = async(message, sub)=>{
    try {
        if(!process.env.OFFICIAL_EMAIL || !process.env.EMAIL_PASSWORD){
            // console.log("Something went wrong.")
        }
        if(typeof message != "string"){
            message = String(message);
        }
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.OFFICIAL_EMAIL,
                pass : process.env.EMAIL_PASSWORD
            },
        })
        // console.log("Official email : ", process.env.OFFICIAL_EMAIL,"\nMy email : ",process.env.RECEIVER_Email)
        const mailOptions = {
            from : process.env.OFFICIAL_EMAIL,
            to : process.env.RECEIVER_Email,
            subject : sub,
            text : message
        }

        const info = await transporter.sendMail(mailOptions);
        return `Email sent ${info.response}`
    } catch (error) {
        // console.log("Error while sending mail : ", error)
        return `Can't send ${error}`
    }
}

export {mailSend}