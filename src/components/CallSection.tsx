const CallToAction = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-5xl font-bold text-[#0A0A33] leading-snug">
          Ready to learn design<br className="hidden sm:inline" />
          <span className="text-[#0A0A33]"> with Nia Matos</span>
        </h2>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-[#FEF3EC] text-[#F18C4F] font-semibold text-sm px-6 py-3 rounded-md shadow-sm hover:bg-[#fde3d2] transition-colors"
          >
            Start Learning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
