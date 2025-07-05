import StudentForm from "../../components/forms/StudentForm.jsx";

export default function StudentFormPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Student Registration</h2>
      <StudentForm />
    </div>
  );
}