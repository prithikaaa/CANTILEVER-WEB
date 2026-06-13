export default function Kanban() {
  return (
    <div>
      <h2>Kanban Board</h2>

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <div>
          <h3>Todo</h3>
          <div>Build API</div>
        </div>

        <div>
          <h3>In Progress</h3>
          <div>Dashboard UI</div>
        </div>

        <div>
          <h3>Done</h3>
          <div>Login Page</div>
        </div>
      </div>
    </div>
  );
}