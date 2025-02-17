import React, { useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [formData, setFormData] = useState({
        personal: {
            name: '',
            dob: '',
            address1: '',
            whatsapp_no: '',
            phone_number: '',
            gender: '',
            email: '',
            taluk: '',
            address2: '',
            city: '',
            pincode: '',
            district: '',
            region: '',
            nationality: '',
            files: []
        },
        family: {
            father_name: '',
            father_number: '',
            father_income: '',
            father_status: '',
            father_occupation: '',
            mother_name: '',
            mother_number: '',
            mother_income: '',
            mother_occupation: '',
            mother_status: '',
            guardian_name: '',
            guardian_number: '',
            guardian_income: '',
            guardian_relation: '',
            guardian_occupation: '',
            education: '',
            property: '',
            family_members: '',
        },
        academic: {
            treg_no: '',
            tschool: '',
            tboard: '',
            tpassing: '',
            tregion: '',
            twreg_no: '',
            twmarks: '',
            tpercentage: '',
            tmarks: '',
            twpercentage: '',
            twschool: '',
            twboard: '',
            twpassing: '',
            twregion: '',
            course: '',
            cutoff: "",
            govern_school: false,
            reservation: false
        },
        others: {
            challenged: '',
            iit: '',
            neet: '',
            activity: '',
            family_income: '',
            parttime: '',
            details: '',
            files: []
        },
        declaration: {
            about: '',
            agree: false,
        },
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({
        name: '',
        phone_number: '',
        whatsapp_no: '',
        dob: '',
        gender: '',
        email: '',
        taluk: '',
        address1: '',
        city: '',
        pincode: '',
        district: '',
        region: '',
        nationality: '',
        fname: '',
        fnumber: '',
        fincome: '',
        fstatus: '',
        foccupation: '',
        mname: '',
        mnumber: '',
        mincome: '',
        moccupation: '',
        mstatus: '',
        gname: '',
        gnumber: '',
        gincome: '',
        relation: '',
        goccupation: '',
        education: '',
        property: '',
        members: '',
        treg_no: '',
        tschool: '',
        tboard: '',
        tpassing: '',
        tregion: '',
        twreg_no: '',
        twmarks: '',
        tpercentage: '',
        twpercentage: '',
        twschool: '',
        twboard: '',
        twpassing: '',
        twregion: '',
        course: '',
        cutoff: '',
        govern_school: '',
        reservation: '',
        challenged: '',
        family_income: '',
        details: '',
        about: '',
        agree: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    const home_region = [
        { value: 'urban', label: 'Urban' },
        { value: 'rural', label: 'Rural' }
    ]
    const nationalities = [
        { value: "indian", label: "Indian" },
        { value: "sri lanka", label: "Sri Lanka" },
        { value: "other", label: "Other" }
    ]

    const tamilNaduDistricts = [
        { value: 'chennai', label: 'Chennai' },
        { value: 'coimbatore', label: 'Coimbatore' },
        { value: 'madurai', label: 'Madurai' },
        { value: 'trichy', label: 'Trichy' },
        { value: 'salem', label: 'Salem' },
        { value: 'tuticorin', label: 'Tuticorin' },
        { value: 'velore', label: 'Vellore' },
        { value: 'tirunelveli', label: 'Tirunelveli' },
        { value: 'karur', label: 'Karur' },
        { value: 'dharmapuri', label: 'Dharmapuri' },
        { value: 'kancheepuram', label: 'Kancheepuram' },
        { value: 'thanjavur', label: 'Thanjavur' },
        { value: 'krishnagiri', label: 'Krishnagiri' },
        { value: 'pollachi', label: 'Pollachi' },
        { value: 'dharmapuri', label: 'Dharmapuri' },
        { value: 'perambalur', label: 'Perambalur' },
        { value: 'nagapattinam', label: 'Nagapattinam' },
        { value: 'ariyalur', label: 'Ariyalur' },
        { value: 'cuddalore', label: 'Cuddalore' },
        { value: 'dindigul', label: 'Dindigul' },
    ];

    const taluks = [
        { value: '', label: '--Select Taluk--' },
        { value: 'arakkonam', label: 'Arakkonam' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'coimbatore', label: 'Coimbatore' },
        { value: 'madurai', label: 'Madurai' },
        { value: 'salem', label: 'Salem' },
        { value: 'trichy', label: 'Trichy' },
        { value: 'tiruvarur', label: 'Tiruvarur' },
        { value: 'villupuram', label: 'Villupuram' },
        { value: 'vangani', label: 'Vangani' },
        { value: 'kanchipuram', label: 'Kanchipuram' },
        { value: 'thanjavur', label: 'Thanjavur' },
        { value: 'tirunelveli', label: 'Tirunelveli' },
        { value: 'ariyalur', label: 'Ariyalur' },
        { value: 'cuddalore', label: 'Cuddalore' },
        { value: 'dharmapuri', label: 'Dharmapuri' },
        { value: 'dindigul', label: 'Dindigul' },
        { value: 'erode', label: 'Erode' },
        { value: 'kallakurichi', label: 'Kallakurichi' },
        { value: 'kanyakumari', label: 'Kanyakumari' },
        { value: 'karur', label: 'Karur' },
        { value: 'krishnagiri', label: 'Krishnagiri' },
        { value: 'madurai', label: 'Madurai' },
        { value: 'nagapattinam', label: 'Nagapattinam' },
        { value: 'namakkal', label: 'Namakkal' },
        { value: 'nilgiris', label: 'Nilgiris' },
        { value: 'perambalur', label: 'Perambalur' },
        { value: 'pudukkottai', label: 'Pudukkottai' },
        { value: 'ramanathapuram', label: 'Ramanathapuram' },
        { value: 'sivaganga', label: 'Sivaganga' },
        { value: 'theni', label: 'Theni' },
        { value: 'thiruvallur', label: 'Thiruvallur' },
        { value: 'thiruvarur', label: 'Thiruvarur' },
        { value: 'tiruvarur', label: 'Tiruvarur' },
        { value: 'tiruvannamalai', label: 'Tiruvannamalai' },
        { value: 'vellore', label: 'Vellore' },
        { value: 'virudhunagar', label: 'Virudhunagar' },
    ];

    const school_board = [
        { value: "state board", label: "State Board" },
        { value: "matric", label: "Matric" },
        { value: "cbsc", label: "CBSC" },
        { value: "icse", label: "ICSE" }
    ];

    const school_type = [
        { value: "government", label: "Government" },
        { value: "government aided", label: "Government Aided" },
        { value: "private", label: "Private" }
    ];

    const course_seeking = [
        { value: "engineering", label: "Engineering" },
        { value: "medical", label: "Medical" },
        { value: "paramedical", label: "Paramedical" },
        { value: "neet", label: "NEET" },
        { value: "ca/cma", label: "CA/CMA" }
    ];

    const parents_status = [
        { value: 'alive and supportive', label: 'Alive and Supportive' },
        { value: 'separated/non-supportive/unknown', label: 'Separated / Non-Supportive / Unknown' },
        { value: 'deceased', label: 'Deceased' }
    ]

    const physically_challenged = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
    ]

    const monthly_income = [
        { value: 'below 6000', label: '<=Rs.6000' },
        { value: 'btw 6000&9700', label: 'Between Rs.6000 & Rs.9700' },
        { value: 'btw 13400&17100', label: 'Between Rs.13400 & Rs.17100' },
        { value: 'above 17100', label: 'More than 17100' }
    ]

    const parttime_job = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
    ]

    const extra_activity = [
        { value: 'school level', label: 'School Level' },
        { value: 'district level', label: 'District Level' },
        { value: 'divisional level', label: 'Divisional Level' },
        { value: 'state level', label: 'State Level' },
        { value: 'zonal Level', label: 'Zonal Level' },
        { value: 'country level', label: 'Country Level' },
        { value: 'n/a', label: 'N/A' }
    ]

    const About = [
        { value: 'seeds', label: 'SEEDS' },
        { value: 'social media', label: 'Social Media' },
        { value: 'friends', label: 'Friends' },
        { value: 'my school / teacher', label: 'My School / Teacher' },
        { value: 'mychild', label: "That's My Child " },
        { value: 'others', label: 'Others' }
    ];


    const validatePersonalForm = () => {
        const { name, phone_number, email, dob, gender, taluk, pincode, district, region, nationality, address1, files } = formData.personal;

        const isPersonalValid = Boolean(name && phone_number && email && pincode && gender && dob && taluk && district && region && files && nationality && address1);

        setIsFormValid(isPersonalValid);
    };

    const validateFamilyForm = () => {
        const { father_income, family_members, father_name, father_number, father_occupation, father_status, mother_income, mother_name, mother_number, mother_occupation, mother_status, guardian_income, guardian_name, guardian_number, guardian_occupation, guardian_relation, education, property } = formData.family;

        const isFamilyValid = Boolean(
            (father_income && father_name && father_number && father_occupation && father_status) ||
            (guardian_income && guardian_name && guardian_number && guardian_occupation && guardian_relation) ||
            (mother_income && mother_name && mother_number && mother_occupation && mother_status && family_members && property && education)
        );

        console.log(isFamilyValid)
        setIsFormValid(isFamilyValid);
    };

    const validateAcadamicForm = () => {
        const { tboard, tpassing, treg_no, tregion, tschool, twboard, twmarks, twpassing, twpercentage, twreg_no, twregion, twschool, cutoff, course } = formData.academic;

        const isAcademicValid = Boolean(
            tboard && tpassing && treg_no && tregion && tschool &&
            twboard && twmarks && twpassing && twpercentage &&
            twreg_no && twregion && twschool && cutoff && course
        );

        setIsFormValid(isAcademicValid);
    };

    const validateOthersForm = () => {
        const { challenged, family_income, files, details } = formData.others;

        const isOthersValid = Boolean(challenged && files && family_income && details);

        setIsFormValid(isOthersValid);
    }

    const validateDeclarationForm = () => {
        const { about, agree } = formData.declaration;

        const isDeclarationValid = Boolean(about, agree);

        setIsFormValid(isDeclarationValid);
    };

    const handleNextStep = () => {
        if (isFormValid) {
            setCurrentStep(currentStep + 1);
        }
        setIsFormValid(false)
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleStepChange = (stepNumber) => {
        if (stepNumber <= currentStep) {
            setCurrentStep(stepNumber);
        }
    };


    const handleFieldBlur = (field, value) => {
        let error = '';

        if (!value) {
            error = 'This field is required';
        } else {
            if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                error = 'Please enter a valid email';
            } else if (field === 'phone_number' && !/^\d{10}$/.test(value)) {
                error = 'Please enter a valid phone number';
            } else if (field === 'whatsapp_no' && value && !/^\d{10}$/.test(value)) {
                error = 'Please enter a valid WhatsApp number';
            } else if (field === 'pincode' && !/^\d{6}$/.test(value)) {
                error = 'Please enter a valid 6-digit pincode';
            } else if (field === 'fnumber' && (!/^\d{10}$/.test(value))) {
                error = 'Please enter a valid phone number';
            } else if (field === 'mnumber' && (!/^\d{10}$/.test(value))) {
                error = 'Please enter a valid phone number';
            } else if (field === 'cutoff' && (value < 0 || value > 180)) {
                error = 'Please enter a valid cut-off mark (between 0 and 180)';
            } else if (field === 'twpercentage' && (value < 0 || value > 100)) {
                error = 'Percentage cannot be greater than 100%';
            } else if (field === 'members' && (value < 0)) {
                error = 'Please enter a valid family members value'
            }
        }

        setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    };


    const father = (formData.family.father_status === 'alive and supportive')
    const mother = (formData.family.mother_status === 'alive and supportive')

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const section = name.split('.')[0];  // Personal, Family, Academic, etc.
        const field = name.split('.')[1];   // Field like name, gender, phone_number, etc.

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [section]: { ...prevData[section], [field]: checked }, // Update checkbox value
            }));
        } else if (type === 'file') {
            const fileArray = Array.from(files); // Convert FileList to an array
            setFormData((prevData) => ({
                ...prevData,
                [section]: {
                    ...prevData[section],
                    [field]: fileArray,
                },
            }));
            console.log('Updated formData:', formData);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [section]: { ...prevData[section], [field]: value }, // Update text inputs
            }));
        }
        if (section === 'personal') {
            validatePersonalForm();
        }
        else if (section === 'family') {
            validateFamilyForm();
        }
        else if (section === 'academic') {
            validateAcadamicForm();
        }
        else if (section === 'others') {
            validateOthersForm();
        }
        else {
            validateDeclarationForm();
        }
    };

    const shouldDisplayGuardianSection = (formData.family.father_status === 'alive and supportive') || (formData.family.mother_status === 'alive and supportive');

    // const handleFileChange = (e) => {
    //     const selectedFiles = e.target.files;
    //     if (selectedFiles.length + files.length > 10) {
    //         alert("You can upload a maximum of 10 files.");
    //         return;
    //     }
    //     files.forEach((file) => {
    //         Data.append('photo', file); // Append files with the name 'photo' (not photo_0, photo_1...)
    //       });

    //     setFiles([...files, ...selectedFiles]);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Iterate through the formData state and append the values to FormData
        Object.keys(formData).forEach((section) => {
            Object.keys(formData[section]).forEach((field) => {
                if (field === 'files' && formData[section][field].length > 0) {
                    // Append files if present with exact key and value
                    Array.from(formData[section][field]).forEach((file) => {
                        formDataToSend.append(`${section}.files`, file);
                    });
                } else {
                    // Append other form fields
                    formDataToSend.append(`${section}[${field}]`, formData[section][field]);
                }
            });
        });

        console.log(formData)

        try {
            const response = await axios.post('http://localhost:5000/api/declaration', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Form submitted successfully', response);
            navigate("/success");
        } catch (error) {
            console.error('Error during form submission', error);
        }
    };

    return (
        <div>
            <header className="bg-white shadow-lg p-4 d-flex align-items-center justify-content-between">
                <div>
                    <img
                        src="https://nirdhanawebtest.azurewebsites.net/assets/images/logo.png"
                        alt="Logo"
                        width="115"
                        height="36"
                    />
                </div>
                <div
                    className="flex-grow-1 text-center font-weight-bold"
                    style={{ fontSize: "20px" }} // Adjusts font size to match `md:text-lg`
                >
                    Scholarship Application Form for 2025
                </div>
            </header>

            <p id="bannerText" class="bannerText text-center mb-4 mt-4">
                SEEEDS shall provide the scholarship to the approved student. SEEEDS
                will not pay CASH to the students, will pay fees directly to the
                college. SEEEDS will not help in securing college seat admission.
            </p>

            {/* Steps Navigation */}
            <div className="container">
                <div className="mat-horizontal-stepper-header-container text-center mb-4">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div
                            key={step}
                            className={`mat-step-header ${currentStep === step ? 'mat-step-header-selected' : ''} mat-primary`}
                            role="tab"
                            aria-posinset={step}
                            aria-setsize="5"
                            aria-selected={currentStep === step ? "true" : "false"}
                            onClick={() => handleStepChange(step)} 
                        >
                            <div className="mat-ripple mat-step-header-ripple mat-focus-indicator"></div>
                            <div className={`mat-step-icon ${currentStep >= step ? 'mat-step-icon-selected' : ''} mat-step-icon-state-number`}>
                                <div className="mat-step-icon-content">
                                    {currentStep > step ? <FaPencilAlt /> : <span>{step}</span>}
                                </div>
                            </div>
                            <div className={`mat-step-label ${currentStep === step ? 'mat-step-label-active mat-step-label-selected' : ''}`}>
                                <div className="mat-step-text-label">
                                    {step === 1
                                        ? "Personal"
                                        : step === 2
                                        ? "Family"
                                        : step === 3
                                        ? "Academic"
                                        : step === 4
                                        ? "Others"
                                        : "Declaration"
                                        }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Container */}
            <div class="container py-5">
                <div class="bg-white p-2 rounded shadow-sm border border-transparent">
                    <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
                        {currentStep === 1 && (
                            <div>
                                <div className="row g-3 m-4">

                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="photo-box photo-upload" style={{ textAlign: 'center' }}>
                                            <label htmlFor="fileInput" style={{ cursor: 'pointer', display: 'block', color: '#666' }}>
                                                <p style={{ color: '#666' }}>Upload your Photo</p>
                                                <small style={{ display: 'block', color: '#666' }}>
                                                    Valid file extensions are .jpg, .jpeg, and .png.
                                                </small>
                                                <input
                                                    type="file"
                                                    accept=".jpg, .jpeg, .png"
                                                    id="fileInput"
                                                    name="personal.files"
                                                    style={{ display: 'none' }}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            {formData.personal.files.length > 0 && <div>Files uploaded: {formData.personal.files.length}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Student Name *"
                                            name="personal.name"
                                            value={formData.personal.name}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('name', formData.personal.name)}
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <select
                                            className={`form-select form-control-lg ${errors.gender ? 'is-invalid' : ''}`}
                                            name="personal.gender"
                                            value={formData.personal.gender}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('gender', formData.personal.gender)}
                                        >
                                            <option value="" disabled>
                                                Gender *
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <input
                                            type="date"
                                            className={`form-select form-control-lg ${errors.dob ? 'is-invalid' : ''}`}
                                            name="personal.dob"
                                            value={formData.personal.dob}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('dob', formData.personal.dob)}
                                        />
                                        {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.phone_number ? 'is-invalid' : ''}`}
                                            placeholder="Mobile Number *"
                                            name="personal.phone_number"
                                            value={formData.personal.phone_number}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('phone_number', formData.personal.phone_number)}
                                        />
                                        {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.whatsapp_no ? 'is-invalid' : ''}`}
                                            placeholder="WhatsApp Number"
                                            name="personal.whatsapp_no"
                                            value={formData.personal.whatsapp_no}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('whatsapp_no', formData.personal.whatsapp_no)}
                                        />
                                        {errors.whatsapp_no && <div className="invalid-feedback">{errors.whatsapp_no}</div>}
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <input
                                            type="email"
                                            className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                            placeholder="Email *"
                                            name="personal.email"
                                            value={formData.personal.email}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('email', formData.personal.email)}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>


                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.address1 ? 'is-invalid' : ''}`}
                                            placeholder="Address *"
                                            name="personal.address1"
                                            value={formData.personal.address1}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('address1', formData.personal.address1)}
                                        />
                                        {errors.address1 && <div className="invalid-feedback">{errors.address1}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.address2 ? 'is-invalid' : ''}`}
                                            placeholder="Address 2*"
                                            name="personal.address2"
                                            value={formData.personal.address2}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <select

                                            name="personal.taluk"
                                            className={`form-select form-control-lg ${errors.taluk ? 'is-invalid' : ''}`}
                                            value={formData.personal.taluk}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('taluk', formData.personal.taluk)}
                                            required
                                        >
                                            {taluks.map((taluk) => (
                                                <option key={taluk.value} value={taluk.value}>
                                                    {taluk.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.taluk && <div className="invalid-feedback">{errors.taluk}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name='personal.city'
                                            className={`form-control form-control-lg ${errors.city ? 'is-invalid' : ''}`}
                                            placeholder="City/Town/Village *"
                                            value={formData.personal.city}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('city', formData.personal.city)}
                                            required
                                        />
                                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <select
                                            className={`form-select form-control-lg ${errors.district ? 'is-invalid' : ''}`}
                                            name='personal.district'
                                            value={formData.personal.district}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('district', formData.personal.district)}
                                            required
                                        >
                                            <option value="" disabled>Select District *</option>
                                            {tamilNaduDistricts.map((district) => (
                                                <option key={district.value} value={district.value}>
                                                    {district.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.district && <div className="invalid-feedback">{errors.district}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.pincode ? 'is-invalid' : ''}`}
                                            name='personal.pincode'
                                            placeholder="Pin code *"
                                            value={formData.personal.pincode}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('pincode', formData.personal.pincode)}
                                            required
                                        />
                                        {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <select
                                            className={`form-select form-control-lg ${errors.region ? 'is-invalid' : ''}`}
                                            name='personal.region'
                                            value={formData.personal.region}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('region', formData.personal.region)}
                                            required
                                        >
                                            <option value="" disabled>Home Region *</option>
                                            {home_region.map((e) => (
                                                <option key={e.value} value={e.value}>
                                                    {e.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.region && <div className="invalid-feedback">{errors.region}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <select
                                            className={`form-select form-control-lg ${errors.nationality ? 'is-invalid' : ''}`}
                                            name='personal.nationality'
                                            value={formData.personal.nationality}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('nationality', formData.personal.nationality)}
                                            required
                                        >
                                            <option value="" disabled>Nationality *</option>
                                            {nationalities.map((nation) => (
                                                <option key={nation.value} value={nation.value}>
                                                    {nation.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.nationality && <div className="invalid-feedback">{errors.nationality}</div>}
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <>
                                <div className="row g-3 m-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name='family.father_name'
                                            className={`form-control form-control-lg ${errors.fname ? 'is-invalid' : ''}`}
                                            placeholder="Father Name *"
                                            value={formData.family.father_name}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('fname', formData.family.father_name)}
                                            required
                                        />
                                        {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <select
                                            id="father_status"
                                            name="family.father_status"
                                            value={formData.family.father_status}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('fstatus', formData.family.father_status)}
                                            className={`form-select form-control-lg ${errors.fstatus ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled>Father Status *</option>
                                            {parents_status.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.fstatus && <small className="invalid-feedback">{errors.fstatus}</small>}
                                    </div>
                                </div>
                                {father && (
                                    <>
                                        <div className="row g-3 m-4">
                                            <div className="col-md-3">
                                                <input
                                                    type="text"
                                                    name="family.father_occupation"
                                                    placeholder="Father Occupation *"
                                                    value={formData.family.father_occupation}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('foccupation', formData.family.father_occupation)}
                                                    className={`form-control form-control-lg ${errors.foccupation ? 'is-invalid' : ''}`}
                                                />
                                                {errors.foccupation && <small className="invalid-feedback">{errors.foccupation}</small>}
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="tel"
                                                    name="family.father_income"
                                                    placeholder="Father Annual Income *"
                                                    value={formData.family.father_income}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('fincome', formData.family.father_income)}
                                                    className={`form-control form-control-lg ${errors.fincome ? 'is-invalid' : ''}`}
                                                />
                                                {errors.fincome && <small className="invalid-feedback">{errors.fincome}</small>}
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="tel"
                                                    name="family.father_number"
                                                    placeholder="Father Mobile No *"
                                                    value={formData.family.father_number}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('fnumber', formData.family.father_number)}
                                                    className={`form-control form-control-lg ${errors.fnumber ? 'is-invalid' : ''}`}
                                                />
                                                {errors.fnumber && <small className="invalid-feedback">{errors.fnumber}</small>}
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="row g-3 m-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="family.mother_name"
                                            placeholder="Mother Name *"
                                            value={formData.family.mother_name}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('mname', formData.family.mother_name)}
                                            className={`form-control form-control-lg ${errors.mname ? 'is-invalid' : ''}`}
                                        />
                                        {errors.mname && <small className="invalid-feedback">{errors.mname}</small>}
                                    </div>
                                    <div className="col-md-6">
                                        <select
                                            id="mother_status"
                                            name="family.mother_status"
                                            value={formData.family.mother_status}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('mstatus', formData.family.mother_status)}
                                            className={`form-select form-control-lg ${errors.mstatus ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled>Mother Status *</option>
                                            {parents_status.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.mstatus && <small className="invalid-feedback">{errors.mstatus}</small>}
                                    </div>
                                </div>

                                {mother && (
                                    <>
                                        <div className="row g-3 m-4">
                                            <div className="col-md-3">
                                                <input
                                                    type="text"
                                                    name="family.mother_occupation"
                                                    placeholder="Mother Occupation *"
                                                    value={formData.family.mother_occupation}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('moccupation', formData.family.mother_occupation)}
                                                    className={`form-control form-control-lg ${errors.moccupation ? 'is-invalid' : ''}`}
                                                />
                                                {errors.moccupation && <small className="invalid-feedback">{errors.moccupation}</small>}
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="tel"
                                                    name="family.mother_income"
                                                    placeholder="Mother Income *"
                                                    value={formData.family.mother_income}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('mincome', formData.family.mother_income)}
                                                    className={`form-control form-control-lg ${errors.mincome ? 'is-invalid' : ''}`}
                                                />
                                                {errors.mincome && <small className="invalid-feedback">{errors.mincome}</small>}
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="tel"
                                                    name="family.mother_number"
                                                    placeholder="Mother Mobile No *"
                                                    value={formData.family.mother_number}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('mnumber', formData.family.mother_number)}
                                                    className={`form-control form-control-lg ${errors.mnumber ? 'is-invalid' : ''}`}
                                                />
                                                {errors.mnumber && <small className="invalid-feedback">{errors.mnumber}</small>}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {!shouldDisplayGuardianSection && (
                                    <>
                                        <div className="row g-3 m-4">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="family.guardian_name"
                                                    placeholder="Guardian Name *"
                                                    value={formData.family.guardian_name}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('gname', formData.family.guardian_name)}
                                                    className={`form-control form-control-lg ${errors.gname ? 'is-invalid' : ''}`}
                                                />
                                                {errors.gname && <small className="invalid-feedback">{errors.gname}</small>}
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="family.guardian_relation"
                                                    placeholder="Guardian Relation *"
                                                    value={formData.family.guardian_relation}
                                                    onChange={handleChange}
                                                    onBlur={() => handleFieldBlur('relation', formData.family.guardian_relation)}
                                                    className={`form-control form-control-lg ${errors.relation ? 'is-invalid' : ''}`}
                                                />
                                                {errors.relation && <small className="invalid-feedback">{errors.relation}</small>}
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="row g-3 m-4">
                                    <div className="col-md-6">
                                        <input
                                            type="number"
                                            name="family.family_members"
                                            placeholder="How many people are living in the house(including you) *"
                                            value={formData.family.family_members}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('members', formData.family.family_members)}
                                            className={`form-control form-control-lg ${errors.members ? 'is-invalid' : ''}`}
                                        />
                                        {errors.members && <small className="invalid-feedback">{errors.members}</small>}
                                    </div>
                                    <div className="col-md-6">
                                        <select
                                            id="property"
                                            name="family.property"
                                            value={formData.family.property}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('property', formData.family.property)}
                                            className={`form-select form-control-lg ${errors.property ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled>Do you own any property? *</option>
                                            <option value="no property">No Property</option>
                                            <option value="<=1l">{'<= Rs.1 LAKH'}</option>
                                            <option value="btw 1l-2.5l">{'Between Rs.1 LAKH and Rs.2.5 LAKHS'}</option>
                                            <option value="btw 2.5l-5l">{'Between Rs.2.5 LAKHS and Rs.5 LAKHS'}</option>
                                            <option value="btw 5l-10l">{'Between Rs.5 LAKHS and Rs.10 LAKHS'}</option>
                                            <option value=">10l">{'> Rs.10 LAKHS'}</option>
                                        </select>
                                        {errors.property && <small className="invalid-feedback">{errors.property}</small>}
                                    </div>
                                </div>
                                <div className="row g-3 m-4">
                                    <div className="col-md-6">
                                        <select
                                            id="education"
                                            name="family.education"
                                            value={formData.family.education}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('education', formData.family.education)}
                                            className={`form-select form-control-lg ${errors.education ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled>Highest Family Education *</option>
                                            <option value="<=5std">{'<=5th Std'}</option>
                                            <option value="6-10std">{'6th to 10th Std'}</option>
                                            <option value="11-12std">{'11th to 12th Std'}</option>
                                            <option value="graduated">{'Graduate and above'}</option>
                                        </select>
                                        {errors.education && <small className="invalid-feedback">{errors.education}</small>}
                                    </div>
                                </div>
                            </>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <div className="row g-3 m-4">
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            placeholder="10th Registration Number *"
                                            name="academic.treg_no"
                                            value={formData.academic.treg_no}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('treg_no', formData.academic.treg_no)}
                                            className={`form-control form-control-lg ${errors.treg_no ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.treg_no && <small className="invalid-feedback">{errors.treg_no}</small>}
                                    </div>

                                    <div className="col-md-4">
                                        <input
                                            type="tel"
                                            placeholder="10th Mark"
                                            name="academic.tmarks"
                                            value={formData.academic.tmarks}
                                            onChange={handleChange}
                                            className={`form-control form-control-lg ${errors.tmarks ? 'is-invalid' : ''}`}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <input
                                            type="tel"
                                            placeholder="10th Percentage"
                                            name="academic.tpercentage"
                                            value={formData.academic.tpercentage}
                                            onChange={handleChange}
                                            className={`form-control form-control-lg ${errors.tpercentage ? 'is-invalid' : ''}`}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 m-4">
                                    <div className="col-md-3">
                                        <select
                                            name="academic.tschool"
                                            value={formData.academic.tschool}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('tschool', formData.academic.tschool)}
                                            className={`form-select form-control-lg ${errors.tschool ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>10th School Type *</option>
                                            {school_type.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tschool && <small className="invalid-feedback">{errors.tschool}</small>}
                                    </div>

                                    <div className="col-md-3">
                                        <select
                                            name="academic.tboard"
                                            value={formData.academic.tboard}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('tboard', formData.academic.tboard)}
                                            className={`form-select form-control-lg ${errors.tboard ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>10th School Board *</option>
                                            {school_board.map((b) => (
                                                <option key={b.value} value={b.value}>
                                                    {b.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tboard && <small className="invalid-feedback">{errors.tboard}</small>}
                                    </div>

                                    <div className="col-md-3">
                                        <select
                                            name="academic.tregion"
                                            value={formData.academic.tregion}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('tregion', formData.academic.tregion)}
                                            className={`form-select form-control-lg ${errors.tregion ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>10th School Region *</option>
                                            {home_region.map((r) => (
                                                <option key={r.value} value={r.value}>
                                                    {r.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tregion && <small className="invalid-feedback">{errors.tregion}</small>}
                                    </div>

                                    <div className="col-md-3">
                                        <input
                                            type="tel"
                                            placeholder="10th Year of Passing *"
                                            name="academic.tpassing"
                                            value={formData.academic.tpassing}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('tpassing', formData.academic.tpassing)}
                                            className={`form-control form-control-lg ${errors.tpassing ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.tpassing && <small className="invalid-feedback">{errors.tpassing}</small>}
                                    </div>
                                </div><div className="row g-3 m-4">
                                    <div className="col-md-8">
                                        <select
                                            name="academic.course"
                                            value={formData.academic.course}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('course', formData.academic.course)}
                                            className={`form-select form-control-lg ${errors.course ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>Which course are you applying and seeking scholarship *</option>
                                            {course_seeking.map((c) => (
                                                <option key={c.value} value={c.value}>
                                                    {c.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.course && <small className="invalid-feedback">{errors.course}</small>}
                                    </div>

                                </div>
                                <div className="row g-3 m-4">
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            placeholder="12th Registration Number *"
                                            name="academic.twreg_no"
                                            value={formData.academic.twreg_no}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twreg_no', formData.academic.twreg_no)}
                                            className={`form-control form-control-lg ${errors.twreg_no ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.twreg_no && <small className="invalid-feedback">{errors.twreg_no}</small>}
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="tel"
                                            placeholder="12th Mark *"
                                            name="academic.twmarks"
                                            value={formData.academic.twmarks}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twmarks', formData.academic.twmarks)}
                                            className={`form-control form-control-lg ${errors.twmarks ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.twmarks && <small className="invalid-feedback">{errors.twmarks}</small>}
                                    </div>

                                    <div className="col-md-4">
                                        <input
                                            type="tel"
                                            placeholder="12th Percentage *"
                                            name="academic.twpercentage"
                                            value={formData.academic.twpercentage}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twpercentage', formData.academic.twpercentage)}
                                            className={`form-control form-control-lg ${errors.twpercentage ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.twpercentage && <small className="invalid-feedback">{errors.twpercentage}</small>}
                                    </div>
                                </div>

                                <div className="row g-3 m-4">
                                    <div className="col-md-3">
                                        <select
                                            name="academic.twschool"
                                            value={formData.academic.twschool}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twschool', formData.academic.twschool)}
                                            className={`form-select form-control-lg ${errors.tschool ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>12th School Type *</option>
                                            {school_type.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.twschool && <small className="invalid-feedback">{errors.twschool}</small>}
                                    </div>

                                    <div className="col-md-3">
                                        <select
                                            name="academic.twboard"
                                            value={formData.academic.twboard}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twboard', formData.academic.twboard)}
                                            className={`form-select form-control-lg ${errors.tboard ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>12th School Board *</option>
                                            {school_board.map((b) => (
                                                <option key={b.value} value={b.value}>
                                                    {b.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.twboard && <small className="invalid-feedback">{errors.twboard}</small>}
                                    </div>

                                    <div className="col-md-3">
                                        <select
                                            name="academic.twregion"
                                            value={formData.academic.twregion}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twregion', formData.academic.twregion)}
                                            className={`form-select form-control-lg ${errors.twregion ? 'is-invalid' : ''}`}
                                            required
                                        >
                                            <option value="" disabled selected>12th School Region *</option>
                                            {home_region.map((r) => (
                                                <option key={r.value} value={r.value}>
                                                    {r.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.twregion && <small className="invalid-feedback">{errors.twregion}</small>}
                                    </div>

                                    <div className="col-md-3">
                                        <input
                                            type="tel"
                                            placeholder="12th Year of Passing *"
                                            name="academic.twpassing"
                                            value={formData.academic.twpassing}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('twpassing', formData.academic.twpassing)}
                                            className={`form-control form-control-lg ${errors.twpassing ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.twpassing && <small className="invalid-feedback">{errors.twpassing}</small>}
                                    </div>
                                </div>
                                <div className="row g-3 m-4">
                                    <div className="col-md-4">
                                        <input
                                            name="academic.cutoff"
                                            type="text"
                                            placeholder="Engineering Cut-off Marks *"
                                            value={formData.academic.cutoff}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('cutoff', formData.academic.cutoff)}
                                            className={`form-control form-control-lg ${errors.cutoff ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.cutoff && <small className="invalid-feedback">{errors.cutoff}</small>}
                                    </div>
                                </div>

                                <div className="row g-3 m-4">
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="academic.govern_school"
                                                checked={formData.academic.govern_school}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">
                                                Did you study 6th -10th/12th in government school?
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="academic.reservation"
                                                checked={formData.academic.reservation}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">
                                                Did you fall in 7.5% reservation?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div>
                                <div className="row g-3 m-4">
                                    <div className="col-md-3">
                                        <select
                                            className={`form-select form-control-lg ${errors.challenged ? 'is-invalid' : ''}`}
                                            name="others.challenged"
                                            value={formData.others.challenged}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('challenged', formData.others.challenged)}
                                            required
                                        >
                                            <option value="" disabled>
                                                Physically Challenged *
                                            </option>
                                            {physically_challenged.map((c) => (
                                                <option key={c.value} value={c.value}>
                                                    {c.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.challenged && <div className="invalid-feedback">{errors.challenged}</div>}
                                    </div>

                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.iit ? 'is-invalid' : ''}`}
                                            placeholder="IIT-JEE Percentage"
                                            value={formData.others.iit}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className={`form-control form-control-lg ${errors.neet ? 'is-invalid' : ''}`}
                                            placeholder="NEET Score"
                                            value={formData.others.neet}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <select
                                            className={`form-select form-control-lg ${errors.family_income ? 'is-invalid' : ''}`}
                                            name="others.family_income"
                                            value={formData.others.family_income}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('family_income', formData.others.family_income)}
                                            required
                                        >
                                            <option value="" disabled>
                                                Monthly Family Income *
                                            </option>
                                            {monthly_income.map((income) => (
                                                <option key={income.value} value={income.value}>
                                                    {income.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.family_income && (
                                            <div className="invalid-feedback">{errors.family_income}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="row g-3 m-4">
                                    <div className="col-md-3">
                                        <select
                                            className={`form-select form-control-lg ${errors.parttime ? "is-invalid" : ""}`}
                                            name="others.parttime"
                                            value={formData.others.parttime}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Are you working part-time
                                            </option>
                                            {parttime_job.map((p) => (
                                                <option key={p.value} value={p.value}>
                                                    {p.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <select
                                            className={`form-select form-control-lg ${errors.activity ? "is-invalid" : ""}`}
                                            name="others.activity"
                                            value={formData.others.activity}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                EXTRA CURRICULAR ACTIVITIES(SPORTS/ART/MUSIC) / AWARDED
                                            </option>
                                            {extra_activity.map((a) => (
                                                <option key={a.value} value={a.value}>
                                                    {a.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="row g-3 m-4">
                                    <div className="col-md-6">
                                        <textarea
                                            type="text"
                                            name='others.details'
                                            className={`form-control form-control-lg ${errors.details ? 'is-invalid' : ''}`}
                                            placeholder="Why do you need SEEEDS Scholarship?*"
                                            value={formData.others.details}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('details', formData.others.details)}
                                        />
                                        {errors.details && <div className="invalid-feedback">{errors.details}</div>}
                                    </div>
                                </div>
                                <div className="row g-3 m-4">
                                    <div className="col-12">
                                        <div
                                            className="photo-box photo-upload d-flex justify-content-center align-items-center text-center"
                                            style={{
                                                border: '1px solid #ccc',
                                                padding: '20px',
                                                borderRadius: '5px',
                                                minHeight: '200px', // Ensures a minimum height
                                                height: 'auto', // Adjusts dynamically if content exceeds
                                            }}
                                        >
                                            <label htmlFor="fileInput" style={{ cursor: 'pointer', width: '100%' }}>
                                                <p style={{ color: '#666', marginBottom: '10px' }}>
                                                    Upload your 10th, 12th mark sheet, house picture (preferably with family members)
                                                </p>
                                                <small style={{ display: 'block', color: '#666', marginBottom: '15px' }}>
                                                    Valid file extensions: .jpg, .jpeg, .png. Max 10 files
                                                </small>
                                                <input
                                                    type="file"
                                                    name='others.files'
                                                    accept=".jpg, .jpeg, .png"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                    onChange={handleChange}
                                                    multiple
                                                />
                                                {formData.others.files.length > 0 && (
                                                    <div style={{ marginTop: '10px', color: '#333' }}>
                                                        Files uploaded: {formData.others.files.length}
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div>
                                <div className="row g-3 m-4">
                                    <div className="col-md-6">
                                        <select
                                            className={`form-select form-control-lg ${errors.about ? "is-invalid" : ""}`}
                                            name="declaration.about"
                                            value={formData.declaration.about}
                                            onChange={handleChange}
                                            onBlur={() => handleFieldBlur('about', formData.declaration.about)}
                                            required
                                        >
                                            <option value="" disabled>
                                                How did you know about this scholarship *
                                            </option>
                                            {About.map((a) => (
                                                <option key={a.value} value={a.value}>
                                                    {a.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.about && <div className="invalid-feedback">{errors.about}</div>}
                                    </div>
                                </div>
                                <div className="row g-3 m-4">

                                    <h3 className='row mb-2'>Declaration</h3>
                                    <p>
                                    I hereby declare that the information provided is true and correct. I also understand that any willful dishonesty may render for refusal of this application or immediate termination. SEEEDS may use my information & my pictures to share with partner organization, potential donors and social media(Facebook, Instagram, LinkedIn, WhatsApp etc.).
                                    </p>
                                </div>

                                <div className="form-row">
                                    <div className="col-auto">
                                        <label style={{ display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="checkbox"
                                                name="declaration.agree"
                                                checked={formData.declaration.agree}
                                                onChange={handleChange}
                                                onBlur={() => handleFieldBlur('agree', formData.declaration.agree)}
                                                style={{ marginRight: '10px', width: '18px', height: '18px' }}
                                            />
                                            <span style={{ fontSize: '16px', fontWeight: '500' }}>I Agree*</span>
                                        </label>
                                    </div>
                                </div>


                            </div>
                        )}
                        <div className="row">
                            <div className="col d-flex justify-content-end align-items-center mt-3">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={handlePrevStep}
                                        className="btn"
                                        style={{
                                            backgroundColor: '#d3d3d3', // Light grey for the back button
                                            color: '#000', // Black text
                                            textTransform: 'uppercase',
                                            marginRight: '10px', // Space between back and next buttons
                                        }}
                                    >
                                        Back
                                    </button>
                                )}

                                {currentStep < 5 && (
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        className={`btn ${isFormValid ? 'btn-primary' : 'btn-dark'}`}
                                        disabled={!isFormValid}
                                        style={{
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Next
                                    </button>
                                )}

                                {currentStep === 5 && (
                                    <button
                                        type="submit"
                                        className={`btn ${isFormValid ? 'btn-primary' : 'btn-dark'}`}
                                        disabled={!isFormValid}
                                        style={{
                                            textTransform: 'uppercase',
                                            marginLeft: currentStep > 1 ? '10px' : '0', // Add space if the back button exists
                                        }}
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;