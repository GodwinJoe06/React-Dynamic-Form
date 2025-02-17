const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Student = require('../model/model');

// Set up Multer storage configuration with dynamic destination based on field name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'personal.files') {
      cb(null, './uploads/photos'); // Store photos in 'uploads/photos'
    } else if (file.fieldname === 'others.files') {
      cb(null, './uploads/otherData'); // Store other files in 'uploads/otherData'
    } else {
      cb(new Error('Invalid file field'), false);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // File name will be timestamped
  },
});

const upload = multer({
  storage: storage,
  limits: { files: 10 }, // Set file limit to 10
}).fields([
  { name: 'personal.files', maxCount: 1 },
  { name: 'others.files', maxCount: 10 },
]);

router.post('/api/declaration', upload, async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Files : ", req.files);

    // Access files from the correct fields
    const personalFiles = req.files['personal.files'] || []; // Default to empty array if no files
    const othersFiles = req.files['others.files'] || [];

    // Create an array to store file data for both personal and others files
    const files = [];

    personalFiles.forEach((file) => {
      files.push({
        field: 'personal.files',
        filePath: file.path,
        fileName: file.filename,
      });
    });

    othersFiles.forEach((file) => {
      files.push({
        field: 'others.files',
        filePath: file.path,
        fileName: file.filename,
      });
    });

    console.log("Files received:", files);

    // Extract form data fields from req.body
    const { personal, family, academic, others, declaration } = req.body;

    const newStudentData = new Student({
      personal: {
        name: personal.name,
        phone_number: personal.phone_number, 
        whatsapp_no: personal.whatsapp_no,
        dob: personal.dob,
        gender: personal.gender,
        email: personal.email,
        taluk: personal.taluk,
        address1: personal.address1,
        address2: personal.address2,
        city: personal.city,
        pincode: personal.pincode,
        district: personal.district,
        region: personal.region,
        nationality: personal.nationality, 
        files: personalFiles.map((file) => ({
          filePath: file.path,
          fileName: file.filename,
        }))
      },

      family: {
        father_name: family.father_name,
        father_occupation: family.father_occupation,
        father_status: family.father_status,
        father_income: family.father_income,
        father_number: family.father_number,
        mother_name: family.mother_name,
        mother_occupation: family.mother_occupation,
        mother_status: family.mother_status,
        mother_income: family.mother_income,
        mother_number: family.mother_number,
        family_member: family.family_members,
        property: family.property,
        education: family.education,
        guardian_name: family.guardian_name,
        guardian_relation: family.guardian_relation,
        guardian_occupation: family.guardian_occupation,
        guardian_income: family.guardian_income,
        guardian_number: family.guardian_number,
      },

      academic: {
        treg_no: academic.treg_no,
        tmarks: academic.tmarks,
        tpercentage: academic.tpercentage,
        tschool: academic.tschool,
        tboard: academic.tboard,
        tpassing: academic.tpassing,
        tregion: academic.tregion,
        twreg_no: academic.twreg_no,
        twmarks: academic.twmarks,
        twpercentage: academic.twpercentage,
        twschool: academic.twschool,
        twboard: academic.twboard,
        twpassing: academic.twpassing,
        twregion: academic.twregion,
        course: academic.course,
        cutoff: academic.cutoff,
        govern_school: academic.govern_school,
        reservation: academic.reservation,
      },

      others: {
        challenged: others.challenged,
        iit: others.iit,
        neet: others.neet,
        family_income: others.family_income,
        parttime: others.parttime,
        activity: others.activity,
        details: others.details,
        files: othersFiles.map((file) => ({
          filePath: file.path,
          fileName: file.filename,
        })),
      },

      declaration: {
        about: declaration.about,
        agree: declaration.agree,
      },
    });

    const savedStudentData = await newStudentData.save();
    console.log("Saved Student Data:", savedStudentData);

    //It will reflect in console
    res.status(201).json({
      message: 'Form submitted successfully',
      data: savedStudentData
    });
    console.log("Data Added Successfully");

  } catch (error) {
    console.error("Error during form submission:", error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

module.exports = router;
