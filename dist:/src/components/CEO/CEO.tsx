const CEO = () => {
  return (
    <section id="ceo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="anthony.jpg"
            alt="Anthony Lucas Sanchez - CEO"
            className="w-64 h-64 object-cover rounded-full shadow-2xl"
          />
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Anthony Lucas Sanchez</h3>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-4">
                Anthony Lucas Sanchez is the visionary founder and CEO of Wealth Empowerment Network Inc. 
                With a deep passion for architecture and business development, Anthony has led 
                the company to achieve groundbreaking success. His innovative approach, combined 
                with over 10 years of experience in strategic leadership, has inspired the creation 
                of meaningful partnerships worldwide.
              </p>
              <p className="text-gray-700">
                Anthony believes in empowering organizations through sustainable practices and 
                forward-thinking strategies. Under his leadership, Wealth Empowerment Network Inc 
                continues to redefine industries and make a global impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;