// app/page.js
import Link from 'next/link';

export default function RootPage() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        Go to the <Link href="/week-2">Week 2 Page</Link>
      </p>
    </main>
  );
}
