import React from 'react';
import styled from 'styled-components';

const EducationCardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1); // Transparent background
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
`;

// TypeScript interface for props
interface EducationCardProps {
  name: string;
  period: string;
  cgpa: string;
  degree: string;
}

// Component with typed props
const EducationCard: React.FC<EducationCardProps> = ({ name, period, cgpa, degree }) => (
  <EducationCardContainer>
    <h4>{name}</h4>
    <p>{period}</p>
    <p>CGPA: {cgpa}</p>
    <p>Degree: {degree}</p>
  </EducationCardContainer>
);

export default EducationCard;
