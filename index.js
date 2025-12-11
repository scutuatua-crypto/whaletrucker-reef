export default {
  async fetch(request, env) {
    // เขียนค่า reef_status ลง KV
    await env.WHALETRUCKER_REEF_KV.put("reef_status", "online");

    // อ่านค่า reef_status จาก KV
    const status = await env.WHALETRUCKER_REEF_KV.get("reef_status");

    // ตอบกลับผ่าน Worker
    return new Response(`Hello WhaleTrucker 🐋 reef status: ${status}`, {
      headers: { "content-type": "text/plain" },
    });
  },
};
