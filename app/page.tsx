import { Login } from "@/components/login";
import { createClient } from "@/supabase/server";

export default async function Page() {
  const client = createClient();
  const { data } = await client.auth.getSession();

  return <div>{data.session != null ? <h1>logged in</h1> : <Login />}</div>;
}
