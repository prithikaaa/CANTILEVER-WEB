import UserTable from "./UserTable";
import Kanban from "./Kanban";

export default function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>Total Users: 100</div>
        <div>Tasks: 20</div>
        <div>Revenue: ₹50000</div>
      </div>

      <hr />

      <UserTable />

      <hr />

      <Kanban />
    </div>
  );
}