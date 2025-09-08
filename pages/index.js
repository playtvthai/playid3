import Player from "../components/Player";

export default function Home() {
  // ใส่ลิงก์ m3u8 ที่ต้องการ proxy
  const url = encodeURIComponent("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
  const proxyUrl = `/api/proxy?url=${url}`;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Next.js + Hls.js Proxy Example</h1>
      <Player streamUrl={proxyUrl} />
    </div>
  );
}
