const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Student_data')
.then(() => console.log('database connected successfully'))

	.catch((e) => console.log('not connected', e))

    

// Define schema for academic records
const academicRecordSchema = new mongoose.Schema({
  student_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  courses: [{
    course_name: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: true
    }
  }],
  additional_info: {
    total_credits: Number,
    gpa: Number,
    academic_status: String
  }
});




// Define schema for co-curricular activities
const coCurricularActivitySchema = new mongoose.Schema({
  student_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  activities: [{
    activity_type: {
      type: String,
      required: true
    },
    duration: String,
    achievements: String
  }]
});

// Create model for co-curricular activities collection
const CoCurricularActivity = mongoose.model('CoCurricularActivity', coCurricularActivitySchema);

module.exports = CoCurricularActivity;
const mongoose = require('mongoose');
const AcademicRecord = require('./models/academicRecord');
const CoCurricularActivity = require('./models/coCurricularActivity');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/student_data')
  .then(() => {
    console.log('Database connected successfully');
    // Insert sample academic records
    AcademicRecord.insertMany([
      {
        student_id: 1,
        name: "John Doe",
        semester: "Spring 2024",
        courses: [
          { course_name: "Computer Science", subject: "Math", grade: "A" },
          { course_name: "Computer Science", subject: "Science", grade: "B" },
          { course_name: "Computer Science", subject: "English", grade: "A-" }
        ],
        additional_info: { total_credits: 12, gpa: 3.67, academic_status: "Good Standing" }
      },
      // Insert additional academic records if needed
    ]);

    // Insert sample co-curricular activities
    CoCurricularActivity.insertMany([
      {
        student_id: 1,
        name: "John Doe",
        activities: [
          { activity_type: "Debate Club", duration: "3 years", achievements: "Best Speaker Award 2023" },
          { activity_type: "Chess Club", duration: "2 years", achievements: "Runner-up in National Tournament 2022" }
        ]
      },
      // Insert additional co-curricular activities if needed
    ]);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

  const mongoose = require('mongoose');
  const AcademicRecord = require('./models/academicRecord');
  
  
  // Connect to MongoDB
  mongoose.connect('mongodb://127.0.0.1:27017/prepinstaCollege')
    .then(async () => {
      console.log('Database connected successfully');
  
      // CRUD operations on academic records collection
  
      // Create operation
      const newAcademicRecord = await AcademicRecord.create({
        student_id: 2,
        name: "Alice Smith",
        semester: "Spring 2024",
        courses: [
          { course_name: "Physics", subject: "Physics", grade: "A" },
          { course_name: "Mathematics", subject: "Calculus", grade: "B" },
          { course_name: "English", subject: "Literature", grade: "A" }
        ],
        additional_info: { total_credits: 14, gpa: 3.5, academic_status: "Good Standing" }
      });
      console.log('New academic record created:', newAcademicRecord);
  
      // Read operation
      const allAcademicRecords = await AcademicRecord.find();
      console.log('All academic records:', allAcademicRecords);
  
      // Update operation
      const academicRecordToUpdate = await AcademicRecord.findOne({ student_id: 1 });
      academicRecordToUpdate.semester = "Fall 2024";
      await academicRecordToUpdate.save();
      console.log('Updated academic record:', academicRecordToUpdate);
  
      // Delete operation
      const academicRecordToDelete = await AcademicRecord.findOneAndDelete({ student_id: 2 });
      console.log('Deleted academic record:', academicRecordToDelete);
  
      // CRUD operations on co-curricular activities collection
  
      // Create operation
      const newCoCurricularActivity = await CoCurricularActivity.create({
        student_id: 1,
        name: "John Doe",
        activities: [
          { activity_type: "Basketball Team", duration: "2 years", achievements: "Regional Championship 2023" }
        ]
      });
      console.log('New co-curricular activity created:', newCoCurricularActivity);
  
      // Read operation
      const allCoCurricularActivities = await CoCurricularActivity.find();
      console.log('All co-curricular activities:', allCoCurricularActivities);
  
      // Update operation
      const coCurricularActivityToUpdate = await CoCurricularActivity.findOne({ student_id: 1 });
      coCurricularActivityToUpdate.activities[0].achievements = "National Championship 2024";
      await coCurricularActivityToUpdate.save();
      console.log('Updated co-curricular activity:', coCurricularActivityToUpdate);
  
      // Delete operation
      const coCurricularActivityToDelete = await CoCurricularActivity.findOneAndDelete({ student_id: 1 });
      console.log('Deleted co-curricular activity:', coCurricularActivityToDelete);
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
  

