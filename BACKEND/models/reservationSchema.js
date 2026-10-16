import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({     
    firstName: {
        type: String,
        required: [true, 'Please enter your first name'],
        minlength: [3, 'First name must be at least 3 characters'],
        maxlength: [30, 'First name cannot exceed 30 characters'],
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
        minlength: [3, 'Last name must be at least 3 characters'],
        maxlength: [30, 'Last name cannot exceed 30 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],    
        validate: [validator.isEmail, 'Please enter a valid email address'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone number'],
        validate: [validator.isMobilePhone, 'Please enter a valid phone number'],
        minlength: [10, 'Phone number must be at least 10 digits'],
        maxlength: [10, 'Phone number must be at least 10 digits']
    },
    time:{
        type: String,
        required: [true, 'Please enter your time']
    },
    date: { 
        type: Date,
        required: [true, 'Please enter your date']
    }
})
export default mongoose.model('Reservation', reservationSchema);