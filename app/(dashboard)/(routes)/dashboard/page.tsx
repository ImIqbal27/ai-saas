import { UserButton } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <div>
      <p> Dashboard Page !(Protected)</p>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};
export default Dashboard;
