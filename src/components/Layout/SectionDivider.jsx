import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  overflow: hidden;
`;

const DividerLine = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg, 
    transparent 0%, 
    ${({ theme }) => theme.colors.lightGray} 20%, 
    ${({ theme }) => theme.colors.primary} 50%, 
    ${({ theme }) => theme.colors.lightGray} 80%, 
    transparent 100%
  );
  width: 100%;
  max-width: 800px;
  position: relative;
`;

const DividerDots = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 8px;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  opacity: ${({ $index }) => 1 - ($index * 0.3)};
`;

const SectionDivider = () => {
  return (
    <DividerContainer>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <DividerLine>
          <DividerDots>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: 0.5 + (index * 0.1), 
                  duration: 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <Dot $index={index} />
              </motion.div>
            ))}
          </DividerDots>
        </DividerLine>
      </motion.div>
    </DividerContainer>
  );
};

export default SectionDivider;