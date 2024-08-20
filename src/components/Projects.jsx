import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import { Autoplay, Grid, Navigation, Pagination } from "swiper";
import ModalInfoProject from "./ModalInfoProject";
import { useState } from "react";

const Projects = () => {
  const { Projects } = content;
  const [isModalOpen, setModalOpen] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    image: "",
    description: "",
    year: 0,
    linkUrlWeb: "",
    linkUrlRepo: "",
    platform: "",
    technologies: [],
    imageAppShowCase: []
  });

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 py-14 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            data-aos="fade-left"
            spaceBetween={32}
            modules={[Autoplay, Pagination, Navigation, Grid]}
            className="rounded-3xl  drop-shadow-primary self-start"
            grid={{
              rows: 2, // Number of rows
              fill: "row",
            }}
            slidesPerView={3} // Number of slides per row
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl min-h-full p-5 border-b-8 border-[#FAF9FD] h-fit transform transition-transform duration-300 ease-out hover:scale-105 hover:bg-opacity-80 hover:backdrop-blur-md cursor-pointer"
                onClick={() => {
                  setModalOpen(true);
                  setProjectInfo({
                    title: content.title,
                    image: content.image,
                    description: content.description,
                    year: content.year,
                    linkUrlWeb: content.linkUrlWeb,
                    linkUrlRepo: content.linkUrlRepo,
                    platform: content.platform,
                    technologies: [...content.technologies],
                    imageAppShowCase: [...content.imageAppShowCase],
                  });
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img src={content.image} alt="..." className="md:min-h-[260px]" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setProjectInfo({
                        title: content.title,
                        image: content.image,
                        description: content.description,
                        year: content.year,
                        linkUrlWeb: content.linkUrlWeb,
                        linkUrlRepo: content.linkUrlRepo,
                        platform: content.platform,
                        technologies: [...content.technologies],
                        imageAppShowCase: [...content.imageAppShowCase],
                      });
                    }}
                    className="font-bold text-gray self-end"
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <ModalInfoProject
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            project={projectInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
