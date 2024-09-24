// week-2/page.js
import StudentInfo from './student-info'; // Import the StudentInfo component

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo /> {/* This renders the StudentInfo component */}
    </main>
  );
}
