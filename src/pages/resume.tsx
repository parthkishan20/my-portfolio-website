import siteData from "@/data/siteData.json";


export default function Resume() {
  return (
    <section className="py-2">
      <div className="container">
        {/* <h1 className="mb-10 px-4 text-4xl font-bold md:mb-14 md:text-5xl text-center tracking-tight">
          Resume
        </h1> */}
        <div className="w-full mx-auto rounded-lg overflow-hidden bg-muted flex items-center justify-center" style={{ aspectRatio: '8.5/11' }}>
          <iframe
            src={siteData.resume.pdfPath.replace("/view", "/preview")}
            title="Resume Preview"
            className="w-full h-full border-none"
            allow="autoplay"
          />
        </div>
      </div>
    </section>
  );
}