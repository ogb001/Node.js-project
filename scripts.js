
// let hello = ("hello world")

// console.log("Hello World")



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.write("Hollo Node")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    
});




// create a file named email-sender  npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services like 'yahoo', 'outlook', etc.
    auth: {
        user: 'obyno900@gmail.com', // Your email address
        pass: 'obinna'   // Your email password or an app-specific password
    }
});

// Set up email data
const mailOptions = {
    from: 'obyno900@gmail.com', // Sender address
    to: 'recipient-email@example.com', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'Hello, this is a test email sent using nodemailer!' // Plain text body
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Message sent:', info.response);
});


// const generatePassword = require('generate-password');

// const password = generatePassword.generate({
//     length: 12,
//     numbers: true,
//     symbols: true,
//     uppercase: true,
//     lowercase: true,
//     strict: true
// });

// console.log('Generated Password:', password);


function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const passwordLength = 12; 
const randomPassword = generateRandomPassword(passwordLength);
console.log('Generated Password:', randomPassword);
