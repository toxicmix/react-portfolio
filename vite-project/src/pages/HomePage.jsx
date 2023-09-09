import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";



const HomePage = () => {
  const githubUrl = "https://github.com/toxicmix";
  const linkedinUrl = "https://www.linkedin.com/in/sam-levine-62658b287/";

  return (
    <>
      <h1>Welcome</h1>
      <p>This website was created by me to show you a little bit about my computer science adventures!</p>
      <p>Feel free to look around and contact me if you have any questions!</p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3em"/>
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3em"/>
      </a>

      
    </>
  )
}

export default HomePage