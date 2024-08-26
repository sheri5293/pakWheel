import styled from "styled-components";

export const FeaturedCarsSection = styled.div`
  padding: 50px 0;
  background-color: #f5f5f5;
`;

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const CarCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CarInfo = styled.div`
  padding: 20px;
`;
