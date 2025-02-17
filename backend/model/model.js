const mongoose = require('mongoose');

//Create Schema for the document 
const studentSchema = new mongoose.Schema({
    personal: {
        name: { type: String, required: true },
        dob: { type: Date, required: true },
        whatsapp_no: { type: String, required: true },
        phone_number: { type: String, required: true },
        gender: { type: String, required: true },
        email: { type: String, required: true },
        taluk: { type: String, required: true },
        address1: { type: String, required: true },
        address2:{type : String , require: false},
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        district: { type: String, required: true },
        region: { type: String, required: true },
        nationality: { type: String, required: true },
        files:
        [
          {
            filePath: { type: String, required: true },
            fileName: { type: String, required: true },
          },
        ]
    },
    family: {
        father_name: { type: String, required: false },
        father_occupation: { type: String, required: false },
        father_status: { type: String, required: false, enum: ['alive and supportive', 'separated/non-supportive/unknown', 'deceased'] },
        father_income: { type: Number, required: false },
        father_number: { type: String, required: false, match: /^\d{10}$/ },
        mother_name: { type: String, required: false },
        mother_occupation: { type: String, required: false },
        mother_status: { type: String, required: false, enum: ['alive and supportive', 'separated/non-supportive/unknown', 'deceased'] },
        mother_income: { type: Number, required: false },
        mother_number: { type: String, required: false, match: /^\d{10}$/ },
        family_member: { type: String, required: false },
        property: { type: String, required: false },
        education: { type: String, required: false, enum: ['<=5std', '6-10std', '11-12std', 'graduated'] },
        guardian_name: { type: String, required: false },
        guardian_relation: { type: String, required: false },
        guardian_occupation: { type: String, required: false },
        guardian_income: { type: Number, required: false },
        guardian_number: { type: String, match: /^\d{10}$/, required: false },
    },
    academic: {
        treg_no: { type: String, required: true },
        tmarks: { type: String, required: false },
        tpercentage: { type: String, required: false },
        tschool: { type: String, required: true },
        tboard: { type: String, required: true },
        tpassing: { type: String, required: true },
        tregion: { type: String, required: true },
        twreg_no: { type: String, required: true },
        twmarks: { type: String, required: true },
        twpercentage: { type: String, required: true },
        twschool: { type: String, required: true },
        twboard: { type: String, required: true },
        twpassing: { type: String, required: true },
        twregion: { type: String, required: true },
        course: { type: String, required: true },
        cutoff: { type: String, required: true },
        govern_school: { type: Boolean, required: false },
        reservation: { type: Boolean, required: false }
    },
    others: {
        challenged: { type: String, required: true },
        iit: { type: String, required: false },
        neet: { type: String, required: false },
        family_income: { type: String, required: true },
        parttime: { type: String, required: false },
        activity: { type: String, required: false },
        details: { type: String, required: true },
        files:
        [
          {
            filePath: { type: String, required: true },
            fileName: { type: String, required: true },
          },
        ]
    },
    declaration: {
        about: { type: String, required: true },
        agree: { type: Boolean, required: true },
    },
}, { timestamps: true });

// Create the model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
