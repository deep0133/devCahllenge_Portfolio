import Image from "./Image";
import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  return (
    <section className='bg-card p-5 hover:shadow-2xl transition duration-200 rounded-xl overflow-hidden'>
      <div className='img hover:scale-110 transition duration-300 ease-in-out'>
        <Image imgUrl={project.image.url} imgAlt={project.image.alt} />
      </div>
      <div className='content py-3 font-poppin'>
        <div className='tech text-lightGray mt-2 text-sm space-x-3'>
          {project.tech.map((tech, index) => (
            <span key={index} className='capitalize'>
              #{tech}
            </span>
          ))}
        </div>
        <h2 className='project-name text-darkGray mt-3 font-semibold'>
          {project.title}
        </h2>
        <p className='project-name text-lightGray py-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga.
        </p>
        <div className='btn flex justify-between mt-5'>
          <a
            href={project.viewProject || "/"}
            target='_blank'
            rel='noreferrer'
            className={`demo ${
              project.viewProject
                ? "bg-blue-600"
                : "bg-blue-400 cursor-not-allowed"
            }  w-1/3 py-2 flex justify-center items-center border rounded-xl text-white`}>
            Demo
          </a>
          <a
            href={project.viewSourceCode || "/"}
            target='_blank'
            rel='noreferrer'
            className={`code ${
              project.viewSourceCode
                ? "border-blue-600"
                : "border-blue-400 cursor-not-allowed"
            } text-blue-600 flex justify-center items-center w-1/3 py-1 border rounded-xl`}>
            Code
          </a>
        </div>
      </div>
    </section>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    tech: PropTypes.array,
    viewProject: PropTypes.string,
    viewSourceCode: PropTypes.string.isRequired,
  }),
};
