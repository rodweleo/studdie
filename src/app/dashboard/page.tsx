import AdminDashboard from "../admin/dashboard/page";
import UserDashboard from "../user/dashboard/page";
import UserAccount from "../user/layout";

export default async function Dashboard() {
  const userRole: string = "user";

  if (userRole === "admin") {
    return <AdminDashboard />;
  } else if (userRole === "user") {
    return <UserAccount />;
  } else {
    return <main>Access Denied</main>;
  }
}
