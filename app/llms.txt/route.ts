import { renderLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

export async function GET() {
  return new Response(renderLlmsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
