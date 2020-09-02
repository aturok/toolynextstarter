// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendEmail } from "../../api/emailform";
import { emailaddress } from "../../constants/constants";

export default (req, res) => {
    const contact = req.body;
    const subj = `Contact request: ${contact.firstname} of ${contact.company}`;
    const body = `Company: ${contact.company}\nName: ${contact.firstname}\nEmail: ${contact.email}\nPhone: ${contact.phone}`;
    sendEmail(emailaddress, subj, body);
    res.statusCode = 200;
    res.json({});
}
