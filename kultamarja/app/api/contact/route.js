import nodemailer from 'nodemailer';

const EMAIL = "teamkultamarja@gmail.com"
const KEY = "mpox ocft xksl qwph"

// q: I had internal server error 500 when I tried to send the email, why?
// a: I had to enable less secure apps in my gmail account settings
// https://myaccount.google.com/lesssecureapps

export async function POST(req, res) {
  
  if (req.method === "POST") {
    const body = await req.json();
    const { email, message } = body;



    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL,
        pass: KEY,
      },
    });

    const mailOptions = {
      from: email,
      to: EMAIL, 
      subject: `New contact request from ${email}`,
      html: `
        <h1>New Contact Request:</h1>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Failed to send email");
      return new Response(JSON.stringify({ message: "Failed to send email" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } else {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}