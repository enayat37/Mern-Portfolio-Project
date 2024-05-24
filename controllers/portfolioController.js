// controllers/portfolioController.js
const ContactMessage = require("../Models/ContactMessage");

const sendEmailController = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    //validation
    if (!email || !subject || !message) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    const newMessage = new ContactMessage({
      email,
      subject,
      message,
    });

    await newMessage.save();
    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
