import backgroundPhoto from "../../../assets/home/chef-service.jpg";
const About = () => {
    return (
        <div style={{ '--image-url': `url(${backgroundPhoto})` }}
            className='bg-[image:var(--image-url)]'>
            <div>
                <h2 className="text-3xl text-center uppercase">Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis blanditiis, necessitatibus nemo dolorem possimus unde fuga, reiciendis quo ut suscipit delectus cupiditate dolores minus optio! Dolores veniam quas omnis.
                    Asperiores reprehenderit minima magnam cumque animi at reiciendis, sequi ratione culpa! Voluptatem fuga officiis recusandae impedit excepturi, quis inventore assumenda fugit sit, debitis voluptatum non unde ut minus iste rem!</p>
            </div>
        </div>
    );
};

export default About;