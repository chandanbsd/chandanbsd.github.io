const ProjectsSection = () => {

  const projects = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/hOGkdoRL1oA",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/TfdJhcw-w5w",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/GpRaH7vO1tE",
    },
  ];

  return (<div>
    <div>
      <h3 className="text-4xl font-semibold text-center leading-tight p-4">
        Projects
      </h3>
    </div>
    <div>
      {projects.map((item, id) => (
        <div className="max-w-4xl mx-auto p-4" key={id}>
          <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-2xl border border-gray-300">
            <iframe
              className="absolute top-0 left-0 w-full h-full pointer-events-auto z-10"
              src={item.link}
              title="YouTube video"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
              allow="picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
          </div>
        </div>
      ))}
    </div>
  </div >
  );
};

export default ProjectsSection;
