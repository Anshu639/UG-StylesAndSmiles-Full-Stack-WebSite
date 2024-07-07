import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import nodemailer from "nodemailer"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/StylesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log("Something Went Wrong"))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    is_verified: Boolean,

})

const appointment = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    phone: Number,
    date: Date,
    services: [String],
    message: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const contact = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
})

const User = new mongoose.model("User", userSchema)
const Appointments = new mongoose.model("Appointments", appointment)
const Contact = new mongoose.model("Contact", contact)
//for send mail
const sendVerifyMail = async (name, email, user_id) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "Rawatanurag362@gmail.com",
                pass: "Enter Your Password"
            }
        })
        const mailOptions = {
            from: "rawatanurag362@gmail.com",
            to: email,
            subject: "For Verification Mail",
            html: '<p>Hii ' + name + ', Please click here http://localhost:3000/verify?id=' + user_id + 'to Verify Your Account</p>'
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log("Email has been Send: ", info.response)
            }

        })
    } catch (error) {
        console.log(error.message)
    }
}


const sendCofirmationMail = async (name, email, date, services) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "Rawatanurag362@gmail.com",
                pass: "Enter Your Password"
            }
        })
        const mailOptions = {
            from: "rawatanurag362@gmail.com",
            to: email,
            subject: "For Confimation Mail",
            html: '<p>Hii ' + name + ',</p><br><p>This is a confimation mail for your Appointment <br> Your Appointment is schedule at ' + date + ' and your selected services are ' + services + '. </p > '
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log("Email has been Send: ", info.response)
            }

        })
    } catch (error) {
        console.log(error.message)
    }
}

//Routes
app.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        if (req.body.password === user.password) {
            res.send({ message: "Login Sucessful", user: user })
        } else {
            res.send({ message: "Password didn't match" })
        }
    } else {
        res.send({ message: "User Not Found" })
    }

})

app.post("/sign-in", async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user !== null && user !== undefined) {
        res.send({ message: "User Already Exist" })
    }
    else {
        const newuser = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            is_verified: false
        })
        const userData = await newuser.save()

        if (userData) {
            sendVerifyMail(req.body.username, req.body.email, userData._id)
            res.send({ message: "Successfully Registerd" })
        }
    }

})

app.post("/appointments", async (req, res) => {
    let checkuser = await User.findOne({ email: req.body.email })
    let userId = null;
    if (checkuser) {
        userId = checkuser._id;
    }
    const newappointment = new Appointments({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        date: req.body.date,
        services: req.body.service,
        message: req.body.message,
        user: userId
    })
    const appointmentData = await newappointment.save()

    if (appointmentData) {
        sendCofirmationMail(req.body.name, req.body.email, req.body.date, req.body.service)
        res.send({ message: "Registration Successful" })
    }
})

app.post('/contactus', async (req, res) => {
    const newcontact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    })
    const contactData = await newcontact.save()

    if (contactData) {
        res.send({ message: "Our team will contact you soon !!!" })
    }
})

app.get('/verify', (req, res) => {
    verifyMail(req, res)
})

const verifyMail = async (req, res) => {
    try {
        let updateInfo = await User.updateOne({ _id: req.query.id }, { $set: { is_verified: true } })

        console.log(updateInfo);
        res.send({ message: "Successfully Verified" })

    } catch (error) {
        console.log(error.message)
    }
}

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
