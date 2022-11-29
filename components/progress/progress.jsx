import { useNProgress } from "@tanem/react-nprogress";
import { Bar } from "./Bar";
import { Container } from "./Container";

export const Progress = ({ isAnimating }) => {
  const { animationDuration, progress, isFinished } = useNProgress({
    isAnimating,
  });
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};
