import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

export default async function Code({
  className,
  code,
  lang,
}: { className?: string, code: string, lang: string}) {
  const html = await codeToHtml(code, {
    lang: lang,
    theme: "material-theme-ocean",
    transformers: [
      {
        pre: (element) => {
          element.properties.class += " !bg-zinc-900 !rounded-lg !p-4 !z-50 !relative";

          return element;
        },
      },
    ],
  });

  return <div className={cn("py-8", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
