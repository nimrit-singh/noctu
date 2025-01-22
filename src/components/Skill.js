import SectionTitle from "./SectionTitle";
import { FaNextJs } from "react-icons/fa";

const skillsData = [
  { id: 1, name: "Next.js", icon: "fab fa-js-square" },
  { id: 2, name: "React Server Components", icon: "fab fa-react" },
  { id: 3, name: "React Native", icon: "fab fa-react" },
  { id: 4, name: "Flutter", icon: "fas fa-mobile" },
  { id: 5, name: "TailwindCSS", icon: "fab fa-css3" },
  { id: 6, name: "Generative AI", icon: "fas fa-robot" },
  { id: 7, name: "LangChain", icon: "fas fa-link" },
  { id: 8, name: "Vector Databases", icon: "fas fa-database" },
  { id: 9, name: "GraphQL", icon: "fas fa-project-diagram" },
  { id: 10, name: "tRPC", icon: "fas fa-bolt" },
  { id: 11, name: "Prisma ORM", icon: "fas fa-layer-group" },
  { id: 12, name: "CI/CD Automation", icon: "fas fa-sync" }
 ];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        {/*  */}
        <div className="row">
          {/*  */}
          <div className="col-sm-12 col-lg-6 ">
            <div className="section-heading">
              <h6>
                <span>Skills</span>
              </h6>
              <h3>
                <span>Our Skills</span>
              </h3>
            </div>
            <p className="fs-5">
              We specialize in crafting sleek websites, dynamic web services,
              and captivating online stores, tailored to meet diverse client
              needs. Our passion lies in delivering exceptional experiences that
              resonate with your audience, elevating your online presence. With
              a focus on user-centric design and cutting-edge technology, we
              ensure your digital presence reflects your brand identity and
              drives engagement. Partner with us to unleash your online
              ventures' potential and achieve digital success.
            </p>
          </div>
          {/*  */}
          <div className="col-sm-12 col-lg-6 mt-5">
            <div className="skill-box">
              <div className="row g-2">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};
export default Skill;
