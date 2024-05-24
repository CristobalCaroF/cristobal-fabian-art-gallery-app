import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("data: ", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
