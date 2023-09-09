import { CreateChatModal } from "@/components/modals/create-chat-modal";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) return redirect("/signIn");

  return (
    <>
      <CreateChatModal />
      {props.children}
    </>
  );
};

export default DashboardLayout;
