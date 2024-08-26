import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  padding: 50px 0;
  background-color: #f5f5f5;
`;

export const TestimonialCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;
