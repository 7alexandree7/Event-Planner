import DashboardContent from "@/components/DashboardContent/DashboardContent";
import { getSession } from "@/lib/auth/server";


const DashboardPage = async () => {

  const session = await getSession();
  return (
    <div>
      <DashboardContent userId={session?.data?.user?.id} />
    </div>
  )
}

export default DashboardPage
