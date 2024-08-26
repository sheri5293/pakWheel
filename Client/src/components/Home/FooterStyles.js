import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 0;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  text-align: left;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

export const Newsletter = styled.div`
  max-width: 300px;
  margin: auto;
  text-align: center;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;
