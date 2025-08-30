// app/home/page.js
export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error loading users</div>;
  }

  const users = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}: {user.username} — Joined:{" "}
            {new Date(user.joindate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
